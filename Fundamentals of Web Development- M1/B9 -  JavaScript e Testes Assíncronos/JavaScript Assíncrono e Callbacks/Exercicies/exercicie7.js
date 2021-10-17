const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };
  console.log(uppercase('btugse',uppercase));
  
  
  
  module.exports ={
    uppercase()
  }