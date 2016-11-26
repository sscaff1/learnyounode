const numbersToAdd = process.argv.slice(2, process.argv.length);
console.log(numbersToAdd.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0));
