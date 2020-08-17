let mes;

const DevolverMes = (mes) => {
    switch (mes) {
        case 1:
            console.log(`Soy Enero`);
            break;
        case 2:
            console.log(`Soy Febrero`);
            break;
        case 3:
            console.log(`Soy Marzo`); 
            break;
        case 4:
            console.log(`Soy Abril`); 
            break;
        case 5:
            console.log(`Soy Mayo`);
            break;
        case 6:
            console.log(`Soy Junio`);
            break;
        case 7:
            console.log(`Soy Julio`);
            break;
         case 8:
            console.log(`Soy Agosto`);
            break;
        case 9:
            console.log(`Soy Septiembre`);
            break;
        case 10:
            console.log(`Soy Octubre`);
            break;
        case 11:
            console.log(`Soy Noviembre`);
            break;
        case 12:
            console.log(`Soy Diciembre`);
            break;
        default:
                console.log(`No tengo un mes asignado :( `);
    }
}

DevolverMes(4);
DevolverMes(8);
DevolverMes(11);
DevolverMes(0);