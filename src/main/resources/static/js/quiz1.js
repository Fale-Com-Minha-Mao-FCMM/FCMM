let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
//let imgQuestao = document.querySelector('.imagemDoQuiz img')  // ADICIONE
let videoQuestao = document.querySelector('.videoDoQuiz video'); // ADICIONE
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    //imagem       : '../img/quiz/0.jpeg',  // Adicionar imagem
    video: '../videos/quiz/0.mp4', // Coloque o URL do vídeo
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    //imagem       : '../img/quiz/1.png',  // Colocar vídeo
    video: '../img/quiz/modulo02licao01.mp4', // Coloque o URL do vídeo
    pergunta     : "Assista ao vídeo e assinale a alternativa em que o sinal de saudade é realizado.",
    alternativaA : "Alternativa A: Amor",
    alternativaB : "Alternativa B: Saudade",
    alternativaC : "Alternativa C: Tristeza",
    alternativaD : "Alternativa D: Medo",
    correta      : "Alternativa B: Saudade",
}
const q2 = {
    numQuestao   : 2,
    //imagem       : '../../img/quiz/2.png',  // Colocar vídeo
    video: '../img/quiz/modulo02licao02.mp4', // Coloque o URL do vídeo
    pergunta     : "Assista ao vídeo e assinale a alternativa em que o sinal de esperança é realizado.",
    alternativaA : "Alternativa A: Saudade",
    alternativaB : "Alternativa B: Medo",
    alternativaC : "Alternativa C: Esperança",
    alternativaD : "Alternativa D: Dor",
    correta      : "Alternativa C: Esperança",
}
const q3 = {
    numQuestao   : 3,
    //imagem       : '../../img/quiz/3.png',  // Colocar vídeo
    video: '../img/quiz/modulo02licao03.mp4', // Coloque o URL do vídeo
    pergunta     : "Assista ao vídeo e assinale a alternativa em que os sinais de felicidade, alegria, sono e dor são realizados.",
    alternativaA : "Alternativa A: Felicidade, sono, medo e dor",
    alternativaB : "Alternativa B: Alegria, calor, raiva e medo",
    alternativaC : "Alternativa C: Alegria, amor, ódio e fome",
    alternativaD : "Alternativa D: Felicidade, alegria, sono e dor",
    correta      : "Alternativa D: Felicidade, alegria, sono e dor",
}
const q4 = {
    numQuestao   : 4,
    //imagem       : '../../img/quiz/4.png',  // Colocar vídeo
    video: '../img/quiz/modulo02licao04.mp4', // Coloque o URL do vídeo
    pergunta     : "Assista ao vídeo e assinale a alternativa em que o sinal é realizado com a expressão facial correta:",
    alternativaA : "Alternativa A: Sinal: irritado/Expressão: irritado",
    alternativaB : "Alternativa B: Sinal: cansaço/Expressão: fome",
    alternativaC : "Alternativa C: Sinal: frio/Expressão: fome",
    alternativaD : "Alternativa D: Sinal: paixão/Expressão: tristeza",
    correta      : "Alternativa A: Sinal: irritado/Expressão: irritado",
}
const q5 = {
    numQuestao   : 5,
    //imagem       : '../../img/quiz/5.png',  // Colocar vídeo
    video: '../img/quiz/modulo02licao05.mp4', // Coloque o URL do vídeo
    pergunta     : "Assista ao vídeo e assinale a alternativa em que o sinal é realizado com a expressão facial correta:",
    alternativaA : "Alternativa A: Sinal: triste/Expressão: alegre",
    alternativaB : "Alternativa B: Sinal: feliz/Expressão: triste",
    alternativaC : "Alternativa C: Sinal: sono/Expressão: feliz",
    alternativaD : "Alternativa D: Sinal: dor/Expressão: dor",
    correta      : "Alternativa D: Sinal: dor/Expressão: dor",
}
const q6 = {
    numQuestao   : 6,
    //imagem       : '../../img/quiz/6.png',  // Imagem com saudação de oi e boa noite
    video: '../img/quiz/modulo02licao06.mp4', // Coloque o URL do vídeo
    pergunta     : "Assista ao vídeo e assinale a alternativa em que o sinal de mãe é realizado.",
    alternativaA : "Alternativa A: Pai",
    alternativaB : "Alternativa B: Mãe",
    alternativaC : "Alternativa C: Filho",
    alternativaD : "Alternativa D: Avó",
    correta      : "Alternativa B: Mãe",
}
const q7 = {
    numQuestao   : 7,
    //imagem       : '../../img/quiz/7.png',  // Imagem perguntando qual o seu nome
    video: '../img/quiz/modulo02licao07.mp4', // Coloque o URL do vídeo
    pergunta     : "Assista ao vídeo e assinale a alternativa em que o sinal de pai é realizado",
    alternativaA : "Alternativa A: Avô",
    alternativaB : "Alternativa B: Filho",
    alternativaC : "Alternativa C: Pai",
    alternativaD : "Alternativa D: Mãe",
    correta      : "Alternativa C: Pai",
}
const q8 = {
    numQuestao   : 8,
    //imagem       : '../../img/quiz/8.png',  // Imagens com números: 1,3,5,7 e 9
    video: '../img/quiz/modulo02licao08.mp4', // Coloque o URL do vídeo
    pergunta     : "Assista ao vídeo e assinale a alternativa em que o sinal de filha é realizado.",
    alternativaA : "Alternativa A: Vovó",
    alternativaB : "Alternativa B: Mãe",
    alternativaC : "Alternativa C: Neta",
    alternativaD : "Alternativa D: Filha",
    correta      : "Alternativa D: Filha",
}
const q9 = {
    numQuestao   : 9,
    //imagem       : '../../img/quiz/9.png',  // Imagem com numerais formando 2002
    video: '../img/quiz/modulo02licao09.mp4', // Coloque o URL do vídeo
    pergunta     : "Assista ao vídeo e assinale a alternativa em que o sinal de neta é realizado.",
    alternativaA : "Alternativa A: Mulher",
    alternativaB : "Alternativa B: Neta",
    alternativaC : "Alternativa C: Neto",
    alternativaD : "Alternativa D: Mãe",
    correta      : "Alternativa B: Neta",
}
const q10 = {
    numQuestao   : 10,
    //imagem       : '../../img/quiz/10.png',  // Imagem com os números de 1 a 10
    video: '../img/quiz/modulo02licao10 .mp4', // Coloque o URL do vídeo
    pergunta     : "Assista ao vídeo e assinale a alternativa em que o nome Vânia é soletrado.",
    alternativaA : "Alternativa A: Vanessa",
    alternativaB : "Alternativa B: Vânia",
    alternativaC : "Alternativa C: Vander",
    alternativaD : "Alternativa D: Verônica",
    correta      : "Alternativa B: Vânia",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
//imgQuestao.setAttribute('src', 'images/'+q1.imagem)  // ADICIONE
videoQuestao.setAttribute('src', q1.video); // ADICIONE
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    //imgQuestao.setAttribute('src', 'images/'+questoes[nQuestao].imagem) // ADICIONE
    videoQuestao.setAttribute('src', questoes[nQuestao].video); // ADICIONE
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        /*
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'*/
    }, 8000)
}