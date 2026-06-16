#!/usr/bin/env python3
"""
file_creator.py

Creates the complete folder structure and all required empty files for the
project-root (HTML/CSS/JS + Tailwind) as specified in the project layout.
"""

from pathlib import Path


def create_structure() -> None:
    """Create all directories and empty files for the project."""
    base = Path("project-root")

    # Directories to create
    directories = [
        base / "src",
        base / "src" / "css",
        base / "src" / "js",
        base / "src" / "js" / "components",
        base / "src" / "js" / "utils",
        base / "src" / "assets",
        base / "src" / "assets" / "img",
    ]

    # Files to create (empty)
    files = [
        base / "index.html",
        base / "package.json",
        base / "package-lock.json",
        base / "tailwind.config.js",
        base / ".gitignore",
        base / "README.md",
        base / "src" / "css" / "input.css",
        base / "src" / "css" / "output.css",
        base / "src" / "js" / "main.js",
        base / "src" / "js" / "components" / "lightbulb.js",
        base / "src" / "js" / "components" / "colorChanger.js",
        base / "src" / "js" / "components" / "formHandler.js",
        base / "src" / "js" / "utils" / "helpers.js",
        base / "src" / "assets" / "img" / "pic_bulboff.gif",
        base / "src" / "assets" / "img" / "pic_bulbon.gif",
    ]

    # Create directories (with parents, ignore if already exist)
    for directory in directories:
        directory.mkdir(parents=True, exist_ok=True)
        print(f"Created directory: {directory}")

    # Create empty files (ignore if already exist)
    for file_path in files:
        file_path.touch(exist_ok=True)
        print(f"Created empty file: {file_path}")


if __name__ == "__main__":
    create_structure()