class SortedList {
  constructor() {
    this.length = 0;
    this.items = [];
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }
  get(pos) {
    if (pos < 0 || pos > this.length - 1) {
      throw new Error('OutOfBounds');
    }

    return this.items[pos];
  }
  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }
  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
  }
  average() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }

    const sum = this.sum();
    console.log(sum, sum / this.length);
    return sum / this.length;
  }
  sum() {
    if (this.length === 0) {
      return 0;
    }
    return this.items.reduce((acc, current) => acc + current);
  }
}

/* const sl = new SortedList();
let foo = 10;
for (let i = 0; i < 11; i++) {
  sl.add(foo * i);
  console.log(sl.items, i, foo * i, sl.get(i));
}
console.log(sl.sum()); */

module.exports = SortedList;
