"""Menu loop and session scores for Rock, Paper, Scissors."""
from game import Game

def get_user_menu_choice(input_fn=input, output=print):
    output("\n[p] Play a new game  [s] Show scores  [q/x] Quit")
    choice = input_fn("Your choice: ").strip().lower()
    if choice not in {"p", "s", "q", "x"}:
        output("Invalid menu choice. Choose p, s, q or x.")
        return None
    return choice

def print_results(results, output=print):
    output(f"Wins: {results['win']} | Losses: {results['loss']} | Draws: {results['draw']}")
    output("Thank you for playing!")

def main(input_fn=input, output=print, game_factory=None):
    results = {"win": 0, "loss": 0, "draw": 0}
    try:
        while True:
            choice = get_user_menu_choice(input_fn, output)
            if choice in {"q", "x"}:
                break
            if choice == "s":
                print_results(results, output)
            elif choice == "p":
                game = game_factory() if game_factory else Game(input_fn, output)
                results[game.play()] += 1
    except (EOFError, KeyboardInterrupt):
        output("\nSession ended.")
    print_results(results, output)
    return results

if __name__ == "__main__":
    main()
