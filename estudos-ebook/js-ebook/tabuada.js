console.log("TABUADA DO 7:")

for(let i=0; i <= 10; i++){
    console.log(`7 x ${i} = ${7*i}`)
}


console.log("NÚMEROS PARES DE 2 A 20:")

let number = 2;

while (number <=20){
    if (number%2 == 0){
        console.log("O número " + number + " é par!")
    }
    number++
}

console.log("NÚMEROS DE 1 A 15")

let number2 = 1

do {
    console.log(number2)
    number2++
} while(number2 <= 15)

console.log("EXIBINDO CORES DE UM ARRAY")

let cores = ["Azul", "Amarelo", "Vermelho", "Rosa", "Roxo"]
for(let i = 0; i < cores.length; i++){
    console.log(cores[i])
}

cores.forEach(function(cores){
    console.log(`A cor ${cores} é linda!`)
})