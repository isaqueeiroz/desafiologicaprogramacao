class Heroi {  
    constructor(nome, idade, tipo) {  
        this.nome = nome;  
        this.idade = idade;  
        this.tipo = tipo;  
    }  

    atacar() {  
        let ataque;  
        switch(this.tipo) {  
            case "mago":  
                ataque = "usou magia";  
                break;  
            case "guerreiro":  
                ataque = "usou espada";  
                break;  
            case "monge":  
                ataque = "usou artes marciais";  
                break;  
            case "ninja":  
                ataque = "usou shuriken";  
                break;  
            default:  
                ataque = "usou um ataque desconhecido";  
        }  

        return `o ${this.tipo} atacou usando ${ataque}`;  
    }  
}  

// Exemplo de uso  
const herois = [  
    new Heroi("Gandalf", 300, "mago"),  
    new Heroi("Conan", 35, "guerreiro"),  
    new Heroi("Tigro", 29, "monge"),  
    new Heroi("Shinobi", 25, "ninja")  
];  

// Armazenar mensagens de ataque  
let mensagens = [];  

// Chamar o método atacar e armazenar mensagens  
herois.forEach(heroi => {  
    mensagens.push(heroi.atacar());  
});  

// Exibir todas as mensagens  
mensagens.forEach(mensagem => {  
    console.log(mensagem);  
});