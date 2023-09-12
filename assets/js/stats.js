// creando la tabla

let container = document.getElementById("#tableBody");

getStats(createTable);

//filtro por nombre a los eventos, asi accedo mas facil a ellos

function createTable(events){
    let tbodyHTML = "";
    events.forEach(events =>{
        let eventsFiltereds = events.filter(events =>{
        let eventName = events.name.map(event => event.name);
        if (eventName.includes(events))
        {return true;}
        else {
            return false;
        }
        
    });
        let eventName = events.name;
        let mayorAsistencia = getMayorAsistencia(eventsFiltereds);
        let menorAsistencia = getMenorAsistencia(eventsFiltereds);
        let mayorCapacidad = getMayorCapacidad(eventsFiltereds);

        tbodyHTML += `<tr>
        <td>${eventName}</td>
        <td>${mayorAsistencia.name} (${mayorAsistencia.assistance})</td>
        <td>${menorAsistencia.name} (${menorAsistencia.assistance})</td>
        <td>${mayorCapacidad.name} (${mayorCapacidad.capacity})</td>
        </tr>
        `
    })

    container.innerHTML = tbodyHTML;
}

// Todos los eventos
function getMayorAsistenciaTodos(eventsFiltereds) {
    return eventsFiltereds.reduce((mayor, actual) => {
        if (mayor.assistance > actual.assistance) {
            return mayor;
        } else {
            return actual;
        }
    });
}

function getMenorAsistenciaTodos(eventsFiltereds) {
    return eventsFiltereds.reduce((menor, actual) => {
        if (menor.assistance < actual.assistance) {
            return menor;
        } else {
            return actual;
        }
    });
}

function getMayorCapacidadTodos(eventsFiltereds) {
    return eventsFiltereds.reduce((mayor, actual) => {
        if (mayor.capacity > actual.capacity) {
            return mayor;
        } else {
            return actual;
        }
    });
}

// Eventos pasados
function getMayorAsistenciaPasados(eventsFiltereds, currentDate) {
    return eventsFiltereds.reduce((mayor, actual) => {
        const eventDate = new Date(actual.date);
        if (eventDate < new Date(currentDate) && mayor.assistance > actual.assistance) {
            return mayor;
        } else {
            return actual;
        }
    });
}

function getMenorAsistenciaPasados(eventsFiltereds, currentDate) {
    return eventsFiltereds.reduce((menor, actual) => {
        const eventDate = new Date(actual.date);
        if (eventDate < new Date(currentDate) && menor.assistance < actual.assistance) {
            return menor;
        } else {
            return actual;
        }
    });
}

function getMayorCapacidadPasados(eventsFiltereds, currentDate) {
    return eventsFiltereds.reduce((mayor, actual) => {
        const eventDate = new Date(actual.date);
        if (eventDate < new Date(currentDate) && mayor.capacity > actual.capacity) {
            return mayor;
        } else {
            return actual;
        }
    });
}

// Eventos futuros

function getMayorAsistenciaFuturos(eventsFiltereds, currentDate) {
    return eventsFiltereds.reduce((mayor, actual) => {
        const eventDate = new Date(actual.date);
        if (eventDate > new Date(currentDate) && mayor.assistance > actual.assistance) {
            return mayor;
        } else {
            return actual;
        }
    });
}

function getMenorAsistenciaFuturos(eventsFiltereds, currentDate) {
    return eventsFiltereds.reduce((menor, actual) => {
        const eventDate = new Date(actual.date);
        if (eventDate > new Date(currentDate) && menor.assistance < actual.assistance) {
            return menor;
        } else {
            return actual;
        }
    });
}

function getMayorCapacidadFuturos(eventsFiltereds, currentDate) {
    return eventsFiltereds.reduce((mayor, actual) => {
        const eventDate = new Date(actual.date);
        if (eventDate > new Date(currentDate) && mayor.capacity > actual.capacity) {
            return mayor;
        } else {
            return actual;
        }
    });
}