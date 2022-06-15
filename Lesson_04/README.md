# js-tutorial Lesson 4 Core Objects and DOM

## Core Objects 

### Arrays

A collection of things storing mutiple values

``` js
/*
    0, 0, 0, 0, 0, 0
    0, 0, 0, 0, 0, 0
    0, 0, 0, 0, 0, 0
    0, 0, 0, 0, 0, 0
    0, 0, 0, 0, 0, 0
*/
```
### General loop

``` js
for (var i = 0; i < arr2.length; i++) {
  console.log('Array element', arr2[i]);
}
```
### Two dimensional loop

``` js
for (var i = 0; i < twoDim.length; i++) {
  for (var j = 0; j < twoDim[i].length; j++) {
    console.log(twoDim[i][j]);
  }
}
```

### Date and Math 

Both are objects in javascript Date uses a constructor Math doesn't check the pictures directory.

Javascript [reference](https://www.w3schools.com/jsref/default.asp) for other objects

### DOM

The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.

### Events 

something causing an action to be performed

#### Events elements

1. Who: the object caused it **Button** for instance
1. What: what should happen *function to be execited* **Event handler**
1. why: the reason it happend e.g it was clicked