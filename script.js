const form =
document.getElementById("turnoForm");

const mensaje =
document.getElementById("mensaje");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const turno = {
        nombre:
        document.getElementById("nombre").value,

        telefono:
        document.getElementById("telefono").value,

        servicio:
        document.getElementById("servicio").value,

        dia:
        document.getElementById("dia").value,

        hora:
        document.getElementById("hora").value
    };

    let turnos =
    JSON.parse(
        localStorage.getItem("turnos")
    ) || [];

    turnos.push(turno);

    localStorage.setItem(
        "turnos",
        JSON.stringify(turnos)
    );

    mensaje.innerText =
    "✅ Turno reservado correctamente";

    form.reset();

});