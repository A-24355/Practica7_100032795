document.getElementById('btnDatos').addEventListener('click', function () {
    const nombre = 'Karol Alberto Galdámez Gómez';
    const matricula = '100032795';
    const carrera = 'Licenciatura en Sistemas Computacionales';
    const semestre = 5;

    const mensaje = `NOMBRE: ${nombre} | MATRICULA: ${matricula} | CARRERA: ${carrera} | SEMESTRE: ${semestre}`;

    document.getElementById('parDatos').textContent = mensaje;
    console.log('Datos mostrados correctamente:', { nombre, matricula, carrera, semestre });
});

/* Calculadora de calificaciones */
document.getElementById('btnCalc').addEventListener('click', function () {
    const p1 = parseFloat(document.getElementById('p1').value);
    const p2 = parseFloat(document.getElementById('p2').value);
    const p3 = parseFloat(document.getElementById('p3').value);

    if (isNaN(p1) || isNaN(p2) || isNaN(p3)) {
        alert('Por favor ingresa las tres calificaciones parciales.');
        return;
    }

    const promedio = (p1 + p2 + p3) / 3;
    const parCalc = document.getElementById('parCalc');

    console.log('Promedio calculado:', promedio.toFixed(2));

    if (promedio >= 70) {
        parCalc.textContent = `Promedio: ${promedio.toFixed(2)} - Aprobado ✓`;
        parCalc.style.color = '#198754'; // Verde
    } else {
        parCalc.textContent = `Promedio: ${promedio.toFixed(2)} - Reprobado ✗`;
        parCalc.style.color = '#DC3545'; // Rojo
    }
});

/* Lista dinámica */
document.getElementById('btnAgregar').addEventListener('click', function () {
    const input = document.getElementById('inputItem');
    const valor = input.value.trim();

    if (valor === '') return;

    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = valor;

    document.getElementById('milista').appendChild(li);
    input.value = '';
    console.log('Elemento agregado a la lista:', valor);
});

document.getElementById('btnLimpiar').addEventListener('click', function () {
    document.getElementById('milista').innerHTML = '';
    console.log('Lista limpiada.');
});

/* Cambio de estilos */
function cambiarFondo(color) {
    document.getElementById('sec-estilos').style.backgroundColor = '#' + color;
    console.log('Color de fondo actualizado a:', '#' + color);
}