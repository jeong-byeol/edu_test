const Bee = require('./Bee');

class ForagerBee extends Bee {
  // TODO..
  constructor() {
    super(); // Grub, Bee포함.

    this.age =10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];

  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }
}

module.exports = ForagerBee;
