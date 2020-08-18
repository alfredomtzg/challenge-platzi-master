
function aumentar() {
    let numero = 0
    console.log(numero);
    return function () {
        numero++
        console.log(numero);
    }
}

const incrementar = aumentar()

incrementar()
incrementar()
incrementar()
incrementar()
incrementar()

// ARRIBA ESTÁ PROTEGIDA Y NO SE PUEDE TOCAR DESDE AFUERA DEL SCOPE DE LA VARIABLE

let numero = 0;

function aumentar () {
    numero++
    console.log(numero);
}

aumentar();
aumentar();
aumentar();
aumentar();

// AQUI ESTA DESPROTEGIDA Y TIENE EL PROBLEMA QUE VA A MODIFICAR LA VARIABLE POR AFUERA DE LA FUNCIÓN AÑ RETORNAR UN VALOR NUEVO A LA VARIABLE

