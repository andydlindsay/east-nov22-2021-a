const newPromise = new Promise((resolve, reject) => {
  // resolve(['data from the database']);

  reject('the error');
});

newPromise
  .then((data) => {
    console.log('data', data);
  })
  .catch((err) => {
    console.log('bad stuff:', err);
  });
