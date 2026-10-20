'use strict';
class Bird { constructor() { console.log("I'm a bird. 🦢"); } }
class Flamingo extends Bird {
  constructor() {
    // Logging before super is allowed because it does not access this.
    console.log("I'm pink. 🌸");
    super();
  }
}
const pet = new Flamingo(); // I'm pink. 🌸, then I'm a bird. 🦢
module.exports = { Bird, Flamingo, pet };
