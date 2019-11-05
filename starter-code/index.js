class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort();
    this.length = this.items.length;
  }
  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds")
    }
    //this.items = this.items.sort()
    return this.items[pos];
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    return Math.max(...this.items);
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    return Math.min(...this.items);
  }
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    return (this.sum() / this.items.length);
  }
  sum() {
    if (this.items.length != 0) {
      return this.items.reduce((a, b) => a + b, 0);
    }
    return 0;
  }
};

module.exports = SortedList;