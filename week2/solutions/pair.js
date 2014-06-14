function Pair(left, right) {
  this.left = left;
  this.right = right;
}

Pair.prototype.equals = function(pair) {
  if(!(pair instanceof Pair)) {
    throw new TypeError("Should be Pair");
  }

  return this.left === pair.left && this.right === pair.right;
}

Pair.prototype.toString = function() {
  return ["(", 
          this.left.toString(), 
          ", ", 
          this.right.toString(), 
          ")"].join("")
};

Pair.prototype.toList = function() {
  return [this.left, this.right];
}

Pair.prototype.combine = function(f) {
  return f(this.left, this.right);
};
