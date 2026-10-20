"""Bound methods supply self automatically; attributes remain instance-local."""


class Person:
    def __init__(self, name, age): self.name, self.age = name, age
    def show_details(self): print('Hello my name is ' + self.name)
    def rename(self, new_name): self.name = new_name


class Computer:
    def description(self, name): print('I am a computer, my name is', name); print(self)


if __name__ == '__main__':
    first_person = Person('John', 36); first_person.show_details(); first_person.rename('Jane'); first_person.show_details()
    mac_computer = Computer(); mac_computer.brand = 'Apple'; print(mac_computer.brand)
    dell_computer = Computer(); Computer.description(dell_computer, 'Mark'); dell_computer.description('Mark')
