'use strict';
const winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];
const emptyCells = board => board.reduce((cells, value, index) => { if (!value) cells.push(index); return cells; }, []);
function outcome(board) {
  for (const combo of winCombos) if (board[combo[0]] && combo.every(index => board[index] === board[combo[0]])) return board[combo[0]];
  return emptyCells(board).length ? null : 'tie';
}
function minimax(board, turn, ai, human, depth = 0) {
  const result = outcome(board);
  if (result) return { score: result === ai ? 10 - depth : result === human ? depth - 10 : 0, index: null };
  let best = { score: turn === ai ? -Infinity : Infinity, index: null };
  for (const index of emptyCells(board)) {
    const next = [...board]; next[index] = turn;
    const { score } = minimax(next, turn === ai ? human : ai, ai, human, depth + 1);
    if ((turn === ai && score > best.score) || (turn === human && score < best.score)) best = { index, score };
  }
  return best;
}
function computerMove(board, ai, human, difficulty = 'hard', rng = Math.random) {
  if (outcome(board)) return null;
  const cells = emptyCells(board);
  return difficulty === 'easy' ? cells[Math.floor(rng() * cells.length)] : minimax(board, ai, ai, human).index;
}
if (typeof document !== 'undefined') {
  const $ = selector => document.querySelector(selector);
  let board = Array(9).fill(''), human = 'X', ai = 'O', active = false;
  function render() {
    $('#board').replaceChildren(...board.map((value, index) => {
      const button = document.createElement('button'); button.id = `cell-${index}`;
      button.textContent = value; button.setAttribute('aria-label', `Row ${Math.floor(index / 3) + 1}, column ${index % 3 + 1}${value ? `: ${value}` : ': empty'}`);
      button.disabled = !active || Boolean(value);
      button.onclick = () => {
        if (!active || board[index]) return;
        board[index] = human;
        if (!outcome(board)) { const choice = computerMove(board, ai, human, $('#difficulty').value); board[choice] = ai; }
        const result = outcome(board); active = !result;
        $('#status').textContent = result === 'tie' ? 'Tie game' : result ? result === human ? 'You won!' : 'Computer won.' : `Your turn: ${human}`;
        $('#restart').hidden = !result; render();
      };
      return button;
    }));
  }
  function start(symbol) { human = symbol; ai = symbol === 'X' ? 'O' : 'X'; board = Array(9).fill(''); active = true; if (ai === 'X') board[computerMove(board, ai, human, $('#difficulty').value)] = ai; $('#status').textContent = `Your turn: ${human}`; $('#restart').hidden = true; render(); }
  $('#choose-x').onclick = () => start('X'); $('#choose-o').onclick = () => start('O'); $('#restart').onclick = () => start(human);
  render();
}
if (typeof module !== 'undefined') module.exports = { winCombos, emptyCells, outcome, minimax, computerMove };
