function MyNew(constructor, ...args) {
  const newObj = {};
  Object.setPrototypeOf(newObj, Array.prototype);
  const result = constructor.apply(newObj, args);
  if (typeof result != "object") throw new Error("不是构造函数");

  return result;
}

const result = MyNew(Array, 1, 2, 3);
result;
