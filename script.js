const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Voce acredita que a inteligência artificial pode tornar tarefas do dia a dia mais fáceis e eficientes?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "Voce concordou que a IA pode te ajudar no dia a dia "
            },
            {
                texto: "não",
                afirmacao: "voce não concordou que a IA pode ajudar no dia dia"
            }
        ]
    },
    {
        enunciado: "A inteligência artificial pode acabar com os empregos?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "     "
            },
            {
                texto: "não",
                afirmacao: "     "
            }
        ]
    },
    {
        enunciado: "Você se preocupa com questões ética relaciondas ao uso da inteligência artificial em diferentes aspectos da vida cotidiana?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "         "
            },
            {
                texto: "não",
                afirmacao: "            "
            }
        ]
    },

    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();