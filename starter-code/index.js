class SortedList {
  constructor() {
    this.items = [];
  }
  get length() {
    return this.items.length;
  }
  add(item) {
    this.items = [...this.items, item].sort((a, b) => a - b)
  }
  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds")
    } else {
      return this.items[pos]
    }
  }
  max() {
    if (this.length === 0){
      throw new Error ("EmptySortedList")
    } else {
      return Math.max(...this.items)
    }
  }
  min() {
    if (this.length === 0){
      throw new Error ("EmptySortedList")
    } else {
      return Math.min(...this.items) // spread to find biggest array elem, otherwise just compares array itself
    }
  }
  average() { 
    if (this.length === 0 ){
      throw new Error ("EmptySortedList")
  } else {
    this.sum();
    return this.sum / this.items.length
  }
}

  sum() { 
    this.sum = this.items.reduce((a, b) => a + b, 0)
    return this.sum
   }
}

module.exports = SortedList;
