type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | {[key: string]: JSONValue};
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
  const traverse = el => {
    const res = Array.isArray(el) ? [] : {};

    if (Array.isArray(res)) {
      for (let i = 0; i < el.length; i += 1) {
        const item = el[i];
        if (item) {
          if (Array.isArray(item) || typeof item === 'object') {
            res.push(traverse(item));
          } else {
            res.push(item);
          }
        }
      }
    } else if (typeof res === 'object') {
      for (let key in el) {
        const item = el[key];
        if (item) {
          if (Array.isArray(item) || typeof item === 'object') {
            res[key] = traverse(item);
          } else {
            res[key] = item;
          }
        }
      }
    }

    return res;
  };

  const res = traverse(obj);

  return res;
}
