# Planets and Moons — Worked Solutions

[Instructions](README.md) · [Source](solutions.js) · [Browser app](index.html)

## Run

```sh
node solutions.js
```


## Implementation

Open `index.html`. JavaScript creates a div with class `planet` for each of the eight planet objects, assigns a distinct background color, and appends it under the supplied section. The page has a black background.

The bonus uses planet objects with a `moonCount` and a selected moon-name array. `moonEntries()` creates one `.moon` element per moon in the dated count. Named examples use their real names; the other markers are explicitly numbered rather than assigned invented names. Expand each planet’s details to see its markers without filling the initial view with hundreds of dots. Counts are a fixed educational snapshot, not live data.

Snapshot retrieved on 20 October 2026: Mercury 0, Venus 0, Earth 1, Mars 2, Jupiter 115, Saturn 293, Uranus 29, Neptune 16. Source: [NASA Space Place — How Many Moons Does Each Planet Have?](https://spaceplace.nasa.gov/how-many-moons/en/). New discoveries can change these numbers; update the data without changing the renderer.
