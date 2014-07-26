'use strict';

function range(from, to) {
  var result = [];
  while(from <= to) {
    result.push(from);
    from++;
  }
  return result;
}

function tag(tagName, value) {
  return ['<', tagName, '>', value, '</', tagName, '>'].join('');
}

function whitespace (times) {
  return range(0, times).map(function() {
    return ' ';
  }).join('');
}

function joinTags(listType, items, indent) {
  // ul tags start with 0 indent
  // li tags start with 2 indent
  var innerIndent = indent + 2;

  var result = [whitespace(indent), '<', listType , '>' ,'\n'].join('');

  items.forEach(function(item) {
    result += [whitespace(innerIndent), tag(LIST_ITEM, item.label), '\n'].join('');

    if(item.children) {
      result += joinTags(listType, item.children, innerIndent + 2);
    }
  });

  result += [whitespace(indent), '</', listType, '>', '\n'].join('');

  return result;
}

var LIST_ITEM = 'li';

var htmlList = function(listType, items) {
  return joinTags(listType, items, 0);
};


var nested = [{ 'label' : 'Item 1'},
             { 'label' : 'Item 2', 'children' : [
                {
                    'label' : 'Level 2 of Item 2',
                    'children' : [
                      {
                        'label': 'level 3 of item 2'
                      },
                      {
                        'label': 'level 3 of item 2',
                        'children': [
                          {
                            'label': 'level 4 of item 2'
                          }
                        ]
                      }
                    ]
                },
                {
                    'label' : 'Another level 2'
                }
             ]}];

console.log(htmlList('ul', nested));
