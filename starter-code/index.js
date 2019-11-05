class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }


  add(item) {
    this.items = [...this.items, item];
    this.length++
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    if (pos >= this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos]
    }
  }

  max() {
    if(this.length === 0) {
    throw new Error("EmptySortedList");
    } else {
    return Math.max(...this.items); }
  }
  min() {
    if(this.length === 0) {
      throw new Error("EmptySortedList");
      } else {
      return Math.min(...this.items); }
  }
  average() {
    if(this.length === 0) {
      throw new Error("EmptySortedList");
      } else {
      return this.sum() / this.length; }
  }
  sum() {
  let sum;
  sum = this.items.reduce((acc, value) => {
    return acc + value;
   }, 0)
   return sum;
  }
  
};

module.exports = SortedList;