"""In-memory restaurant menu with validated add, update and removal."""


class MenuManager:
    def __init__(self):
        self.menu = [
            {'name': 'Soup', 'price': 10, 'spice': 'B', 'gluten': False},
            {'name': 'Hamburger', 'price': 15, 'spice': 'A', 'gluten': True},
            {'name': 'Salad', 'price': 18, 'spice': 'A', 'gluten': False},
            {'name': 'French Fries', 'price': 5, 'spice': 'C', 'gluten': False},
            {'name': 'Beef bourguignon', 'price': 25, 'spice': 'B', 'gluten': True}
        ]
    @staticmethod
    def _item(name, price, spice, gluten):
        if not name.strip() or price < 0 or spice not in 'ABC' or len(spice) != 1 or not isinstance(gluten, bool): raise ValueError('Invalid dish; use a name, non-negative price, A/B/C spice, and boolean gluten')
        return {'name': name, 'price': price, 'spice': spice, 'gluten': gluten}
    def add_item(self, name, price, spice, gluten):
        if any(dish['name'] == name for dish in self.menu): raise ValueError('Dish already exists')
        self.menu.append(self._item(name, price, spice, gluten)); return self.menu[-1]
    def update_item(self, name, price, spice, gluten):
        for dish in self.menu:
            if dish['name'] == name: dish.update(self._item(name, price, spice, gluten)); return True
        print(f'{name} is not in the menu.'); return False
    def remove_item(self, name):
        for index, dish in enumerate(self.menu):
            if dish['name'] == name: self.menu.pop(index); print(self.menu); return True
        print(f'{name} is not in the menu.'); return False


if __name__ == '__main__':
    manager = MenuManager(); manager.add_item('Couscous', 20, 'B', True)
    manager.update_item('Soup', 12, 'A', False); manager.remove_item('Salad')
