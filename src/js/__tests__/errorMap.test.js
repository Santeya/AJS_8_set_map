import ErrorRepository from '../errorMap';

test('return error text by code', () => {
  const resultTrue = new ErrorRepository().translate(111);
  expect(resultTrue).toBe('Ошибка ввода');
});

test('return unknown error by wrong code', () => {
  const resultTrue = new ErrorRepository().translate(77);
  expect(resultTrue).toBe('Unknown error');
});
