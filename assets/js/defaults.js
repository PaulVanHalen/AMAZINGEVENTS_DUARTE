//se me ocurrio combinar esto con el video de la clase con el operador de "propagacion" 
// tuve problemas con las categorias que se estaban duplicando y busque soluciones. Hice esto como el ultimo video de repaso

let Categories = [...new Set(data.events.map(evento => evento.category))];
console.log(Categories);


//creando checkboxes

let htmlChecks = "";
Categories.forEach(category => {
    htmlChecks += `<label>

            <input type="checkbox" class="checkboxCategory" value="${category}" name="categories">
            <span>${category}</span>
        </label>`;

});

document.getElementById("containerCategories").innerHTML = htmlChecks;