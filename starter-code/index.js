class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(x) {
    this.items.push(x);
    this.length++;
  }
  get(pos) {
    if (pos < this.length) {
      this.items.sort((a, b) => a - b)
      return this.items[pos];
    }
    throw new Error("OutOfBounds");
  }
  max() {
    if (this.length > 0) {
      return Math.max(...this.items);
    }
    throw new Error("EmptySortedList");
  }
  min() {
    if (this.length > 0) {
      return Math.min(...this.items);
    }
    throw new Error("EmptySortedList");
  }
  

  sum() {
    if (this.length > 0) {
      const sumi = this.items.reduce((acc, val) => acc + val);
      return sumi;
    }
    return 0;
  }

  average() {
    if (this.length > 0) {
      return this.sum() / this.length;
    }
    throw new Error("EmptySortedList");
  }
}

module.exports = SortedList;
