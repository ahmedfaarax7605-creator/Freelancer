#!/usr/bin/env python3
"""Verify that every internal link, stylesheet, script and image referenced by
the TradeCode Academy HTML pages resolves to an existing file.

Runs locally (python scripts/check_links.py) and in GitHub Actions.
Exits non-zero on any broken reference so CI fails loudly.
"""

import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# References that intentionally do not point at local files.
EXTERNAL_PREFIXES = ("http://", "https://", "mailto:", "tel:", "data:", "//")


def strip_fragment(url: str) -> str:
    """Drop #fragment and ?query parts for local file resolution."""
    return url.split("#", 1)[0].split("?", 1)[0]


def resolve_target(html_file: Path, ref: str) -> Path | None:
    """Resolve a reference relative to the HTML file. Return None when the
    reference is external/empty/anchored."""
    ref = ref.strip().strip('"').strip("'")
    if not ref:
        return None
    if ref.startswith(EXTERNAL_PREFIXES) or ref.startswith("#"):
        return None
    path = strip_fragment(ref)
    if not path:
        return None
    target = (html_file.parent / path).resolve()
    # Reject paths that escape the project root (e.g. broken ../.. usage).
    if ROOT not in target.parents and target != ROOT:
        return None
    return target


def check_css_assets(css_file: Path, errors: list, checked: set) -> None:
    """Verify url(...) references inside a stylesheet."""
    text = css_file.read_text(encoding="utf-8")
    for match in re.finditer(r"url\((['\"]?)(.*?)\1\)", text):
        ref = match.group(2)
        if not ref or ref.startswith(EXTERNAL_PREFIXES) or ref.startswith("data:"):
            continue
        target = (css_file.parent / strip_fragment(ref)).resolve()
        if not target.exists():
            errors.append(f"{css_file.relative_to(ROOT)} -> missing asset: {ref}")
        checked.add(target)


def main() -> int:
    errors: list = []
    checked: set = set()
    html_files = sorted(ROOT.glob("**/*.html"))
    css_files = sorted(ROOT.glob("**/*.css"))
    js_files = sorted(ROOT.glob("**/*.js"))

    print(f"Checking {len(html_files)} HTML pages, {len(css_files)} stylesheets, {len(js_files)} scripts...")

    for html in html_files:
        text = html.read_text(encoding="utf-8")
        refs = (
            re.findall(r'(?:href|src)\s*=\s*["\']([^"\']+)["\']', text)
            + re.findall(r"(?:href|src)\s*=\s*['\"]([^'\"]+)['\"]", text)
        )
        for ref in refs:
            target = resolve_target(html, ref)
            if target is None:
                continue
            if not target.exists():
                errors.append(f"{html.relative_to(ROOT)} -> missing: {ref}")

    for css in css_files:
        check_css_assets(css, errors, checked)

    if errors:
        print("\nBROKEN REFERENCES FOUND:\n")
        for err in errors:
            print("  - " + err)
        print(f"\n{len(errors)} broken reference(s).")
        return 1

    print(f"OK: all references resolve ({len(html_files)} pages).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
