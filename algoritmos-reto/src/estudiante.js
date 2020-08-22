let d;
let e;
let f;
const Calificaciones = (d,e,f) => {
    let promedio = (d + e + f) / 3;
    let promedioConUnDecimal = promedio.toFixed(1)
    console.log(`El promedio es de ${promedioConUnDecimal}`);
};