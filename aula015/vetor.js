let num = [5, 1, 2, 7, 6]

/*for(var c = 0; c < num.length; c++) {
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}*/

for(let c in num) {
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}