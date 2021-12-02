# W02D04 - Promises

### To Do
- [x] Illustrate the "callback waterfall" (callback hell) problem
- [x] Introduction to Promises
- [x] Error handling with Promises (vs callbacks)
- [x] Parallelizing async things (Promise.all)
- [x] Creating our own Promises

### Promise
* Is a JS object that will (hopefully) resolve to a value in the future
* Pending
* Fulfilled/Resolved
* Failed/Rejected




```js
funcThatTakesCallback((err, data) => {
  if (err) {
    console.log(err);
  }
  funcThatTakesCallback((err, data) => {
    if (err) {
      console.log(err);
    }
  });
});
```






