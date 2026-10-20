"""Conway's Game of Life with fixed borders and optional sparse expansion."""
import argparse
from collections import Counter


class GameOfLife:
    def __init__(self, live_cells, width=20, height=12, expandable=False, max_border=10000):
        if min(width, height, max_border) <= 0: raise ValueError('Border sizes must be positive')
        self.width, self.height, self.expandable, self.max_border = width, height, expandable, max_border
        self.live_cells = {tuple(cell) for cell in live_cells if self._inside(*cell)}
        self.generation = 0
    def _inside(self, x, y):
        if self.expandable:
            low = -(self.max_border // 2); high = low + self.max_border
            return low <= x < high and low <= y < high
        return 0 <= x < self.width and 0 <= y < self.height
    def step(self):
        counts = Counter((x + dx, y + dy) for x, y in self.live_cells for dx in (-1, 0, 1) for dy in (-1, 0, 1) if dx or dy)
        self.live_cells = {cell for cell, neighbors in counts.items() if self._inside(*cell) and (neighbors == 3 or (neighbors == 2 and cell in self.live_cells))}
        self.generation += 1; return self
    def render(self, max_view=80):
        if self.expandable and self.live_cells:
            left, right = min(x for x, _ in self.live_cells) - 1, max(x for x, _ in self.live_cells) + 1
            top, bottom = min(y for _, y in self.live_cells) - 1, max(y for _, y in self.live_cells) + 1
        else: left, right, top, bottom = 0, self.width - 1, 0, self.height - 1
        # Limit the text viewport only; the sparse simulation retains all live cells.
        right, bottom = min(right, left + max_view - 1), min(bottom, top + max_view - 1)
        return '\n'.join(''.join('O' if (x, y) in self.live_cells else '.' for x in range(left, right + 1)) for y in range(top, bottom + 1))


PATTERNS = {'block': {(2, 2), (3, 2), (2, 3), (3, 3)}, 'blinker': {(2, 3), (3, 3), (4, 3)}, 'glider': {(2, 1), (3, 2), (1, 3), (2, 3), (3, 3)}}


if __name__ == '__main__':
    parser = argparse.ArgumentParser(); parser.add_argument('--pattern', choices=PATTERNS, default='glider'); parser.add_argument('--generations', type=int, default=8); parser.add_argument('--expandable', action='store_true')
    args = parser.parse_args()
    if args.generations < 0: parser.error('Generations must be non-negative')
    game = GameOfLife(PATTERNS[args.pattern], expandable=args.expandable)
    for generation in range(args.generations + 1):
        print(f'Generation {game.generation} / {len(game.live_cells)} live cells\n{game.render()}\n')
        game.step()
