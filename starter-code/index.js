class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(x) {
    this.items.push(x);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    if (pos >= this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }
  max() {
    if (this.items.length < 1) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }
  min() {
    if (this.items.length < 1) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }
  average() {
    if (this.items.length < 1) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
  sum() {
    let sum = this.items.reduce((acc, currentValue) => acc + currentValue, 0);
    return sum;
  }
}

module.exports = SortedList;
