"""Dog base class, imported by pet_dog.py."""


class Dog:
    def __init__(self, name, age, weight):
        if age <= 0 or weight <= 0: raise ValueError('Age and weight must be positive')
        self.name, self.age, self.weight = name, age, weight
    def bark(self): return f'{self.name} is barking'
    def run_speed(self): return self.weight / self.age * 10
    def fight(self, other_dog):
        own_score, other_score = self.run_speed() * self.weight, other_dog.run_speed() * other_dog.weight
        if own_score == other_score: return 'The fight is a tie'
        return f'{self.name if own_score > other_score else other_dog.name} won the fight'


if __name__ == '__main__':
    dogs = [Dog('Rex', 5, 20), Dog('Fido', 3, 18), Dog('Luna', 4, 15)]
    for dog in dogs: print(dog.bark(), dog.run_speed())
    print(dogs[0].fight(dogs[1]))
