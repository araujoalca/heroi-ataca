/* Desafio Curso DIO: Escrevendo as classes de um Jogo.

O Que pode ser utilizado
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )


além disso, deve ter um método chamado 'atacar' que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}"
- onde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

- se mago -> no ataque exibir (usou magia)
- se guerreiro -> no ataque exibir (usou espada)
- se monge -> no ataque exibir (usou artes marciais)
- se ninja -> no ataque exibir (usou shuriken)

Gere como SAÍDA a seguinte mensagem:
"o {tipo} atacou usando {ataque}"
  ex:   mago atacou usando magia
        guerreiro atacou usando espada
*/



////////////////////////////////////////////////////////////////
///////  CRIANDO A CLASSE 'Heroi' E O MÉTODO 'atacar()' ///////
//////////////////////////////////////////////////////////////
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    };

    atacar() {
        let armaEspecial = '';

        switch (this.tipo) {
            case "mago":
                armaEspecial = 'magia';
                break;
            case "guerreiro":
                armaEspecial = 'espada';
                break;
            case "monge":
                armaEspecial = 'artes marciais';
                break;
            case "ninja":
                armaEspecial = 'shuriken';
                break;
            default:
                armaEspecial = 'arma desconhecida';
        }

        return `o ${this.tipo} atacou usando ${armaEspecial}.`;
    }
}





/////////////////////////////////////////////////////////
//////////////////  FUNÇÃO PRINCIPAL  //////////////////
///////////////////////////////////////////////////////
function main() {

    // criando os Heróis:
    let herois = [];
    herois.push(new Heroi("Dagóia", 65, "mago"));
    herois.push(new Heroi("Xisti", 32, "guereiro"));
    herois.push(new Heroi("Nenfis", 91, "monge"));
    herois.push(new Heroi("Hustin", 17, "ninja"));

    
    // Saída
    console.log('\n---------------------------------------------------------\n');
    for (const heroi of herois) {
        console.log(heroi.atacar());
    }
    console.log('\n---------------------------------------------------------\n');
}

// Executar a função principal do programa
main();