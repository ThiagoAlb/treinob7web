let nome = "Thiago";
let idade = 33;
let anoNascimento = 2025 - idade;
let senhaDigitada = 12345;
let senhaCorreta = 1234;

console.log(`Olá, ${nome}`);
console.log(`Sua idade é: ${idade} anos. O ano que você nasceu foi ${anoNascimento}.`);
if (idade >= 18) {
    console.log(`Você é maior de idade.`)
} else {
    console.log(`Você é menor de idade.`)
};

//Verificar se um número é positivo ou negativo
let numero = 5;
if (numero >= 0) {
    console.log(`${numero} é positivo.`)
} else {
    console.log(`${numero} é negativo.`)
}

//Verificar se um número é par ou impar
if (numero % 2 === 0){
    console.log(`${numero} é par.`)
}else {
    console.log(`${numero} é impar`)
};

//verificar a senha
if (senhaCorreta === senhaDigitada) {
    console.log(`Acesso autorizado!`)
} else {
    console.log(`Acesso negado!`)
};

//Verificar se um número é divisível por 3 e por 5
let num = 15;
if (num % 3 === 0 && num % 5 === 0) {
    console.log(`${num} é divisível por 3 e por 5.`)
} else{
    console.log(`${num} não é divisível por 3 e por 5.`)
}; 

//Verificar se um ano é bissexto
let ano = 1993;
if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log(`${ano} é bissexto.`)
} else {
    console.log(`${ano} não é bissexto.`)
};

//Determinar o maior número de três:
let num1 = 12;
let num2 = 5;
let num3 = 8;

if (num1 > num2 && num1 > num3) {
    console.log(`${num1} é maior.`);
} else if (num2 > num3) {
    console.log(`${num2} é maior`);
} else {
    console.log(`${num3} é maior.`);
}

//Verificar se um caractere é vogal ou consoante
let letra = "e";

if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    console.log(`${letra} é uma vogal.`)
} else {
    console.log(`${letra} é uma consoante.`)
}

//Classificar nota do aluno
let nota = 8;
if (nota >= 9) {
    console.log('Excelente!');
} else if (nota >= 7 ) {
    console.log('Bom!');
} else if(nota >=5) {
    console.log('Aprovado!');
} else {
    console.log('Reprovado!');
}

//Condicional Ternaria
//Verificar se um número é positivo ou negativo
let number = -1;

let positOuNeg = (number >= 0) ? 'Positivo' : 'Negativo';
console.log(positOuNeg);

//Verificar se é maior de idade
let idadeDoUsuario = 17;

let conferirMaioridade = idadeDoUsuario >= 18 ? 'O usuário é de maior' : 'O usuário é de menor';
console.log(conferirMaioridade);

//Retornar se número é par ou ímpar
let numero1 = 3;

let conferirParOuImpar = numero1 % 2 === 0 ? 'É par!' : 'É impar!';
console.log(conferirParOuImpar);

//Verificar se uma senha está correta
let senhaUser = 147369;

let verificadorSenha = senhaUser === 148369 ? 'Acesso permitido!' : 'Acesso negado!';
console.log(verificadorSenha);

//Verificar se uma letra é vogal ou consoante
let letraEscolhida = 'v';
let vogalOuConsoante = letraEscolhida === 'a' || letraEscolhida === 'e' || letraEscolhida === 'i' || letraEscolhida === 'o' || letraEscolhida === 'u' ? 'Vogal!' : 'Consoante';
console.log(vogalOuConsoante);

//Calcular desconto com base no valor
let valorProduto = 150;
let descontoProduto = valorProduto >= 100 ? valorProduto * 0.1 : valorProduto * 0.05;
console.log(`O valor do desconto é de R$ ${descontoProduto}.`);

//Exercícios de Switch case
//Dia da semana
let diaDaSemana = 6;

switch (diaDaSemana) {
    case 1: 
        console.log('Domingo');
        break;
    case 2: 
        console.log('Segunda-feira');
        break;
    case 3: 
        console.log('Terça-feira');
        break;
    case 4: 
        console.log('Quarta-feira');
        break;
    case 5: 
        console.log('Quinta-feira');
        break;
    case 6: 
        console.log('Sexta-feira');
        break;
    case 7: 
        console.log('Sábado');
        break;
    default:
        console.log('Dia inválido.');
        break;
}

//Verificar tipo do veículo
let veiculo = 'carro';

switch (veiculo) {
    case 'moto': 
        console.log(`${veiculo} tem duas rodas.`);
    break;
    case 'carro': 
        console.log(`${veiculo} tem quatro rodas.`);
    break;
    case 'caminhão': 
        console.log(`${veiculo} tem 14 rodas.`);
        break;
    default: 
        console.log(`${veiculo} é um veiculo inexistente.`);
        break;
}

//Nível de acesso do usuário.
let user = 'convidado';

switch (user) {
    case 'convidado':
        console.log('Acesso limitado a funções básicas do sistema.');
        break;
    case 'usuario':
        console.log('Acesso a funções especiais do sistema.');
        break;
    case 'admin':
        console.log('Acesso total ao sistema.');
        break;
    default:
        console.log('Usuário inexistente. Tente novamente.');
        break;
}

//Operações matematicas básicas.
let a = 10;
let b = 3;
let operacao = '-';

switch (operacao) {
    case '+':
        console.log(`${a + b}`);
        break;
    case '-':
        console.log(`${a - b}`);
        break;
    case '*':
        console.log(`${a * b}`);
        break;
    case '/':
        console.log(`${a / b}`);
        break;
    default:
        console.log('Operação matemática inexistente.');
        break;
}

//Calcule a porcentagem entre dois numeros usando uma função.
function calcPorcent(x,y) {
    return ((y / x) * 100);
}
let x = 50;
let y = 10;
let pct = calcPorcent(50, 10);
console.log(`${pct}% de ${x} é ${y} `);

//Calcule o preço do imóvel.
/*
 m2 = 3000
 - Se tiver um quarto, o m2 é 1x
 - Se tiver dois quarto, o m2 é 1.2x
 - Se tiver três quarto, o m2 é 1.3x
 */

let metragem = 123;
let quartos = 3;
function calcularImovel(metragem, quartos) {
    let m2 = 3000;
    switch(quartos){
        case 1:
            return m2 * 1;
            break;
        case 2:
            return m2 * 1.2;
            break;
        case 3:
            return m2 * 1.3;
            break;
    }
};


let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa ${preco}.`);

//Exercícios de declaração de funções
function dizerOla() {
    return console.log('Olá, mundo!');
}

dizerOla();

function mostrarNome(){
    return console.log('Thiago Vasconcelos');
}
mostrarNome();

function mensagemBoasVindas() {
    return console.log('Bem-vindo ao nosso site.');
}
mensagemBoasVindas();

function mostrarDataAtual() {
    return console.log(`${new Date().toLocaleDateString()} -> data em padrão americano.`);
}
mostrarDataAtual();

function linhaSeparadora() {
    return console.log('------------------------------');
}
linhaSeparadora();

function saudarUsuario(nome) {
    return console.log(`Olá, ${nome}.`);
}
saudarUsuario('Thiago');

function soma(a, b) {
    return console.log(a + b);
}
soma(5,15);

function multiplicar(x, y) {
    console.log(`${x * y}`);
}
multiplicar(5, 15);

function mostrarIdade(nome, idade) {
    return console.log(`${nome} tem ${idade} anos.`);
}
mostrarIdade('Thiago', 33);

function converterParaReais(valorDolar, cotacao) {
    return console.log(`O valor em doláres foi R$ ${valorDolar} e a cotação está em R$ ${cotacao}. O valor em reais é igual a R$ ${valorDolar * cotacao}.`);
}

converterParaReais(10, 6.1);

function ehPar(numero){
    if(numero % 2 == 0) {
        return true
    } else {
        return false
    }
}
console.log(ehPar(2));

function classificarNota(nota) {
    if (nota >= 7) {
        return console.log('Aprovado.');
    } else {
        return console.log('Reprovado.');
    }
}
classificarNota(7);

function maioridade(idade) {
    if(idade >= 18) {
        return console.log('Maior de idade.');
    } else {
        return console.log('Menor de idade.');
    }
}

maioridade(17);

function verificarLogin(usuario, senha) {
    if(usuario === 'admin' && senha === 1234) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

verificarLogin('admin', 12345);

function avaliarTemperatura(temp) {
    if (temp > 30) {
        return console.log('Está quente.');
    } else if(temp < 18) {
        return console.log('Está frio.');
    } else {
        return console.log('Temperatura agradável.');
    }
}

avaliarTemperatura(26)


let produtos = [
    {nome: 'Camisa', preco: 19.90},
    {nome: 'Bermuda', preco: 59.90},
    {nome: 'Sapato', preco: 89.90},
    {nome: 'Oculos', preco: 59.90}
 ];
 
 let total = 0;
 for(let produto of produtos) {
    console.log(`Produto: ${produto.nome} - Preço: ${produto.preco}`);
    total = total + produto.preco;
 }
 console.log(`Total = ${total}`);


 function calcularPreco (preco, desconto) {
    return valorFinal = preco * (1- (desconto / 100));
     
 };

 let precoComDesconto = calcularPreco(100, 10);
 console.log(`Preço final: R$ ${precoComDesconto}`);
 
