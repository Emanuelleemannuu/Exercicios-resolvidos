// 1. Crie um código JavaScript que utilize pelo menos três funções predefinidas diferentes para realizar uma tarefa específica (por exemplo, calcular a média de três números).

// function calcularMedia(){
//     let nota1 = parseFloat(prompt("Digite a primeira nota:"));
//     let nota2 = parseFloat(prompt("Digite a segunda nota:"));
//     let nota3 = parseFloat(prompt("Digite a terceira nota:"));

//     let media = (nota1 + nota2 + nota3)/3

//     console.log(`Média: ${media.toFixed(1)}`)
// }

// calcularMedia()

// 2. Escreva uma função simples que exiba uma mensagem na tela e chame-a para ver o resultado.

// function exibeMensagem(){
//     console.log('Hi, peoples!')
// }

// exibeMensagem()


// 3. Crie uma função que receba três números como parâmetros, calcula a média deles e exiba o resultado.

// function calcularMedia(n1,n2,n3){

//     let media = (n1 + n2 + n3)/3

//     console.log(`Média: ${media.toFixed(1)}`)
// }

// calcularMedia(7,8,9)


// 4. Escreva uma função que receba um número como parâmetro e retorne o quadrado desse número.

// function quadradoDeNumero(numero){
//     return numero * numero
// }

// quadradoDeNumero(10)


// 5. Declare uma variável global e uma local dentro de uma função. Tente acessá-las de diferentes partes do código para entender o escopo.

// let global = 'Variável global'

// function exibeMensagem(){
//     let local = 'Variável local'
//     console.log(global)
//     console.log(local)
// }

// exibeMensagem()
// console.log(global)
// console.log(local)


// 6. Crie uma função que declara uma variável dentro de um bloco de código (por exemplo, um if) e tente acessá-la fora desse bloco para entender o escopo local do bloco.

// function variavel(numero){
//     if (numero > 10){
//         let exibir = 'Maior que 10'
//         console.log(exibir)
//     }
// }

// variavel(11)
// console.log(exibir)


// 6. Reescreva todas as funções anteriores usando a estrutura de arrow function.

    // const media = () => {
    //     let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    //     let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    //     let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    
    //     let media = (nota1 + nota2 + nota3)/3
    
    //     console.log(`Média: ${media.toFixed(1)}`)
    // }
    
    // media()

    // const exibeMensagem = () => {
    //         console.log('Hi, peoples!')
    //     }
        
    //     exibeMensagem()
    

    // const calcularMedia = (n1,n2,n3) => {

    //     let media = (n1 + n2 + n3)/3
            
    //         console.log(`Média: ${media.toFixed(1)}`)
    //     }
            
    //     calcularMedia(7,8,9)

    // const quadradoDeNumero = (numero) => {
    //     return numero * numero
    //     }
                
    //     console.log(quadradoDeNumero(10))

    // let global = 'Variável global'

    // const exibaMensagem = () => {
    //     let local = 'Variável local'
    //     console.log(global)
    //     console.log(local)
    // }
        
    //     exibaMensagem()
    //     console.log(global)
    //     console.log(local) 

    // const variavel = (numero) => {
    //     if (numero > 10){
    //         let exibir = 'Maior que 10'
    //             console.log(exibir)
    //     }
    // }
            
    //     variavel(11)
    //     console.log(exibir)
            

        

    

   

// 7. Usando funções, crie um programa que solicita dois números ao usuário, calcula sua média e exibe o resultado.

// const calcularMedia = () => {

//     const somarNumeros = (n1, n2) => {
//         return (n1 + n2)
//     }

//     let n1 = Number(prompt('Primeiro número: '))
//     let n2 = Number(prompt('Segundo número: '))

//     let soma = somarNumeros(n1, n2)
//     let media = soma / 2

//     console.log(`A média é: ${media.toFixed(1)}`)

// }

// calcularMedia()




// 8. Use funções para implementar um jogo de adivinhação onde o computador gera um número aleatório entre 1 e 100 e o usuário tem que adivinhar qual é em até 10 tentativas. Verifique se cada palpite do usuário está correto, menor ou maior que o número secreto. Exiba mensagens informando o resultado de cada tentativa e forneça pistas (menor/maior) para ajudar o usuário.

// const adivinharNumero = () => {

//     const numeroAleatorio = () => {
//         return Math.floor(Math.random() * 100) + 1
//     }
    
//     let tentativas = 10
//     let numeroSecreto = numeroAleatorio()
//     let acertou = false

    

// }

// 9. Crie uma calculadora que faça a adição, subtração, multiplicação ou divisão de dois números. Use funções separadas para cada operação e para exibir o resultado.

function soma(num1, num2){
    
}

// 10. Desenvolva um conversor de moeda que solicita ao usuário o valor em Real e converta-o para Dólar. Use funções para ler os dados de entrada, realizar a conversão e exibir o resultado.


// 11. Usando funções, escreva um programa que solicita ao usuário sua altura e peso e calcula o IMC. Em seguida, exibe o resultado e uma mensagem indicando se a pessoa está abaixo do peso, dentro do peso normal, com sobrepeso ou obesa.



