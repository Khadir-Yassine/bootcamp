"""Cats, dogs, songs and a grouped zoo directory."""


class Cat:
    def __init__(self, cat_name, cat_age): self.name, self.age = cat_name, cat_age


def oldest_cat(cats):
    if not cats: raise ValueError('Provide at least one cat')
    return max(cats, key=lambda cat: cat.age)


class Dog:
    def __init__(self, name, height): self.name, self.height = name, height
    def bark(self):
        message = f'{self.name} goes woof!'; print(message); return message
    def jump(self):
        message = f'{self.name} jumps {self.height * 2} cm high!'; print(message); return message


class Song:
    def __init__(self, lyrics): self.lyrics = list(lyrics)
    def sing_me_a_song(self):
        for line in self.lyrics: print(line)


class Zoo:
    def __init__(self, zoo_name): self.name, self.animals, self.groups = zoo_name, [], {}
    def add_animal(self, new_animal):
        if not new_animal.strip(): raise ValueError('Animal name cannot be empty')
        if new_animal not in self.animals: self.animals.append(new_animal)
    def get_animals(self):
        for animal in self.animals: print(animal)
        return list(self.animals)
    def sell_animal(self, animal_sold):
        if animal_sold not in self.animals: return False
        self.animals.remove(animal_sold); return True
    def sort_animals(self):
        grouped = {}
        for animal in sorted(self.animals, key=str.casefold): grouped.setdefault(animal[0].upper(), []).append(animal)
        self.groups = {letter: animals[0] if len(animals) == 1 else animals for letter, animals in grouped.items()}
        return self.groups
    def get_groups(self):
        self.sort_animals()
        for letter, animals in self.groups.items(): print(f'{letter}: {animals}')
        return self.groups


if __name__ == '__main__':
    cats = [Cat('Milo', 3), Cat('Luna', 8), Cat('Nala', 5)]
    oldest = oldest_cat(cats); print(f'The oldest cat is {oldest.name}, and is {oldest.age} years old.')
    davids_dog, sarahs_dog = Dog('Rex', 50), Dog('Teacup', 20)
    for dog in [davids_dog, sarahs_dog]: print(dog.name, dog.height); dog.bark(); dog.jump()
    if davids_dog.height > sarahs_dog.height: print('Bigger dog:', davids_dog.name)
    elif sarahs_dog.height > davids_dog.height: print('Bigger dog:', sarahs_dog.name)
    else: print('The dogs are equally tall.')
    Song(['We write a line of code today,', 'And test the bugs along the way.']).sing_me_a_song()
    new_york_zoo = Zoo('New York Zoo')
    for animal in ['Ape', 'Baboon', 'Bear', 'Cat', 'Cougar', 'Eel', 'Emu', 'Giraffe']: new_york_zoo.add_animal(animal)
    new_york_zoo.get_animals(); new_york_zoo.sell_animal('Giraffe'); new_york_zoo.sort_animals(); new_york_zoo.get_groups()
