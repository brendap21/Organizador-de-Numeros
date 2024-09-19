document.getElementById('numeroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    // Obtener el valor del campo de texto
    const numerosInput = document.getElementById('numeros').value;

    // Convertir la cadena de números en un array de enteros
    const numerosArray = numerosInput.split(',')
        .map(num => parseInt(num.trim()))
        .filter(num => !isNaN(num));

    if (numerosArray.length === 10) {
        // Mostrar los números ingresados
        document.getElementById('numeros_ingresados').textContent = numerosArray.join(', ');

        // Ordenar el array en orden ascendente y descendente
        const numerosAscendentes = [...numerosArray].sort((a, b) => a - b);
        const numerosDescendentes = [...numerosArray].sort((a, b) => b - a);

        // Mostrar los números ordenados
        document.getElementById('orden_menor_mayor').textContent = numerosAscendentes.join(', ');
        document.getElementById('orden_mayor_menor').textContent = numerosDescendentes.join(', ');

        // Ocultar la imagen y el mensaje inicial
        document.getElementById('illustrationNotFound').style.display = 'none';
        document.getElementById('no-message').style.display = 'none';

        // Mostrar la caja de resultados
        document.getElementById('resultado-box').style.display = 'block';
    } else {
        alert('Por favor, ingresa exactamente 10 números separados por comas.');
    }

    // Limpiar la caja de texto
    document.getElementById('numeros').value = '';
});
