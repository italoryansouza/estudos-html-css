let frutas = ["Banana", "Maçã", "Pera", "Uva", "Goiaba"]

console.log(frutas)


console.log(frutas[0])
console.log(frutas[frutas.length - 1])

frutas[1] = "morango"

console.log(frutas)

frutas.push("Laranja")

console.log(frutas)

frutas.shift()

console.log(frutas)

frutas.forEach(function(frutas){
    console.log(`A fruta desta posição é ${frutas}`)
})
