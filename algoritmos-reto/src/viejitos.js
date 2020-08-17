let personaUno;
let personaDos;

const MasViejito = (personaUno, personaDos) => {
     if (personaUno > personaDos) {
        console.log(`El mayor es :  ${personaUno}`);
    } else if (personaUno < personaDos) {
        console.log(`El mayor es :  ${personaDos}`);
    }
    else  {
        console.log(`tienen la misma edad`);
    }
}
