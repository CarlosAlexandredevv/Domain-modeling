import Validator from '@/utils/validator';

test('should return null with text no nullable', () => {
  const error = Validator.noNullable('Good Morning', 'Invalid text');
  expect(error).toBeNull();
});

test('should return error with text nullable', () => {
  const msgError = 'Invalid text';
  const error = Validator.noNullable(null, 'Invalid text');
  expect(error).toBe(msgError);
});

test('should return null with text no empty', () => {
  const error = Validator.noEmpty('Good Morning', 'Empty text');
  expect(error).toBeNull();
});

test('should return error with invalid text', () => {
  const msgError = 'Invalid text';
  const e1 = Validator.noEmpty('         ', msgError);
  const e2 = Validator.noEmpty(null, msgError);
  const e3 = Validator.noEmpty(undefined, msgError);
  expect(e1).toBe(msgError);
  expect(e2).toBe(msgError);
  expect(e3).toBe(msgError);
});

test('should return null with text small than size max', () => {
  const error = Validator.isSmallerThan('Good Morning', 20, 'Invalid text');
  expect(error).toBeNull();
});

test('should return null with text small than size max', () => {
  const error = Validator.isSmallerThan('Good Morning', 12, 'error');
  expect(error).toBe('error');
});
