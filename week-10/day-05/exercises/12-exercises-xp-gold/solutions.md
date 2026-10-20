# Worked solutions

Run `python solution.py` from this folder. Source: [solution.py](solution.py). Python 3 and its standard library are sufficient. Interactive/demo options are explained below.

<a id="exercise-1"></a>

## 1. Accounts and ATM

BankAccount stores balance/credentials/authenticated, checks strictly positive integer transaction amounts and rejects unauthenticated operations. Failed authentication clears the authenticated flag. MinimumBalanceAccount overrides withdrawal to preserve a balance **strictly higher than** its minimum. The ATM bonus validates account instances and its positive integer try limit; an invalid limit raises/catches ValueError, reports it and defaults to 2. It runs login and account menus, tracks failed attempts, shuts down at the limit, allows deposits/withdrawals and logs out safely. Constructor autostart defaults to true; an optional flag makes the class usable without starting a prompt loop. Run `python solution.py --interactive`; example credentials printed by the program are fictional. The source is an in-memory learning model.

[Original exercise](individual/01-exercise-1-bank-account.md)

