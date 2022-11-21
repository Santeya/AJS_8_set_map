export default class ErrorRepository {
  constructor() {
    this.repo = new Map([[111, 'Ошибка ввода'], [222, 'Персонаж не существует']]);
  }

  translate(code) {
    if (this.repo.has(code)) {
      return this.repo.get(code);
    }
    return 'Unknown error';
  }
}
