// const sum = (a,b,c,d) => (a + b + c + d)

// function sum(a,b,c,d) {
//     a + b + c + d
// }

// module.exports = {sum}

// module.exports.sum = (a,b,c,d) => a + b + c + d
// console.log(module.exports)

// console.log('the precess is ', process.argv);
let total = 0
let med = 0
const array = []

// if (process.argv[2] !== 'sum') {
//     return console.log('Sorry, cannot calculate');
// } for (let i = 3;  i < process.argv.length; i++ ) {
//     if (typeof process.argv[i] !== 'number') {
//         return console.log(`Sorry ${process.argv[i]} is not a number`)
//     } function sum() {
//         for (let i = 3; i < process.argv.length; i++ ) {
//             total += Number(process.argv[i])
//         }
//     }
// }

function median() {
    for (let i = 3;  i < process.argv.length; i++ ) {
        array.push(Number(process.argv[i]))
    }
    // console.log(array, 'array here')
    array.sort(function(a,b){return a - b})
    console.log(((array.length -1) / 2),'here')
    med = (array.length - 1 )/ 2

    if (Number.isInteger(med)) {
        return array[med]
    } return ((array[med - .5] + array[med + .5]) / 2)
    
    
}
// console.log();
// console.log(array);

// sum()
console.log(median());

// console.log(total)