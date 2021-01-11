export default class Character {
  constructor(name, type) {
    this.health = 100;
    this.level = 1;
    this.name = name;
    this.type = type;
    this.validateName();
    this.validateType();
  }

  validateName() {
    if (typeof this.name !== 'string' || this.name.length < 2 || this.name.length > 10) {
      throw new Error('Wrong name!');
    } else {
      return true;
    }
  }

  validateType() {
    const characters = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (typeof this.type === 'string' && characters.find((i) => i === this.type)) {
      return true;
    }
    throw new Error('Wrong type!');
  }
}
