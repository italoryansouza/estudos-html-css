let namorada = ["Andrezza", 21, "Lindona"]

console.log(namorada[0])
console.log(namorada[1])
console.log(namorada[2])

namorada[1] = 19

console.log(`Na verdade minha namorada tem ${namorada[1]} anos.`)

namorada.push("Ibura")

console.log(`Ela mora no ${namorada[3]}`)

console.log("Mostrando cada item do array com o for:")
for (let i = 0; i < namorada.length; i++){
    console.log(`O item na posição ${i} é ${namorada[i]}`)
}

console.log("Mostrando cada item do array com o forEach:")
namorada.forEach(function(namorada){
    console.log(namorada)
})