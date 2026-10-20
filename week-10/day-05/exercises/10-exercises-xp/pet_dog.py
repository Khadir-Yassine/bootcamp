"""Domesticated dog inherits the imported base class."""
import random
from dog import Dog


class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight); self.trained = trained
    def train(self): print(self.bark()); self.trained = True
    def play(self, *dogs):
        names = [self.name] + [dog.name if isinstance(dog, Dog) else str(dog) for dog in dogs]
        message = f'{", ".join(names)} all play together'; print(message); return message
    def do_a_trick(self, rng=random):
        if not self.trained: return None
        trick = rng.choice(['does a barrel roll', 'stands on his back legs', 'shakes your hand', 'plays dead'])
        message = f'{self.name} {trick}'; print(message); return message


if __name__ == '__main__':
    rex = PetDog('Rex', 4, 20); rex.train(); rex.play('Fido', 'Luna'); rex.do_a_trick()
