Function.prototype.mycall = function (context, ...args) {
  if (context == void 0) {
    context = global;
  }
  switch (typeof context) {
    case "number":
      context = new Number(context);
      break;
    case "string":
      context = new String(context);
      break;
    case "boolean":
      context = new Boolean(context);
      break;
  }

  const func = Symbol("func");
  context[func] = this;
  context[func](...args);
  delete context[func];
};

function A(name) {
  this.name = name;
}

A.mycall(void 0, "hi");
