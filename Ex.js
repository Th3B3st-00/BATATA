//Ex 01 ------------VARIAVEIS---------------
let nome = 'João'

console.log(nome)

console.log("\n")
//Ex 02
let a =5, b = 10, n

n = a + b
console.log(n)

console.log("\n")

//Ex 03
let primeiroNome = 'Josefa', ultimoNome = 'Silva'

console.log(primeiroNome, ultimoNome)

console.log("\n")

//Ex 04
let pessoa = {nome: 'Roberto', idade: 17, endereço: 'Rua mamaco', telefone: 99998888}

console.log(pessoa)

console.log("\n")

//Ex 01 -------------VETORES-----------------
let frutas = ['maça', 'banana', 'laranja']

frutas[3] = 'morango'
console.log(frutas)

console.log("\n")

//Ex 02
let numeros = [1, 2, 3, 4 ,5]

console.log(numeros[0], numeros[4])

console.log("\n")

//Ex 03
let cores = ['vermelho', 'verde', 'azul']

for (let i = 0; i <= 2; i++)
console.log(cores[i])

console.log("\n")

//Ex 01 ---------ESTRUTURAS DE DECISÃO-------
let idade = 15

if(idade < 18){
    console.log('\nVocê é menor de idade')
    
} else {
    console.log('Você é maior de idade')
}

console.log("\n")

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
    
    console.log("\n")

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

console.log("\n")

//Ex 01 --------LAÇOS DE REPETIÇÃO----------
for(let i = 0; i <= 10; i++)
    console.log(i)
    
    console.log("\n")
    
//Ex 02
let contador = 1

while(contador <= 5){
    console.log(contador)
    contador++
}

console.log("\n")

//Ex 03
let numero = 0

do {
    console.log(numero)
    numero++
} while(numero <= 3)

console.log("\n")

//Ex 01 -------COMBINANDO CONCEITOS-------
let valores = [10, 20, 30, 40, 50], soma = 0

for(let i = 0; i < 5; i++)
soma += valores[i]
console.log(soma)

console.log("\n")

//Ex 02
let num = [56, 2, 76]
let maiorNumero = num[0]

for(let i = 1; i <= 3; i++){
    if(num[i] > maiorNumero)
    maiorNumero = num[i]
}
console.log(maiorNumero)

console.log("\n")

//Ex 03
let nu = [2,35,5]
let menorNumero = nu[0]

for(let i = 0; i <= 3; i++){
    if(nu[i] < menorNumero)
    menorNumero = nu[i]
}
console.log(menorNumero)

console.log("\n")

//Ex 04
let fatorial = 4
let resultado = 1

for(let i = 1; i <= fatorial; i++){
    resultado = resultado * i
}
 console.log(resultado)
 
 console.log("\n")
 
 //Ex 05
 let nm = [1, 2, 3, 4, 5, 6, 7, 8 ,9 , 10]
 
 for(let i = 0; i <= nm.lenght; i++){
     if(nm[i] % 2==0){
         console.log("par" + nm)
     } else {
         console.log("impar" + nm)
     }
 }
 
 let texto = 'masqueico'
 
 let contado = 0
 
 for(let i = 0; i < texto.lenght; i++){
     if(texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u'){
     }
 }
console.log(contado + 'é o número de vogáis')
