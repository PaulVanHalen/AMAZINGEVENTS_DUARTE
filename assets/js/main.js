let containerCard = document.getElementById('containerCard');
for (let event of data.events) {
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
