"""Two-player console Tic-Tac-Toe. Cells are numbered 1–9."""
WIN_LINES = ((0,1,2), (3,4,5), (6,7,8), (0,3,6), (1,4,7), (2,5,8), (0,4,8), (2,4,6))

def display_board(board, output=print):
    cells = [value or str(i + 1) for i, value in enumerate(board)]
    output("\n" + "\n---+---+---\n".join(" " + " | ".join(cells[i:i+3]) for i in range(0,9,3)))

def check_win(board, player):
    return any(all(board[i] == player for i in line) for line in WIN_LINES)

def player_input(board, player, input_fn=input, output=print):
    while True:
        raw = input_fn(f"Player {player}, choose an empty cell (1–9): ").strip()
        try:
            index = int(raw) - 1
        except ValueError:
            output("Enter a whole number from 1 to 9.")
            continue
        if not 0 <= index < 9:
            output("The cell must be from 1 to 9.")
        elif board[index]:
            output("That cell is occupied. Choose another.")
        else:
            return index

def play(input_fn=input, output=print):
    board, player = [""] * 9, "X"
    output("Tic-Tac-Toe: two players share this terminal. X starts.")
    try:
        for _ in range(9):
            display_board(board, output)
            index = player_input(board, player, input_fn, output)
            board[index] = player
            if check_win(board, player):
                display_board(board, output)
                output(f"Player {player} wins!")
                return player
            player = "O" if player == "X" else "X"
        display_board(board, output)
        output("It's a tie!")
        return "tie"
    except (EOFError, KeyboardInterrupt):
        output("\nGame cancelled.")
        return "cancelled"

if __name__ == "__main__":
    play()
