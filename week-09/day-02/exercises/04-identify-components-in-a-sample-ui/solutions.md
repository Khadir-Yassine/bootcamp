# Identify Components in a Sample UI — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/autobarista.jsx)

## How to run

From `week-09/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **autobarista**.

## Approach and implementation

A video home page separates major layout regions (Header, Sidebar, VideoGrid) from reusable SearchBar, VideoThumbnail, and SubscribeButton components. See the [annotated component sketch](../../../solutions/component-map.svg). Red outlines denote layout regions; blue outlines denote reusable children. This is a labelled reconstruction, not a claim that a live YouTube screenshot was captured.

## Check the result

Open AutoBarista and exercise the corresponding panel. All hardware behavior is labelled and implemented as a local learning simulation.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
