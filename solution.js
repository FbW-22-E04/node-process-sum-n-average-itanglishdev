// const sum = (a,b,c,d) => (a + b + c + d)

// function sum(a,b,c,d) {
//     a + b + c + d
// }

// module.exports = {sum}

// module.exports.sum = (a,b,c,d) => a + b + c + d
// console.log(module.exports)

// console.log('the precess is ', process.argv);
let total = 0

if (process.argv[2] !== 'sum') {
    return console.log('Sorry, cannot calculate');
} for (let i = 3;  i < process.argv.length; i++ ) {
    if (typeof process.argv[i] !== 'number') {
        return console.log(`Sorry ${process.argv[i]} is not a number`)
    } function sum() {
        for (let i = 3; i < process.argv.length; i++ ) {
            total += Number(process.argv[i])
        }
    }
}


sum()

console.log(total)