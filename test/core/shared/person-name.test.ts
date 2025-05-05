import Errors from '@/core/constants/Errors';
import PersonName from '@/core/shared/person-name';

test('Should throw error when trying to create an empty fname', () => {
  expect(() => new PersonName('')).toThrowError(Errors.EMPTY_NAME);
});

test('Should throw an error when creating a name shorter than 4 characters', () => {
  expect(() => new PersonName('abc')).toThrowError(Errors.SHORT_NAME);
});

test('Should throw an error when creating a name more than 120 characters', () => {
  const name = 'Pedro de Alcântara João Carlos de Bragança e Bourbon';
  expect(() => new PersonName(name)).toThrowError(Errors.LARGE_NAME);
});

test('should throw an error when creating a first name without a last name', () => {
  const name = 'Carlos';
  expect(() => new PersonName(name)).toThrowError(Errors.NAME_WITHOUT_SURNAME);
});

test('should throw an error when creating a witch characteres especial', () => {
  const name = 'Carlosdfar3252';
  expect(() => new PersonName(name)).toThrowError(
    Errors.INVALID_CHARACTERS_NAME,
  );
});
