const asyncSum = (a, b, callback) => {
    setTimeout(() => {
      const result = a + b;
      callback(result);
    }, 500);
  };

  setTimeout(() => console.log('bruno'), 3000);
  setTimeout(console.log('bruno'), 3000);