# Worked solutions

Run `python solution.py` from this folder. Source: [solution.py](solution.py). Python 3 and its standard library are sufficient. Interactive/demo options are explained below.

<a id="exercise-1"></a>

## 1. Pets

Siamese extends Cat alongside Bengal and Chartreux. all_cats holds one of each; sara_pets wraps them and walks all three using the supplied Pets class. The prompt alternates Pet and Pets; the implementation consistently uses the supplied class name Pets.

[Original exercise](individual/01-exercise-1-pets.md)

<a id="exercise-2"></a>

## 2. Dogs

dog.py defines name/age/weight, bark, speed = weight / age × 10, and fight using speed × weight. Three dogs are demonstrated. Equal strengths report a tie; nonpositive ages/weights are rejected to avoid division by zero.

[Original exercise](individual/02-exercise-2-dogs.md)

<a id="exercise-3"></a>

## 3. Domesticated dogs

pet_dog.py imports Dog in a new file. PetDog begins untrained, train prints bark and enables tricks, play accepts arbitrary dog names/instances through *args, and a trained dog chooses one of all four required tricks randomly. An untrained dog performs no trick.

[Original exercise](individual/03-exercise-3-dogs-domesticated.md)

<a id="exercise-4"></a>

## 4. Family

Family copies member dictionaries, stores the last name, adds children through **kwargs with a congratulation message, presents every member and looks up adulthood by name. The prompt says **over 18**, so is_18 uses strictly greater than 18; a missing member raises ValueError.

[Original exercise](individual/04-exercise-4-family.md)

<a id="exercise-5"></a>

## 5. TheIncredibles

The subclass adds use_power with an over-18 check and raises PermissionError for a child. incredible_presentation prints the introduction then calls super for the family details. The supplied Michael/Sarah powers are used, Baby Jack is added through inherited born with Unknown Power, and the full family is presented again.

[Original exercise](individual/05-exercise-5-theincredibles-family.md)

## Supporting source files

- [dog.py](dog.py)
- [pet_dog.py](pet_dog.py)
