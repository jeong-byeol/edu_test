const Grub = require('./Grub');

class Bee extends Grub{  // 부모Grub이 자식Bee한테 상속한다.
  // TODO..
  constructor() {
    super();  // Grub의 constructor()을 호출.

    this.age =5;
    this.color ='yellow';
    this.job = 'Keep on growing';
  }
}

module.exports = Bee;
