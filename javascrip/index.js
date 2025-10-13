
function calcularEdad(){
    let anioNacimiento = document.getElementById("inputAnioNac").value;
    let anioActual = 2025;
    
    console.log(anioNacimiento);

    let edad = anioActual - anioNacimiento;
    
    let resultado = document.getElementById('resultado');

    console.log(edad);

    let mensajeEdad;
    if (edad>30) {
        mensajeEdad = "Ya estas mayor";
    }else if (edad<18) {
        mensajeEdad = "Todavia eres menor de edad";
    }else if (edad>=18 && edad<30) {
        mensajeEdad = "Ya eres mayor de edad";
    }

    /*resultado.innerHTML = "Tienes " + edad + " años.<br> <em>" + mensajeEdad; + "</em>";*/
    resultado.innerHTML = `Tienes ${edad} anios. <br> <em> ${mensajeEdad} </em>`
}
/*
<div>
    <input type="number" id="inputAnioNac" placeholder="Introduce tu edad">
    <button onclick="calcularEdad()">Calcula la edad</button>
    <p id="resultado"></p>
</div>

<!-- sepone al final de la pagina dentro de body-->
<script src="javascrip/index.js"></script>
*/
