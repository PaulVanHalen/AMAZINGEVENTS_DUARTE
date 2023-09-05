//separe el codigo de main js y esto lo uso para todas las secciones

function renderEventCards(events) {
    containerCard.innerHTML = '';

    for (let event of events) {
        let cardBox = `
        <div class="col">
            <div class="card">
                <img src="${event.image}" class="card-img-top img-fluid" alt="${event.name}">
                <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text">${event.description}</p>
                    <div class="d-flex" id="card-button">
                        <p class="card-text d-flex justify-content-between">Price $${event.price}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>`;

        containerCard.innerHTML += cardBox;
    }
}

// Obtener las categorías únicas de los eventos. Esto es con lo que vimos en la clase de ayer 04/09 "..."
let categories = [...new Set(data.events.map(event => event.category))];

// Crear checkboxes para las categorías.
let htmlChecks = "";
categories.forEach(category => {
    htmlChecks += `<label>
        <input type="checkbox" class="checkboxCategory" value="${category}" name="categories">
        <span>${category}</span>
    </label>`;
});

// Agregar los checkboxes al contenedor de categorías.
document.getElementById("containerCategories").innerHTML = htmlChecks;

// Función para aplicar filtros y actualizar las tarjetas de eventos.
function applyFilters() {
    let checkboxCategory = document.querySelectorAll(".checkboxCategory");
    let checkedCategories = Array.from(checkboxCategory)
        .filter(input => input.checked)
        .map(input => input.value.toLowerCase());

    let searchTerm = buscador.value.toLowerCase();

    let filteredEvents = data.events.filter(event => {
        let categoryMatch = checkedCategories.length === 0 || checkedCategories.includes(event.category.toLowerCase());
        let searchTermMatch = event.name.toLowerCase().includes(searchTerm) || event.category.toLowerCase().includes(searchTerm);
        return categoryMatch && searchTermMatch;
    });

    renderEventCards(filteredEvents);
}

// Escuchar elementos input de los checkboxes.
document.addEventListener('input', e => {
    if (e.target.classList.contains("checkboxCategory")) {
        applyFilters();
    }
});

// Escuchar cambios en la barra de búsqueda.
let buscador = document.querySelector('input[name="searchbar"]');
buscador.addEventListener('input', applyFilters);
