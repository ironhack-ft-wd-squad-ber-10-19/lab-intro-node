class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
   }
  add(item) {
    this.items.push(item);
    this.length++
   }
  get(pos) {
    if(pos < 0 || pos > this.length){
      throw new Error("OutOfBounds")
    }
    this.items.sort((a, b) => a - b)
    return this.items[pos]
   }
  max() {
    if (this.length === 0) throw new Error("EmptySortedList")
    return Math.max(...this.items)
   }
  min() {
    if (this.length === 0) throw new Error("EmptySortedList")
    return Math.min(...this.items)
   }
  average() {
    if (this.length === 0) throw new Error("EmptySortedList")
    return this.sum() / this.length 
    
  }
  sum() { 
    if (this.length === 0) return 0
    return this.items.reduce((acc,val) => {
      acc += val
      return acc
    },0) 
  }
};

module.exports = SortedList;