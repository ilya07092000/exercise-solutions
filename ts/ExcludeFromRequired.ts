type AllRequired = {
  a: string;
  b: number;
  c: boolean;
};

/**
 * First
 */
type ExcludeFromRequired1<Target, V extends keyof Target> = Omit<Target, V> &
  Partial<Pick<Target, V>>;
const test1: ExcludeFromRequired1<AllRequired, 'b' | 'c'> = {
  a: '123',
};

/**
 * Second
 */
type ExcludeFromRequired<Target, V extends keyof Target> = Omit<Target, V> & {
  [k in V]?: Target[k];
};

const test: ExcludeFromRequired<AllRequired, 'b' | 'c'> = {
  a: '123',
};

export {};
