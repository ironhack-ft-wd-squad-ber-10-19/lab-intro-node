/* I get a syntax error at the module.exports in the bottom, so my 
test won't run. But I am pretty sure most of my code is right
*/

class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length > 0) {
      return Math.max(...this.items);
    }
    throw new Error("EmptySortedList");
  }

  min() {
    if (this.items.length > 0) {
      return Math.min(...this.items);
    }
    throw new Error("EmptySortedList");
  }

  average() {
    if (this.items.length > 0) {
      return this.sum() / this.items.length
    } throw new Error("EmptySortedList");
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    return [...this.items].reduce((a, b) => a + b);
  }

module.exports = SortedList;
