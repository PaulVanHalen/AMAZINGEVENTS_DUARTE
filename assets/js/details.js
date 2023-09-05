
//USANDO LO DEL VIDEO QUE VIMOS EN CLASE 
document.addEventListener('DOMContentLoaded', () => {
    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");
const container = document.getElementById('container');

const cards = data.events.reduce((acc, act)=> {return acc + `
<div class="image text-center" style="width: 18rem">
<a  href="./details.html?id${act._id}" class="text-decoration-none item">
<img class="card-image-top" src="${act.image}" alt="image from ${act.name}">
<h4 class="title" text-black">${act.name}</h4>
</div>
`
},"")

container.innerHTML = cards;
});

//Pagina en reparacion, de momento es un desastre, falta filtrar 