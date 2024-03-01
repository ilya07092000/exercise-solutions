/**
 * transfrom key from camelCase to snake_case
 */
type CamelToSnake<T extends string, P extends string = ''> = string extends T
  ? string
  : T extends `${infer C0}${infer R}`
  ? CamelToSnake<
      R,
      `${P}${C0 extends Lowercase<C0> ? '' : '_'}${Lowercase<C0>}`
    >
  : P;

/**
 * transfrom the entire object keys from camelCase to snake_case
 */
type SnakelizeKeys<T extends object> = {
  [key in keyof T as key extends string ? CamelToSnake<key> : key]: T[key];
};

export type {CamelToSnake, SnakelizeKeys};
