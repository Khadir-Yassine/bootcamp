# Reference solution

Reads UTF-8 text, displays the requested line/character/word views and counts exact names. It appends the chosen first name and replaces each exact Luke token with Luke SkyWalker in a separate *-updated.txt output, preserving the downloaded input for repeated practice. Use --download for the assigned dataset, or pass an existing file for offline use. The included test uses a temporary fixture.

## Files

- [`names.py`](solution/names.py)
- [`test_names.py`](solution/test_names.py)

## Run

From this activity's `solution` directory:

```sh
# No third-party dependencies needed.
python -m unittest test_names.py
python names.py --download --name Yassine
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
