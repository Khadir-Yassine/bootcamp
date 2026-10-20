# Pocket Percussion — Worked Solution

[Instructions](README.md) · [Open app](index.html) · [Source](solutions.js)

## Run

Open `index.html` in a modern browser. No installation or API key is required.

## How it works

Nine local WAV recordings are synthesized for this solution, so the project works offline without redistributing another repository's audio. Each pad maps a letter to an HTML `audio` element. Clicks and keyboard events call the same function; it resets `currentTime` before `play()` so a sound can retrigger. Playback failures appear in the status line. The volume slider applies to the next hit. Key repeats are ignored and typing in a form control does not trigger drums.

## Check

Click each pad, play with A S D F G H J K L, rapidly retrigger a sound, and change volume. Listen for the nine different percussion sounds. Automated tests verify all key mappings, retrigger behavior and invalid keys; they do not assess audio quality or browser speaker output.
