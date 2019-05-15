// Code your solutions in this file
function writeCards(array) {
    const myArray = []
    for (let i = 0; i < array.length; i++) {
        myArray.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
    }
    return myArray;
}

function countdown(n) {
    let i = -1;
    let num = parseInt(n)
    while (i < num) {
        console.log(num);
        num--;
    }
}
    
