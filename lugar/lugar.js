const axios = require('axios');

const getLugarLatLng = async(direccion) => {

  let encodedUrl = encodeURI(direccion);

  let resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedUrl}.json?access_token=pk.eyJ1IjoibmVsd2V5IiwiYSI6ImNrNWVhbmwydDFoaXgzbXJ3eGY2aDRtMGEifQ.wONZLHszC5GrLPX5E71E4g`);

  if (resp.data.features == '') {
    throw new Error(`No hay resultados para la ciudad ${direccion}`);
  }

  let location = resp.data.features[0];
  let nombreLocation = location.place_name;
  let latitud = location.geometry.coordinates[1];
  let longitud = location.geometry.coordinates[0];
  return {
    direccion: nombreLocation,
    lat: latitud,
    lng: longitud
  }
}

module.exports = {
  getLugarLatLng
}