import User from '@/core/user/anemic-user-v1';
import AnemicUserV2 from '@/core/user/anemic-user-v2.';

const validUser = () =>
  new AnemicUserV2(123, 'Carlos', 'carlos@teste.com', '123456');

test('should allow user without name', () => {
  const user: User = validUser();
  user.name = '';
  expect(user.name).toBe('');
});

test('should allow user with negative id ', () => {
  const user: User = validUser();
  user.id = -1;
  expect(user.id).toBe(-1);
});

test('should allow user with invalid email', () => {
  const user: User = validUser();
  user.email = 'invalid-email';
  expect(user.email).toBe('invalid-email');
});

test('should allow user with invalid password', () => {
  const user: User = validUser();
  user.password = 'a';
  expect(user.password).toBe('a');
});
