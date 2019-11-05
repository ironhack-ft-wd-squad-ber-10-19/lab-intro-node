class SortedList {
  constructor() {
    // the contructor only runs once
    this.items = [], 
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item), 
    this.length = this.items.length; //update length
  }

  get(pos) {
    if (this.items.length === 0) {
      throw new Error("OutOfBounds");
    } else if (pos >= this.items.length) {
      throw new Error("OutOfBounds");
    } else { 
      return this.items[pos];
    } 
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
}

  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      const arrAvg = this.items.reduce((a,b) => a + b, 0) / this.items.length
      return arrAvg;
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0; 
    } else {
    const arrSum = this.items.reduce((a,b) => a + b, 0);
    return arrSum;
    }
  }

}

module.exports = SortedList;