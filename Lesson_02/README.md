# js-tutorial Lesson 2 Branching and Looping
## Branching
### if A 
  Is when we have `if` clause only
### if AB 
  Is when we have `if` clause paired with the `else` clause

  > Always bear in mind summarizing techniques and [Yoda conditions](https://en.wikipedia.org/wiki/Yoda_conditions#Example)
### ?: Tunary operator
  A [Syntactic sugar](https://www.techopedia.com/definition/10212/syntactic-sugar) for assigning variable regarding a condition.
    
![Screenshot 2022-06-12 122901](https://user-images.githubusercontent.com/97400721/173324596-e2e79047-df77-4771-b874-3eeaada0aca7.png)

### Switch
  Use this branching technique when handling equal comparisons.

  A switch statement in javascript always compares **strictly '==='**
### `++i` VS `i++`
#### ++i
  ``` js
    var i = 5;
    res = ++i + 2;
    // is equivelant to
    i = i + 1;
    res = i + 2;
  ```
#### i++
  ``` js
    var i = 5;
    res = i++ + 2;
    // is equivelant to
    res = i + 2;
    i = i + 1;
  ```
### looping
> `for` `while` and `do while` Are all looping techniques

#### looping elements
* initilaizer e.g `var i = 0`.
* condition e.g `i < 10` make sure that the confition turns false at a certin point.
* itration what moves the varaible to the next stage e.g `i++`.

> choose `for` when you know each etration haw it srara and incremented ALWAYS by certin amount

> Choose `while` when not knowing exsactly the itrator increments procces  

> Choose `do-while` when all you know is **the end** 

### Break and continue

  Can be used in all loops to exit loop manually `break` or continue on next itration `continue` 
