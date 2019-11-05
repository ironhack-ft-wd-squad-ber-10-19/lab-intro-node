class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((num, num2) => {
      return num - num2;
    });
    this.length = this.items.length;
  }
  get(pos) {
    if (pos >= this.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];

  }

  max() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    }
    const maximum = this.items.reduce((a, b) => {

      return Math.max(a, b);

    });
    return maximum;
  }

  min() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    }
    const minimum = this.items.reduce((num) => {
      return Math.min(num);
    });
    return minimum;
  }

  sum(items) {
    const theSum = this.items.reduce(function (acc, val) {
      return acc += val;
    }, 0);
    return theSum;
  }
  average() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    }
    const theAverage = this.sum(this.items) / this.length;
    return theAverage;
  }

};

module.exports = SortedList;