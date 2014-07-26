function Shape(type) {
  this.getType = function() {
    return type;
  }
}

Shape.prototype.area = function() {
  throw new Error("Cannot call area of Shape. Use subclasses!");
};