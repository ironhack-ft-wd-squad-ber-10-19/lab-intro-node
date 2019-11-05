class SortedList {
  constructor(item, length) {
    this.item = [];
    this.length = 0;
  }
  add(item) {
    //
    this.item.push(item);
    this.item.sort((a, b) => a - b);
    this.length = this.item.length;
  }
  get(pos) {
    //
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    }
    return this.item[pos];
  }
  max() {
    if (this.emptySortedList()) {
    }
    return Math.max(...this.item);
  }
  min() {
    if (this.emptySortedList()) {
    }
    return Math.min(...this.item);
  }
  average() {
    if (this.emptySortedList()) {
    }
    return this.sum() / this.item.length;
  }
  sum() {
    if (this.item.length === 0) {
      return 0;
    }
    return [...this.item].reduce((acc, val) => acc + val);
  }
  emptySortedList() {
    if (this.item.length === 0) {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
