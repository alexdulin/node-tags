# node-tags - HTML tag builder.
Node module for creating HTML tags inspired by the R package [htmltools](https://cran.r-project.org/web/packages/htmltools/index.html).

## install me!

```bash
npm install --save htmltags

```

## How to use

This package provides very simple wrapper methods for creating HTML tags in client side code or in server applications. It provides simple methods for creating HTML tags as string without needing to write repetitive code like `'<h1>' + 'this is my text' + '</h1>'`. 

```js
var tags = require('htmltags');
var html = '';

html += tags.div(tags.p('This is a paragraph inside a div!'));
html += tags.h1('this is now a title appended to the end!');
html += tags.a('and here is a link with attributes!', 'href="https://google.com"');


// Attributes can be specified using an array as well. 
// The user must provide double quoting!

html += tags.a('Attributes from an array?', ['href="https://google.com"', 'target="_blank"']);


// Using an object to create tag attributes. 

html += tags.a('And from an object!!?', {
    href: '"https://google.com"', 
    target: '"_blank"'
});


// End result!
> "'<div><p>This is a paragraph inside a div!</p></div><h1>this is now a title appended to the end!</h1><a href="https://google.com">and here is a link with attrib
utes!</a><a href="https://google.com" target="_blank">Attributes from an array?</a><a href="https://google.com" target="_blank">And from an object!!?</a>'"

```

## Only two arguments?

Yeap. All of the tags functions take only two arguments: `content` and `attributes`. The content is what goes inside the main body of the tag, and the attributes are HTML attributes that are applied to the top level tag. 

## Adding more tags

The module includes all standard HTML 5 tags by default, but you can extend these by adding your own custom tags (i.e. for those using polymer?). The main `tags` function can be extended with a single parameter specifying the name of the new tag.

```js

tags('foobar');

tags.foobar('bimbaz');

> "<foobar>bimbaz</foobar>"
```

## Contributing

Please create a pull request with any changes you feel would be beneficial. This package is extermely simple by design, as I only intend for it to serve a single purpose: building html tags without having to write the opening and closing of tags and simplifying adding attributes. Any extensions beyond this would probably be unnecessary and beyond the scope of this module. Keep it lightweight!


## TODO
1. Make documentation.
2. Make tests.
3. Add ability to chain tags, like `tags.p().a()`
4. Add ability to use arrays or object as attributes.
