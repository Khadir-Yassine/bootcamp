import importlib.util
from pathlib import Path
import sys
import unittest
ROOT = Path(__file__).resolve().parents[1]
def load(name, relative):
    path = ROOT / relative
    sys.path.insert(0, str(path.parent))
    spec = importlib.util.spec_from_file_location(name, path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module
c = load('circle_solution', 'day-02/challenges/04-daily-challenge-circle/circle.py')
g = load('rps_game', 'day-02/projects/02-mini-project-rock-paper-scissors/game.py')
rps = load('rps_menu', 'day-02/projects/02-mini-project-rock-paper-scissors/rock-paper-scissors.py')
ttt = load('ttt', 'day-02/projects/03-mini-project-tic-tac-toe/tic_tac_toe.py')
class SolutionsTests(unittest.TestCase):
    def test_circle_properties_and_validation(self):
        circle = c.Circle(diameter=6)
        self.assertEqual(circle.radius, 3)
        self.assertAlmostEqual(circle.area, 28.2743338823)
        circle.radius = 4
        self.assertEqual(circle.diameter, 8)
        circle.diameter = 10
        self.assertEqual(circle.radius, 5)
        self.assertEqual(c.Circle(0).area, 0)
        for kwargs in ({}, {'radius': 1, 'diameter': 2}, {'radius': -1}, {'diameter': float('inf')}):
            with self.assertRaises(ValueError): c.Circle(**kwargs)
        with self.assertRaises(TypeError): c.Circle(True)
    def test_circle_operators(self):
        a, b = c.Circle(2), c.Circle(3)
        self.assertEqual((a+b).radius, 5)
        self.assertEqual(a.radius, 2)
        self.assertEqual(a, c.Circle(diameter=4))
        self.assertEqual([x.radius for x in sorted([b,a,c.Circle(1)])], [1,2,3])
        self.assertTrue(b >= a)
        self.assertNotEqual(a, 2)
        with self.assertRaises(TypeError): a + 2
        self.assertIn('diameter=4', str(a))
    def test_all_nine_rps_results(self):
        game = g.Game()
        expected = [['draw','loss','win'],['win','draw','loss'],['loss','win','draw']]
        for i, user in enumerate(game.ITEMS):
            for j, computer in enumerate(game.ITEMS):
                self.assertEqual(game.get_game_result(user, computer), expected[i][j])
        with self.assertRaises(ValueError): game.get_game_result('bad','rock')
    def test_rps_validation_and_play(self):
        answers = iter(['bad', ' ROCK ']); lines=[]
        game = g.Game(lambda _: next(answers), lines.append, lambda _: 'scissors')
        self.assertEqual(game.play(), 'win')
        self.assertTrue(any('Please' in line for line in lines))
    def test_menu_and_scores(self):
        answers = iter(['bad', 'p', 'p', 's', 'q']); results=iter(['win','draw']); lines=[]
        class Round:
            def play(self): return next(results)
        actual=rps.main(lambda _: next(answers),lines.append,Round)
        self.assertEqual(actual, {'win':1,'loss':0,'draw':1})
        self.assertIn('Wins: 1 | Losses: 0 | Draws: 1',lines)
    def test_all_winning_lines(self):
        for line in ttt.WIN_LINES:
            board=['']*9
            for i in line: board[i]='O'
            self.assertTrue(ttt.check_win(board,'O'))
            self.assertFalse(ttt.check_win(board,'X'))
    def test_invalid_input_does_not_consume_turn(self):
        moves=iter(['no','0','10','1','1','4','2','5','3']);lines=[]
        self.assertEqual(ttt.play(lambda _: next(moves),lines.append),'X')
        self.assertTrue(any('occupied' in line for line in lines))
        self.assertEqual(lines[-1],'Player X wins!')
    def test_tie(self):
        moves=iter(['1','2','3','5','4','6','8','7','9'])
        self.assertEqual(ttt.play(lambda _: next(moves),lambda _: None),'tie')
    def test_cancel(self):
        def end(_): raise EOFError
        self.assertEqual(ttt.play(end,lambda _: None),'cancelled')
        self.assertEqual(rps.main(end,lambda _: None),{'win':0,'loss':0,'draw':0})
if __name__ == '__main__': unittest.main()
