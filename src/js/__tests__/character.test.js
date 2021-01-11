import Character from '../character';

test('function automatically set true values', () => {
  const character = new Character('Dormammu', 'Daemon');

  expect({
    health: 100, level: 1, name: 'Dormammu', type: 'Daemon',
  }).toEqual(character);
});

test('Name of character is true', () => {
  const bowman = new Character('Hawkeye', 'Bowman');
  const name = bowman.validateName();

  expect(name).toBeTruthy();
});

test('Type of character is true', () => {
  const bowman = new Character('Hawkeye', 'Bowman');
  const type = bowman.validateType();

  expect(type).toBeTruthy();
});

test('Name of character is wrong, too long', () => {
  function wrongName() {
    const wizard = new Character('Doctor Strange', 'Magician');
    wizard.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('Name of character is wrong, too short', () => {
  function wrongName() {
    const wizard = new Character('D', 'Magician');
    wizard.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('Type of character is wrong', () => {
  function wrongType() {
    const wizard = new Character('Kaecilius', 'Wizard');
    wizard.validateType();
  }

  expect(wrongType).toThrowError(new Error('Wrong type!'));
});
