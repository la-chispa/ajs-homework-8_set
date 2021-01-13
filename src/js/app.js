export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    for (const member of this.members) {
      if (member.name === character.name) {
        throw new Error('This character is in the team already');
      }
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    return Array.from(this.members);
  }
}
