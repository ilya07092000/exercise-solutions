/**
 * transfrom key from snake_case to camelCase
 */
type Camelize<T extends string> = T extends `${infer A}_${infer B}`
  ? `${A}${Camelize<Capitalize<B>>}`
  : T;

/**
 * transfrom the entire object keys from snake_case to camelCase
 */
type CamelizeKeys<T extends object> = {
  [key in keyof T as key extends string ? Camelize<key> : key]: T[key];
};

export type {CamelizeKeys};
