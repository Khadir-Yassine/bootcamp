# Exercises XP NINJA — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/errors.jsx)

## How to run

From `week-07/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **errors**.

## Approach and implementation

`CompassClock` is a class component with state for year, month, weekday, calendar day, hour, minute, and second. Mounting starts a one-second interval; unmounting clears it. Three circular scales rotate according to hours, minutes, and seconds, while a centered text readout remains upright. The year sits at the top left and the month at the bottom right.

## Check the result

- Check the displayed local date/time against your computer.
- Watch the seconds ring move and verify the year/month corner labels.
- Change tabs and return: the clock still works without accumulating timers.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
