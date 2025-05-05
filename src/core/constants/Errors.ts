const Errors = {
  EMPTY_NAME: 'Name cannot be empty',
  LARGE_NAME: 'Name is too long',
  SHORT_NAME: 'Name is too short',
  NAME_WITHOUT_SURNAME: 'Name must contain a surname',
  INVALID_CHARACTERS_NAME: 'Name contains invalid characters',

  INVALID_PASSWORD: 'Invalid password',
} as const;

export default Errors;
