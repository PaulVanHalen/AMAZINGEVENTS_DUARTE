
let container = document.getElementById("tableBody");
let container1 = document.getElementById("tableBody");
let container2 = document.getElementById("tableBody");

getStats(createTable);

function createTable(events, currentDate){
    let tbodyHTML = "";
        const eventosPasados = events.filter (evento => evento.date < currentDate)
        console.log(events);
        const eventosFuturos = events.filter (evento => evento.date > currentDate)

        let mayorAsistencia = eventosPasados.sort((a, b) => (b.assistance * 100) / b.capacity - (a.assistance * 100) / a.capacity).slice(0, 3);
        let menorAsistencia = eventosPasados.sort((a, b) => (a.assistance * 100) / a.capacity - (b.assistance * 100) / b.capacity).slice(0, 3);
        let mayorCapacidad = events.sort((a, b) => b.capacity - a.capacity).slice(0, 3);

        for (let i = 0; i < mayorCapacidad.length; i++){

        tbodyHTML += `<tr>
        <td>${mayorAsistencia[i].name}</td>
        <td>${menorAsistencia[i].name}</td>
        <td>${mayorCapacidad[i].name}</td>
        </tr>
        `
    }

    container.innerHTML = tbodyHTML;
}