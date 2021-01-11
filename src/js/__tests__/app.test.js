import Team from '../app';
import Character from '../character';

test('method add(), default', () => {
  const daemon = new Character('Dormammu', 'Daemon');
  const team = new Team();
  team.add(daemon);
  expect(team.members.size).toBe(1);
  expect(team.members.has(daemon)).toBeTruthy();
});

test('method add(), error, several identical objects', () => {
  const daemon = new Character('Dormammu', 'Daemon');
  const team = new Team();
  team.add(daemon);
  function anotherDaemon() {
    team.add(daemon);
  }
  expect(anotherDaemon).toThrowError(new Error('This character is in the team already'));
});

test('method addAll(), default', () => {
  const bowman = new Character('Hawkeye', 'Bowman');
  const daemon = new Character('Dormammu', 'Daemon');
  const team = new Team();
  team.addAll(bowman, daemon);
  expect(team.members.size).toBe(2);
  expect(team.members.has(daemon)).toBeTruthy();
  expect(team.members.has(bowman)).toBeTruthy();
});

test('method addAll(), several identical objects', () => {
  const bowman = new Character('Hawkeye', 'Bowman');
  const daemon = new Character('Dormammu', 'Daemon');
  const team = new Team();
  team.addAll(bowman, daemon, daemon, daemon);
  expect(team.members.size).toBe(2);
  expect(team.members.has(daemon)).toBeTruthy();
  expect(team.members.has(bowman)).toBeTruthy();
});

test('method toArray()', () => {
  const bowman = new Character('Hawkeye', 'Bowman');
  const daemon = new Character('Dormammu', 'Daemon');
  const wizard = new Character('Kaecilius', 'Magician');
  const team = new Team();
  team.addAll(bowman, daemon, wizard);
  expect(Array.isArray(team.toArray())).toBeTruthy();
});
