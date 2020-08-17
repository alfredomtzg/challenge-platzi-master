let a ;
let b ;
let c ;

const ElMayorDe = (a,b,c) => {
    if (a > b && a > c ) {
        console.log(`El mayor es A:  ${a}`);
    } else if (b > a && b > c) {
        console.log(`El mayor es B:  ${b}`);
    } else {
        console.log(`El mayor es C:  ${c}`);
    }
}

