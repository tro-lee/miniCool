class Complie {
  construct(vm) {
    this.vm = vm;
    this.el = vm.$el;
    this.complie(this.el);
  }

  complie(el) {
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach((node) => {
      if (node.nodeType === 3) {
        this.complieText(node);
      }

      if (node.childNodes && node.childNodes.length) {
        this.complie(node);
      }
    });
  }

  complieText(node) {
    const ref = /\{\{(.+?)\}\}/g;
    const value = node.textContent.replace(/\s/g, "");
  }
}

class Observer {
  walk(data) {
    Object.keys(data).forEach((key) => defineProperty(data, key, data[key]));
  }
}

class Vue {
  constructor(options) {
    this.$options = options || {};
    this.$data = options.data || {};

    const el = options.el;
    this.$el = typeof root === "string" ? document.querySelector(root) : el;

    // 1. 把数据代理到自身
    proxy(this, this.$data);
  }
}

function proxy(target, data) {
  Object.keys(this.$data).forEach((key) => {
    Object.defineProperty(target, key, {
      get() {
        return data[key];
      },
      set(newValue) {
        console.log(newValue);
        data[key] = newValue;
      },
    });
  });
}
