define(function() {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.toString = function() {
    return [this.name, " - ", this.age.toString()].join("");
  };

  return Person;
});
