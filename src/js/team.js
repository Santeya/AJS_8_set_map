export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже добавлен в команду');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    for (const char of characters) {
      this.members.add(char);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
