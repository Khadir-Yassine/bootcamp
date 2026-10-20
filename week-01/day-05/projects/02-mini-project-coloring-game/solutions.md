# Coloring Studio — Worked Solution

[Instructions](README.md) · [Open app](index.html) · [Source](solutions.js)

## Run

Open `index.html` in a modern browser. No installation or API key is required.

## How it works

CSS Grid creates a 32 × 24 canvas and a separate color palette. Each cell stores its index; the painting model owns its color. Palette buttons update the selected color and `aria-pressed` state.

Pointer down starts drawing, pointer move paints the cell under the pointer, and pointer up/cancel or window blur ends the stroke. Pointer events cover mouse, pen and touch. A click also paints, supporting keyboard activation. Clear resets both the model and all cell backgrounds. White acts as an eraser.

## Check

Select a color, drag across several squares, release outside the grid, and move back: drawing must stop. Choose white to erase, then clear. Keyboard users can select palette buttons and paint focused cells with Enter or Space. Model bounds, colors, dimensions and clearing are covered by `../../../tests/day05.test.cjs` (run from the week folder using the command in its solution index).
