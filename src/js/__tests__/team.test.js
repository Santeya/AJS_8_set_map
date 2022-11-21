import Team from '../team';
import Character from '../character';

test('setting up new character', () => {
  const character1 = new Character('999', 'Magician');
  expect(character1).toEqual({
    name: '999', type: 'Magician', health: 100, level: 1,
  });
});

test('adding single character to a new team', () => {
  const team = new Team();
  const player1 = new Character('Dara-X', 'Bowman');
  team.add(player1);
  expect(team.toArray()[0].name).toBe('Dara-X');
  expect(() => team.add(player1)).toThrowError('Такой персонаж уже добавлен в команду');
});

test('adding several characters at once', () => {
  const team = new Team();
  const player1 = new Character('Dara-X', 'Bowman');
  const player2 = new Character('999', 'Magician');
  team.addAll(player1, player2);
  expect(team.toArray()[0].type).toBe('Bowman');
  expect(team.toArray()[1].type).toBe('Magician');
});
