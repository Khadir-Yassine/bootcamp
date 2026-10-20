'use strict';
const gameInfo = [
  { username: 'john', team: 'red', score: 5, items: ['ball', 'book', 'pen'] },
  { username: 'becky', team: 'blue', score: 10, items: ['tape', 'backpack', 'pen'] },
  { username: 'susy', team: 'red', score: 55, items: ['ball', 'eraser', 'pen'] },
  { username: 'tyson', team: 'green', score: 1, items: ['book', 'pen'] }
];
const usernames = [], winners = [];
gameInfo.forEach(player => usernames.push(`${player.username}!`));
gameInfo.forEach(player => { if (player.score > 5) winners.push(player.username); });
const total = gameInfo.reduce((sum, player) => sum + player.score, 0);
console.log({ usernames, winners, total });
module.exports = { usernames, winners, total };
