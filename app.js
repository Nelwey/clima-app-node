//------------- asi era mi codigo antes de crear la carpeta lugar


// const axios = require('axios');
// const { argv } = require('./config/yargs');

// // console.log(argv.direccion);

// let encodedUrl = encodeURI(argv.direccion);

// axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedUrl}.json?access_token=pk.eyJ1IjoibmVsd2V5IiwiYSI6ImNrNWVhbmwydDFoaXgzbXJ3eGY2aDRtMGEifQ.wONZLHszC5GrLPX5E71E4g`)
//   .then(resp => {

//     // let location = resp.data.features[0].place_name;
//     // let objetoLocation = JSON.stringify(location, undefined, 2);

//     let location = resp.data.features[0];
//     let nombreLocation = location.place_name;
//     let latitud = location.geometry.coordinates[1];
//     let longitud = location.geometry.coordinates[0];

//     console.log(nombreLocation);
//     console.log(`lat: ${latitud}`);
//     console.log(`lon: ${longitud}`);

//   })
//   .catch(e => console.log('ERROR!!!', e));


//----------------------------------------------------------------

// esto es antes de juntar los dos servicios con una funcion getInfo async

// const { argv } = require('./config/yargs');
// const { getLugarLatLng } = require('./lugar/lugar');
// const { getClima } = require('./clima/clima');


// getLugarLatLng(argv.direccion)
//   .then(resp => console.log(resp))
//   .catch(e => console.log(e));


// getClima(9.93333, -84.08333)
//   .then(temp => console.log(temp))
//   .catch(e => console.log(e));



//-----------------------------------------------------------------------



const { argv } = require('./config/yargs');
const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');


let getInfo = async(direccion) => {

  try {
    let objLocation = await getLugarLatLng(direccion);
    let temp = await getClima(objLocation.lat, objLocation.lng);
    // return `El clima en ${objLocation.direccion} es de ${temp}`
    return `ciudad: ${objLocation.direccion} '\n' lat: ${objLocation.lat} '\n' lng: ${objLocation.lng} '\n' temp: ${temp}`;

  } catch (e) {
    return `No se pudo determinar el clima en ${direccion}`;
  }
}

getInfo(argv.direccion)
  .then(resp => console.log(resp))
  .catch(e => console.log(e));