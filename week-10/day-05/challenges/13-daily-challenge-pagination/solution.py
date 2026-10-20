"""Strict pagination: out-of-range page numbers raise ValueError."""
import math


class Pagination:
    def __init__(self, items=None, page_size=10):
        if isinstance(page_size, bool) or int(page_size) != float(page_size) or int(page_size) <= 0: raise ValueError('Page size must be a positive integer')
        self.items, self.page_size, self.current_idx = list(items) if items is not None else [], int(page_size), 0
        self.total_pages = math.ceil(len(self.items) / self.page_size)
    def get_visible_items(self):
        start = self.current_idx * self.page_size; return self.items[start:start + self.page_size]
    def go_to_page(self, page_num):
        if isinstance(page_num, bool): raise ValueError('Page must be an integer')
        try:
            number = int(page_num)
            if float(page_num) != number or not 1 <= number <= self.total_pages: raise ValueError
        except (TypeError, ValueError, OverflowError): raise ValueError('Page is out of range') from None
        self.current_idx = number - 1
    def first_page(self): self.current_idx = 0; return self
    def last_page(self): self.current_idx = max(0, self.total_pages - 1); return self
    def next_page(self): self.current_idx = min(max(0, self.total_pages - 1), self.current_idx + 1); return self
    def previous_page(self): self.current_idx = max(0, self.current_idx - 1); return self
    def __str__(self): return '\n'.join(map(str, self.get_visible_items()))


if __name__ == '__main__':
    p = Pagination(list('abcdefghijklmnopqrstuvwxyz'), 4)
    print(p.get_visible_items()); p.next_page(); print(p.get_visible_items()); p.last_page(); print(p.get_visible_items()); print(str(p))
    for number in (10, 0):
        try: p.go_to_page(number)
        except ValueError as error: print(f'Page {number}: {error}')
