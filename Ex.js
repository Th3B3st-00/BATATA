//Ex 01 ------------VARIAVEIS---------------
let nome = 'João'

console.log(nome)

//Ex 02
let a =5, b = 10, n

n = a + b
console.log(n)

//Ex 03
let primeiroNome = 'Josefa', ultimoNome = 'Silva'

console.log(primeiroNome, ultimoNome)

//Ex 04
let pessoa = {nome: 'Roberto', idade: 17, endereço: 'Rua mamaco', telefone: 99998888}

console.log(pessoa)

//Ex 01 -------------VETORES-----------------
let frutas = ['maça', 'banana', 'laranja']

frutas[3] = 'morango'
console.log(frutas)

//Ex 02
let numeros = [1, 2, 3, 4 ,5]

console.log(numeros[0], numeros[4])

//Ex 03
let cores = ['vermelho', 'verde', 'azul']

for (let i = 0; i <= 2; i++)
console.log(cores[i])

//Ex 01 ---------ESTRUTURAS DE DECISÃO-------
let idade = 15

if(idade < 18){
    console.log('\nVocê é menor de idade')
    
} else {
    console.log('Você é maior de idade')
}

//Ex 02
let nota = 6

if(nota >= 7){
    console.log('\nVocê foi aprovado')
    }
if(nota >= 5 & nota<7){
    console.log('\nRecuperação')
    }
if(nota < 5){
    console.log('\nReprovado') 
    }

//Ex 03
let nomedoDia, diadaSemana = 3

switch(diadaSemana){
    case 1:
        nomedoDia = 'Domingo'
        break
    case 2:
        nomedoDia = 'Segunda'
        break
    case 3:
        nomedoDia = 'Terça'
        break
    case 4:
        nomedoDia = 'Quarta'
        break
    case 5:
        nomedoDia = 'Quinta'
        break
    case 6:
        nomedoDia = 'Sexta'
        break
    case 7:
        nomedoDia = 'Sabado'
        break
}
console.log(nomedoDia)

//Ex 01 --------LAÇOS DE REPETIÇÃO----------
for(let i = 0; i <= 10; i++)
    console.log(i)
    
//Ex 02
let contador = 1

while(contador <= 5){
    console.log(contador)
    contador++
}

//Ex 03
let numero = 0

do {
    console.log(numero)
    numero++
} while(numero <= 3)

//Ex 01 -------COMBINANDO CONCEITOS-------
let valores = [10, 20, 30, 40, 50], soma = 0

for(let i = 0; i < 5; i++)
soma += valores[i]
console.log(soma)

//Ex 02
let numeros = [56, 2, 76]
let maiorNumero = numeros[0]

for(let i = 1; i <= 3; i++){
    if(numeros[i] > maiorNumero)
    maiorNumero = numeros[i]
}
console.log(maiorNumero)