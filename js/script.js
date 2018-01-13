/**
 * JS
 */

/* eslint-disable */
const person = {
  name: 'Harry',
  age: 100,
};

const personProxy = new Proxy(person, {
  get(target, name) {
    return target[name].toUpperCase();
  },
  set(target, name, value) {
    if (typeof value === 'string') {
      target[name] = value.trim();
    }
  }
});

personProxy.name = 'Harman';
