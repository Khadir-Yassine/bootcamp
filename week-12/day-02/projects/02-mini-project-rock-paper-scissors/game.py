"""One validated round; injected I/O makes the console game testable."""
import random

class Game:
    ITEMS = ("rock", "paper", "scissors")
    BEATS = {"rock": "scissors", "paper": "rock", "scissors": "paper"}

    def __init__(self, input_fn=input, output=print, choice=random.choice):
        self.input = input_fn
        self.output = output
        self.choice = choice

    def get_user_item(self):
        while True:
            item = self.input("Choose rock, paper or scissors: ").strip().lower()
            if item in self.ITEMS:
                return item
            self.output("Please enter rock, paper or scissors.")

    def get_computer_item(self):
        return self.choice(self.ITEMS)

    def get_game_result(self, user_item, computer_item):
        if user_item not in self.ITEMS or computer_item not in self.ITEMS:
            raise ValueError("Both moves must be rock, paper or scissors.")
        if user_item == computer_item:
            return "draw"
        return "win" if self.BEATS[user_item] == computer_item else "loss"

    def play(self):
        user, computer = self.get_user_item(), self.get_computer_item()
        result = self.get_game_result(user, computer)
        self.output(f"You selected {user}. The computer selected {computer}.")
        self.output({"win": "You won!", "loss": "You lost.", "draw": "A draw!"}[result])
        return result
