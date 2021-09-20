import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  nodes : [],
  getLength() {
    return this.nodes.length;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    this.nodes.push(value);
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.nodes.length || position % 1) {
      this.nodes = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.nodes.splice(position - 1, 1);
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.nodes = this.nodes.reverse();
      return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    const res = this.nodes.map(el => `( ${el} )`).join('~~');
      this.nodes = [];
      return res;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};
