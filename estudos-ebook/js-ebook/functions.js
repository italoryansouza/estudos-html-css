function parimpar(n){
    if (n%2 == 0){
        return `O número ${n} é par`
    } else {
        return `O número ${n} é ímpar!`
    }
}

console.log(parimpar(6))


let soma = function(n1, n2){
    console.log(`A soma entre ${n1} e ${n2} é ${n1 + n2}`)
}

soma(2, 8)

let boas_vindas = (nome) => {
    console.log(`Seja Bem-Vindo(a) ${nome}!!`)
}

boas_vindas("Ítalo")