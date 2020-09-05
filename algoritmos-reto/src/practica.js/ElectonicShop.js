// value Budget
let budgets = 5;
// value keybord list
let keyboards = [ 4];
// value Drivers list
let drives = [4];


function electronicShop(keyboards, drives, budgets) {
    // initialize an array
    let arrSum = [];

    for (let keyboard of keyboards) {
        for (let drive of drives) {
            // sum of all combinations
            let sum = keyboard + drive;
            // filter number that meet the condition
            if (sum <= budgets){
                // new array
                arrSum = [...arrSum,sum]
            } 
            
        }
        
    }
    // condition if the array is empty do not pass it as true
    if (arrSum.length === 0) {
        // none value meets the condition, returns -1
        console.log(-1);
    }else {
        // if it is not empty, return the highest number
        maximo = Math.max(...arrSum)
        // print the highest number on the console
        console.log(maximo);
    }

}

electronicShop(keyboards, drives,budgets)
