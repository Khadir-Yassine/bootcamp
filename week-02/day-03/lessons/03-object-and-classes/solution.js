'use strict';
class Rabbit {
  constructor(type) { this.type = type; }
  speak(line) { const message = `The ${this.type} rabbit says '${line}'`; console.log(message); return message; }
}
const killerRabbit = new Rabbit('killer'), blackRabbit = new Rabbit('black');
console.log(killerRabbit.type, blackRabbit.type);
killerRabbit.speak('Beware!'); blackRabbit.speak('Hello!');
module.exports = { Rabbit, killerRabbit, blackRabbit };
