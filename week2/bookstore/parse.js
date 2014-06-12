var _ = require("lodash");
var data = require("./data");
var fs = require("fs");

var picks = ["isbn", "title", "image_url", "small_image_url", "num_pages", "description", "average_rating", "publised"]

var books = [];

// console.log(data.GoodreadsResponse.author.books.book[0]);

data.GoodreadsResponse.author.books.book.filter(function(book) {
  return book.image_url.indexOf("nophoto") < 0;
}).forEach(function(book) {
  books.push(_.pick(book, picks));
});

fs.writeFileSync("books.json", JSON.stringify(books, null, 4));

console.log(books.length);