"""Pets, inherited dogs, family and TheIncredibles."""
from dog import Dog
from pet_dog import PetDog


class Pets:
    def __init__(self, animals): self.animals = list(animals)
    def walk(self):
        for animal in self.animals: print(animal.walk())


class Cat:
    is_lazy = True
    def __init__(self, name, age): self.name, self.age = name, age
    def walk(self): return f'{self.name} is just walking around'


class Bengal(Cat):
    def sing(self, sounds): return str(sounds)


class Chartreux(Cat):
    def sing(self, sounds): return str(sounds)


class Siamese(Cat):
    def sing(self, sounds): return str(sounds)


class Family:
    def __init__(self, members, last_name): self.members, self.last_name = [dict(member) for member in members], last_name
    def born(self, **kwargs):
        if 'name' not in kwargs: raise ValueError('A child needs a name')
        child = {'age': 0, 'is_child': True, **kwargs}; self.members.append(child)
        print(f'Congratulations to the {self.last_name} family on the birth of {child["name"]}!'); return child
    def find_member(self, name):
        for member in self.members:
            if member['name'] == name: return member
        raise ValueError(f'No family member named {name}')
    def is_18(self, name): return self.find_member(name)['age'] > 18
    def family_presentation(self):
        print(f'The {self.last_name} family')
        for member in self.members: print(member)


class TheIncredibles(Family):
    def use_power(self, name):
        member = self.find_member(name)
        if not self.is_18(name): raise PermissionError(f'{name} is not over 18 years old')
        print(member['power']); return member['power']
    def incredible_presentation(self):
        print('****Here is our powerful family*****'); super().family_presentation()


if __name__ == '__main__':
    all_cats = [Bengal('Milo', 2), Chartreux('Luna', 4), Siamese('Nala', 3)]
    sara_pets = Pets(all_cats); sara_pets.walk()
    dogs = [Dog('Rex', 5, 20), Dog('Fido', 3, 18), Dog('Luna', 4, 15)]
    for dog in dogs: print(dog.bark(), dog.run_speed())
    print(dogs[0].fight(dogs[1])); print(dogs[1].fight(dogs[2]))
    pet = PetDog('Buddy', 2, 12); pet.play(*dogs); pet.train(); pet.do_a_trick()
    members = [{'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False}, {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}]
    family = Family(members, 'Smith'); family.born(name='Jamie', gender='Female'); print(family.is_18('Michael')); family.family_presentation()
    incredible_members = [{**members[0], 'power': 'fly', 'incredible_name': 'MikeFly'}, {**members[1], 'power': 'read minds', 'incredible_name': 'SuperWoman'}]
    incredibles = TheIncredibles(incredible_members, 'Incredibles'); incredibles.incredible_presentation(); incredibles.use_power('Michael')
    incredibles.born(name='Baby Jack', gender='Male', power='Unknown Power', incredible_name='Jack')
    incredibles.incredible_presentation()
