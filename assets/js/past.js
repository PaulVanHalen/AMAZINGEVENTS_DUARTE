function generarCard(evento, idContenedor) {
    let card = `
    <div class="col">
        <div class="card">
            <img src="${evento.image}" class="card-img-top img-fluid" alt="${evento.name}">
            <div class="card-body">
                <h5 class="card-title">${evento.name}</h5>
                <p class="card-text">${evento.description}</p>
                <div class="d-flex" id="card-button">
                    <p class="card-text d-flex justify-content-between">Price $${evento.price}</p>
                    <a href="#" class="btn btn-primary">Ir a algún lugar</a>
                </div>
            </div>
        </div>
    </div>`;

    document.getElementById(idContenedor).innerHTML += card;
}

let pastEvents = data.events.filter(evento => evento.date < data.currentDate);

for (const evento of pastEvents) {
    generarCard(evento, "containerCard");
}
