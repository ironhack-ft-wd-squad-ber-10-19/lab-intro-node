class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items = [...this.items, item];
    this.items.sort((a, b) => a - b);
    // this.items.push(item);
    this.length = this.items.length;
  }
  get(pos) {
    if (pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }
  max() {
    if (this.items.length > 0) {
      return Math.max(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  min() {
    if (this.items.length > 0) {
      return Math.min(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  average() {
    if (this.items.length > 0) {
      return this.sum() / this.items.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
  sum() {
    if (this.items.length > 0) {
      return [...this.items].reduce((a, b) => a + b, 0);
    } else {
      return 0;
    }
  }
}

module.exports = SortedList;
