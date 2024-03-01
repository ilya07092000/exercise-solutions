type TestType = {
  a: string;
  b: string;
  c: string;
};

type CustomPartial<T> = {
  [k in keyof T]?: T[k];
};

const test: CustomPartial<TestType> = {
  a: '1',
};

export {};
