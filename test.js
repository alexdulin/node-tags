"use strict";

var tags = require('./index');


// Test 1. Extending tags with custom names

tags('foobar');
console.log(tags.foobar('bimbaz'));



// Test 2. Attributes using a string

console.log(tags.a('and here is a link with attributes!', 'href="https://google.com"'));



// Test 3. Attributes using an array

console.log(tags.a('Attributes from an array?', ['href="https://google.com"', 'target="_blank"']));



// Test 4. Attributes using an object

var t4 = tags.a('And from an object!!?', {
    href: '"https://google.com"', 
    target: '"_blank"'
});

console.log(t4);
