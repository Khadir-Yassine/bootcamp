# Worked solutions

Run `python solution.py` from this folder. Source: [solution.py](solution.py). Python 3 and its standard library are sufficient. Interactive/demo options are explained below.

<a id="exercise-1"></a>

## 1. Pagination

Pagination copies its items, validates page_size, starts at index 0 and computes page count with ceil. Visible items use slicing. First/last/next/previous return self for chaining and stay within bounds; str prints one item per line. go_to_page accepts one-based integer page numbers (including numeric strings) and raises ValueError outside the available range. Empty data displays an empty page and keeps index 0. **Prompt conflict:** Step 4 explicitly requires an error for out-of-range input, while the later example expects page 10 to clamp to page 7. This implementation follows the explicit Step 4 requirement; page 10 and page 0 therefore both raise ValueError, and the runnable demo catches both.

