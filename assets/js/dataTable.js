let rootApi = "https://mindhub-xj03.onrender.com/api/amazing";
let currentDate ;

async function getStats(callback){
try {
    let respuesta = await fetch(rootApi);
    let data = await respuesta.json();
    console.log(data);
    currentDate = data.currentDate;
    callback(data.events, currentDate);
} catch (error) {
}
}

