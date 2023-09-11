let rootApi = "./assets/js/data.js";

async function getStats(){
try {
    let respuesta = await fetch(rootApi);
    let statsApi = await respuesta.text();
    console.log(statsApi);
} catch (error) {
    console.log(error);
}


}

getStats();