"""Authenticated bank accounts, minimum-balance inheritance and interactive ATM."""
import argparse


class BankAccount:
    def __init__(self, balance=0, username='demo', password='learn-python'):
        if not isinstance(balance, int) or isinstance(balance, bool) or balance < 0: raise ValueError('Balance must be a non-negative integer')
        self.balance, self.username, self.password, self.authenticated = balance, username, password, False
    def authenticate(self, username, password):
        self.authenticated = username == self.username and password == self.password
        return self.authenticated
    def _validate(self, amount):
        if not self.authenticated: raise PermissionError('Authenticate first')
        if not isinstance(amount, int) or isinstance(amount, bool) or amount <= 0: raise ValueError('Amount must be a positive integer')
    def deposit(self, amount):
        self._validate(amount); self.balance += amount; return self.balance
    def withdraw(self, amount):
        self._validate(amount)
        if amount > self.balance: raise ValueError('Insufficient balance')
        self.balance -= amount; return self.balance


class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance=0, minimum_balance=0, username='demo', password='learn-python'):
        super().__init__(balance, username, password)
        if not isinstance(minimum_balance, int) or isinstance(minimum_balance, bool) or minimum_balance < 0: raise ValueError('Minimum balance must be a non-negative integer')
        if balance < minimum_balance: raise ValueError('Opening balance is below the minimum')
        self.minimum_balance = minimum_balance
    def withdraw(self, amount):
        self._validate(amount)
        if self.balance - amount <= self.minimum_balance: raise ValueError('Balance must remain higher than the minimum')
        return super().withdraw(amount)


class ATM:
    def __init__(self, account_list, try_limit=2, input_fn=input, output=print, autostart=True):
        if not isinstance(account_list, list) or not all(isinstance(account, BankAccount) for account in account_list): raise TypeError('account_list must be a list of BankAccount instances')
        self.account_list, self.input_fn, self.output, self.current_tries, self.closed = account_list, input_fn, output, 0, False
        try:
            if not isinstance(try_limit, int) or isinstance(try_limit, bool) or try_limit <= 0: raise ValueError('Invalid try limit; using 2')
            self.try_limit = try_limit
        except ValueError as error: self.output(str(error)); self.try_limit = 2
        if autostart: self.show_main_menu()
    def show_main_menu(self):
        while not self.closed:
            choice = self.input_fn('1: Log in | 2: Exit: ').strip()
            if choice == '2': self.closed = True
            elif choice == '1':
                while not self.closed:
                    username, password = self.input_fn('Username: '), self.input_fn('Password: ')
                    if self.log_in(username, password): break
            else: self.output('Choose 1 or 2.')
    def log_in(self, username, password):
        if self.closed: return False
        for account in self.account_list: account.authenticated = False
        for account in self.account_list:
            if account.authenticate(username, password):
                self.current_tries = 0
                try: self.show_account_menu(account)
                finally: account.authenticated = False
                return True
        self.current_tries += 1; self.output('Invalid credentials.')
        if self.current_tries >= self.try_limit: self.closed = True; self.output('Maximum tries reached. ATM shut down.')
        return False
    def show_account_menu(self, account):
        while True:
            choice = self.input_fn(f'Balance {account.balance} | 1: Deposit | 2: Withdraw | 3: Log out: ').strip()
            if choice == '3': return
            if choice not in ('1', '2'): self.output('Choose 1, 2 or 3.'); continue
            try:
                amount = int(self.input_fn('Amount (positive integer): '))
                balance = account.deposit(amount) if choice == '1' else account.withdraw(amount)
                self.output(f'New balance: {balance}')
            except (ValueError, PermissionError) as error: self.output(str(error))


if __name__ == '__main__':
    parser = argparse.ArgumentParser(); parser.add_argument('--interactive', action='store_true'); args = parser.parse_args()
    account = BankAccount(100, 'demo', 'learn-python')
    minimum = MinimumBalanceAccount(200, 50, 'saver', 'learn-python')
    if args.interactive:
        print('Learning demo accounts: demo / learn-python and saver / learn-python')
        ATM([account, minimum], 3)
    else:
        account.authenticate('demo', 'learn-python'); print(account.deposit(25)); print(account.withdraw(40))
        minimum.authenticate('saver', 'learn-python'); print(minimum.withdraw(100))
