"use strict";

/**
 * index.js
 * ------------------------------------------------------
 *
 * Main module file that exports the tags funciton. Wooh!.
 *
 * ------------------------------------------------------
 */

var _     = require('underscore'),
    names = require('./lib/tag-names');
  

// Validates attributes arguments when rendering a 
// new tag. Basically just converts arrays, objects,
// etc to strings.
// @param attributes {string, array, or object} The attributes
//   to be applied to the tag. If they are an array, they will
//   will simply be joined with a whitespace. If it is an object,
//   then the attributes will be combined with an equals sign, where
//   the key is the name and the value is the value (ehm..).
//
function checkAttributes (attributes) {
  
  attributes = attributes || "";
  
  // Sanity checks...
  if (_.isArray(attributes)) {
      
    attributes = ' ' + attributes.join(' ');
      
  } else if (_.isObject(attributes)) {
      
    attributes = _.chain(attributes).map(function(val, key) {        
      return key + "=" + val;
    }).reduce(function(m, n) {
      return m + " " + n;
    }, '').value();
      
  } else if (_.isString(attributes) && attributes.length > 2) {
      
    attributes = " " + attributes;
  }
  
  return attributes;
}




// Add a new tag name to the available methods.
//
// @param name {string} The name of the tag to create.
//
function addTag (name) {
  tags[name] = function (context, attributes) {
    context = context || "";
    
    attributes = checkAttributes(attributes);
      
    return '<' + (name + attributes) + '>' + context + '</' + name + '>';
  };
  
  return tags[name];
}



// The main tags object.
//
// @param tagName {string} Passed to internal addTag function
//   to create a new tag method.
//
function tags (tagName) {
  return addTag(tagName);
}




// This registers all of the default tags to
// the main export of the module.
//
_.each(names, function(tagName) {
  addTag(tagName);
});



// Hooray!

module.exports = tags;
