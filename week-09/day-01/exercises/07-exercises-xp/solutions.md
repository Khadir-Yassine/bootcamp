# Exercises XP — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/hooks.jsx)

## How to run

From `week-09/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **hooks**.

## Approach and implementation

`ThemeProvider` stores light/dark state and exposes a toggle through context. `ThemeSwitcher` consumes the context and the provider applies the theme class. `CharacterCounter` uses refs to read the textarea and update its output directly during input, meeting the lesson's no-rerender requirement while keeping the count live.

## Check the result

- Toggle the theme twice and verify the page changes both times.
- Type and delete characters and compare the displayed count.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
