let nome = 'Rian';
let sobrenome = 'Silveira';
let idade = 21;
let peso = 165;
let altura = 1.85;
let IMC;

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

IMC = calcularIMC(peso, altura);
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${IMC}`);