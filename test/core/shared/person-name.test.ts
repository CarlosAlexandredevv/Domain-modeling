import Errors from '@/core/constants/Errors';
import PersonName from '@/core/shared/person-name';

test('Should throw error when trying to create an empty fname', () => {
  expect(() => new PersonName('')).toThrowError(Errors.EMPTY_NAME);
});
