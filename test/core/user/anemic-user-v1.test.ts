import User from '@/core/user/anemic-user-v1';

const validUser: User = {
  id: 1,
  name: 'Carlos',
  email: 'carlos@teste.com',
  password: '123456',
};

test('should allow user without name', () => {
  const user: User = { ...validUser, name: '' };
  expect(user.name).toBe('');
});

test('should allow user with negative id ', () => {
  const user: User = { ...validUser, id: -1 };
  expect(user.id).toBe(-1);
});

test('should allow user with invalid email', () => {
  const user: User = { ...validUser, email: 'invalid-email' };
  expect(user.email).toBe('invalid-email');
});

test('should allow user with invalid password', () => {
  const user: User = { ...validUser, password: 'a' };
  expect(user.password).toBe('a');
});
