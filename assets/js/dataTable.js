let rootApi = "https://mindhub-xj03.onrender.com/api/amazing";

async function getStats(){
try {
    let respuesta = await fetch(rootApi);
    let statsApi = await respuesta.json();
    console.log(statsApi);
} catch (error) {
    console.log(error);
}

}

getStats();


