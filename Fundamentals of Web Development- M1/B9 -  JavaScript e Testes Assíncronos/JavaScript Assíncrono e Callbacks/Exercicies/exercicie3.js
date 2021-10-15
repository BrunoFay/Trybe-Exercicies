const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = (callback) => {
  const maxTemperature = 58;
  return callback = Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callback) => console.log(`Mars temperature is: ${callback()} degree Celsius `);
 // imprime "Mars temperature is: 20 degree Celsius", por exemplo
setTimeout(()=>sendMarsTemperature(getMarsTemperature),5000)