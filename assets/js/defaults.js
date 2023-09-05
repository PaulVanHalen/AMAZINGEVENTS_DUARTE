//se me ocurrio combinar esto con el video de la clase con el operador de "propagacion" 
//tuve problemas con las categorias que se estaban duplicando y busque soluciones.

let categories = [...new Set(data.events.map(event => event.category))];

//creando checkboxes

let htmlChecks = "";
categories.forEach(category => {
    htmlChecks += `<label>

            <input type="checkbox" class="checkboxCategory" value="${category}" name="categories">
            <span>${category}</span>
        </label>`;

});

document.getElementById("containerCategories").innerHTML = htmlChecks;

//escuchar elementos input de los checkboxes, siguiendo el ejemplo del video de clases

document.addEventListener('input', e => {
    if (e.target.classList.contains("checkboxCategory")) {
        let checkboxCategory = document.querySelectorAll(".checkboxCategory");
        let checked = [];
        for (input of checkboxCategory) {
            if (input.checked) {
                checked.push(input.value);
            }
        }

        if (checked.length > 0) {
            let filtereds = data.events.filter(event => checked.includes(event.category));
            //console.log(filtereds); funciona
        }
    }
});
