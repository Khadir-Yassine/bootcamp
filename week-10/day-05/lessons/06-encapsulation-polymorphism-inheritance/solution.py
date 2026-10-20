"""Method resolution order and inherited book initialization."""


class A:
    def dothis(self): print('doing this in A')


class B(A): pass


class C:
    def dothis(self): print('doing this in C')


class D(B, C): pass


class Book:
    def __init__(self, title, author, publication_date, price): self.title, self.author, self.publication, self.price = title, author, publication_date, price
    def present(self): print(f'Title: {self.title}')


class Fiction(Book):
    def __init__(self, title, author, publication_date, price, is_awesome):
        super().__init__(title, author, publication_date, price)
        self.genre, self.is_awesome, self.bored = 'Fiction', is_awesome, not is_awesome
        print('Woow this is an awesome book' if is_awesome else 'I am very bored')


if __name__ == '__main__':
    D().dothis()
    # Retain the prompt's argument order even though its title/author example is reversed.
    foundation = Fiction('Asimov', 'Foundation', '1966', '5£', True)
    foundation.present(); print(foundation.price); print(foundation.bored)
    boring_book = Fiction('boring_guy', 'boring_title', 'boring_date', '9000£', False); print(boring_book.bored)
