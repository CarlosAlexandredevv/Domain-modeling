import Validator from '@/utils/validator';
import Errors from '../constants/Errors';

export default class PersonName {
  readonly name: string;

  constructor(name: string) {
    this.name = name.trim();

    const errors = Validator.toCombine(
      Validator.noEmpty(this.name, Errors.EMPTY_NAME),
    );

    if (errors) throw new Error(errors.join(', '));
  }
}
