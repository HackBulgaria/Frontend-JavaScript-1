var _ = require("lodash");

var htmlGenerator = {
  tag: function(data) {
    // <tag attributes>content</tag>

    var
      attrTemplate = '<%= key %>="<%= value %>"',
      attributes = [],
      tagTemplate = "<<%= tagName %><%= attributes %>><%= content %></<%= tagName %>>";

    if(data.attributes) {
      attributes.push("");
      data.attributes.forEach(function(attr) {
        attributes.push(_.template(attrTemplate, attr));
      });
    }

    return _.template(tagTemplate, {
      tagName: data.tagName,
      content: data.data,
      attributes: attributes.join(" ")
    });
  }
}

var element = htmlGenerator.tag({
    tagName: "div",
    data: htmlGenerator.tag({
        tagName: "h1",
        data: "Hello!"
    }),
    attributes: [{
        key: "class",
        value: "container"
    }, {
        key: "id",
        value: "main-container"
    }]
});

console.log(element);
