export default class Validator {
  static toCombine(...errors: (string | null)[]): string[] | null {
    const errorsFiltered = errors.filter((error) => error !== null) as string[];
    return errorsFiltered.length > 0 ? errorsFiltered : null;
  }

  static noNullable(value: any, error: string): string | null {
    return value !== null && value !== undefined ? null : error;
  }

  static noEmpty(
    value: string | null | undefined,
    error: string,
  ): string | null {
    if (Validator.noNullable(value, error)) return error;
    return value != null && value.trim() !== '' ? null : error;
  }

  static isSmallerThan(
    value: string | any[],
    maxLength: number,
    errorMessage: string,
  ): string | null {
    if (value.length < maxLength) return null;
    return errorMessage;
  }
}
