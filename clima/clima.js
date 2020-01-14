const axios = require('axios');
const getClima = async(lat, lng) => {

  let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=80f4ff863841ff4d3c0b83a9394fd2b7`);

  let temperatura = resp.data.main.temp;
  return temperatura;
}


module.exports = {
  getClima
}