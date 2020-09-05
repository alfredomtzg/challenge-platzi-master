//We get the weight of likman
let weightLikman = 4;
// We get the weight of Bob
let weightBob = 9;


// In what time will likman be heavier than bob?
function bearAndBigBrother(a,b) {
    // iteration in years
    let i = 0
    while (a <= b) {
        // increase value
        var a = a * 3;
        var b = b * 2;
        i++;
    }
    // print to console
    console.log(`Likman will weigh more than Bob in ${i} years`);
    
}


bearAndBigBrother (weightLikman,weightBob)

