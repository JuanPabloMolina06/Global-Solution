    const questoes = [
    {
        questao: 'Qual é o principal problema que o FlowSafe busca resolver?',
        respostas: [
            { id: 1, text: 'Falta de energia elétrica durante enchentes', correct: false},
            { id: 2, text: 'Falta de comunicação entre autoridades', correct: false},
            { id: 3, text: 'Falta de informações seguras e em tempo real sobre abrigos', correct: true},
            { id: 4, text: 'Poluição causada por enchentes', correct: false}
        ]
    },
    {
        questao: 'Qual jogo foi criado com Python e Pygame para conscientizar sobre áreas de risco?',
        respostas: [
            { id: 1, text: 'Jogo da Memória', correct: false},
            { id: 2, text: 'Campo Minado', correct: true},
            { id: 3, text: 'Tetris', correct: false},
            { id: 4, text: 'Pong', correct: false}
        ]
    },
    {
        questao: 'Qual tecnologia física é usada para monitorar bueiros e emitir alertas?',
        respostas: [
            { id: 1, text: 'Impressora 3D', correct: false},
            { id: 2, text: 'Raspberry Pi com display', correct: false},
            { id: 3, text: 'Arduino com sensores, LEDs e buzzer', correct: true},
            { id: 4, text: 'Drone de inspeção', correct: false}
        ]
    },
    {
        questao: 'Qual é o principal objetivo da plataforma durante emergências?',
        respostas: [
            { id: 1, text: 'Fornecer alertas e orientações em tempo real', correct: true},
            { id: 2, text: 'Entretenimento educativo', correct: false},
            { id: 3, text: 'Coleta de doações online', correct: false},
            { id: 4, text: 'Criar jogos sobre enchentes', correct: false}
        ]
    },
    {
        questao: 'Como o FlowSafe contribui para a mobilidade em emergências?',
        respostas: [
            { id: 1, text: 'Evitando o uso de transporte público', correct: false},
            { id: 2, text: 'Informando sobre bloqueios policiais', correct: false},
            { id: 3, text: 'Enviando motoristas para resgates', correct: false},
            { id: 4, text: 'Indicando rotas seguras e abrigos atualizados', correct: true},
        ]
    },
    {
        questao: 'Quem são os principais beneficiados pela plataforma?',
        respostas: [
            { id: 1, text: 'Estudantes de tecnologia', correct: false},
            { id: 2, text: 'Trabalhadores do setor privado', correct: false},
            { id: 3, text: 'Moradores de áreas de risco, voluntários e ONGs', correct: true},
            { id: 4, text: 'Desenvolvedores de jogos', correct: false}
        ]
    },
    {
        questao: 'Como a plataforma reduz o número de pessoas desabrigadas?',
        respostas: [
            { id: 1, text: 'Distribuindo barracas infláveis', correct: false},
            { id: 2, text: 'Direcionando rapidamente desabrigados a locais seguros', correct: true},
            { id: 3, text: 'Enviando notificações para que todos fiquem em casa', correct: false},
            { id: 4, text: 'Oferecendo cupons de transporte', correct: false}
        ]
    },
    {
        questao: 'Quais tecnologias são usadas para desenvolver a interface do FlowSafe?',
        respostas: [
            { id: 1, text: 'JavaScript e React Native', correct: false},
            { id: 2, text: 'Bootstrap e PHP', correct: false},
            { id: 3, text: 'HTML e CSS para landing page com blog e gráficos', correct: true},
            { id: 4, text: 'Python e Flask', correct: false}
        ]
    },
    {
        questao: 'Qual é um dos benefícios diretos oferecidos pela plataforma?',
        respostas: [
            { id: 1, text: 'Alerta de queda de temperatura', correct: false},
            { id: 2, text: 'Status em tempo real dos abrigos', correct: true},
            { id: 3, text: 'Monitoramento do clima para turistas', correct: false},
            { id: 4, text: 'Compartilhamento de fotos da enchente', correct: false}
        ]
    },
    {
        questao: 'Como o FlowSafe ajuda a otimizar a ocupação dos abrigos?',
        respostas: [
            { id: 1, text: 'Organizando dados em tempo real para melhor distribuição de pessoas', correct: true},
            { id: 2, text: 'Distribuindo senha digital por SMS', correct: false},
            { id: 3, text: 'Informando número de voluntários', correct: false},
            { id: 4, text: 'Bloqueando entradas após atingir 50% de ocupação', correct: false}
        ]
    },
]

document.addEventListener("DOMContentLoaded", function () {
    const elementoQuestao = document.getElementById('questao')
    const botaoResposta = document.getElementById('resposta-btn')
    const proximoBtn = document.getElementById('proximo-btn')

    let questaoAtualIndex = 0
    let resultado = 0

    function quizStart() {
        questaoAtualIndex = 0
        resultado = 0
        proximoBtn.innerHTML = "Próxima"
        mostrarQuestao()
    }

    function resetState() {
        proximoBtn.style.display = 'none'
        while (botaoResposta.firstChild) {
            botaoResposta.removeChild(botaoResposta.firstChild)
        }
    }

    function mostrarQuestao() {
        resetState()
        let questaoAtual = questoes[questaoAtualIndex]
        let questaoN = questaoAtualIndex + 1
        elementoQuestao.innerHTML = questaoN + '. ' + questaoAtual.questao
        
        questaoAtual.respostas.forEach((resposta) =>{
            const button = document.createElement('button')
            button.innerText = resposta.text
            button.dataset.id = resposta.id
            button.classList.add('btn-quiz')
            button.addEventListener('click', respostaSelecionada)
            botaoResposta.appendChild(button)
        })
    }

    function respostaSelecionada(e) {
        const respostas = questoes[questaoAtualIndex].respostas
        const respostaCorreta = respostas.filter((resposta) => resposta.correct == true)[0]

        const btnSelecionado = e.target
        const isCorrect = btnSelecionado.dataset.id == respostaCorreta.id
        if (isCorrect) {
            btnSelecionado.classList.add('correta')
            resultado++;
        } else {
            btnSelecionado.classList.add('incorreta')
        }
        Array.from(botaoResposta.children).forEach((button) => {
            button.disabled = true
        })
        proximoBtn.style.display = 'block'
    }

    function mostrarResultado() {
        resetState()
        elementoQuestao.innerHTML = `Você acertou ${resultado} de ${questoes.length}`
        proximoBtn.innerHTML = 'Jogar Novamente'
        proximoBtn.style.display = 'block'
    }

    function handleProximoButton() {
        questaoAtualIndex++;
        if (questaoAtualIndex < questoes.length) {
            mostrarQuestao()
        } else {
            mostrarResultado()
        }
    }

    proximoBtn.addEventListener('click', () => {
        if (questaoAtualIndex < questoes.length) {
            handleProximoButton()
        } else {
            quizStart()
        }
    })

    quizStart()
})

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')
    const username = document.getElementById('username')
    const email = document.getElementById('email')

    form.addEventListener('submit', e => {
        e.preventDefault()
        validarInputs()
    })

    function setError(element, message) {
        const inputControl = element.parentElement
        const errorDisplay = inputControl.querySelector('.error')
        errorDisplay.innerText = message
    }

    function setSucces(element) {
        const inputControl = element.parentElement
        const errorDisplay = inputControl.querySelector('.error')
        errorDisplay.innerText = ''
    }

    const validarInputs = () => {
        const valorUsername = username.value.trim()
        const valorEmail = email.value.trim()

        if (valorUsername === '') {
            setError(username, 'Campo obrigatório')
        } else {
            setSucces(username)
        }

        if (valorEmail === '') {
            setError(email, 'Campo obrigatório')
        } else {
            setSucces(email)
        }
    }
  document.getElementById('download').addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'jogo.rar';
  link.download  = 'jogo.rar';
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
});

    let sun = document.getElementById('light-mode');
    let moon = document.getElementById('dark-mode');
    let body = document.querySelector('body');
    let purple = document.getElementById('purple-mode');

    sun.addEventListener('click', () => {
        body.classList.remove('purple-mode');
        body.classList.add('light-mode');
    });

    moon.addEventListener('click', () => {
        body.classList.remove('light-mode');
        body.classList.remove('purple-mode');
    });

    purple.addEventListener('click', () => {
        body.classList.remove('light-mode');
        body.classList.add('purple-mode');
    });

    function MenuHamburguer() {
        const menu = document.querySelector('.mobile-menu')
        const navegacao = document.querySelector('.navegacao')
        const navLinks = document.querySelectorAll('.navegacao a')

        const activeClass = 'active'

        function toggleMenu() {
            navegacao.classList.toggle(activeClass)
        }

        function closeMenu() {
            navegacao.classList.remove(activeClass)
        }

        function addClickEvents() {
            menu.addEventListener('click', toggleMenu)

            navLinks.forEach(link => {
                link.addEventListener('click', closeMenu)
            })
        }

        function init() {
            if (menu && navegacao) {
                addClickEvents()
            }
        }
    init()
}

MenuHamburguer()
})

window.onload = () => {
  let slideIndex = 0
  const slides = document.querySelectorAll('.beneficios')

  function mostrarSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'))
    slides[index].classList.add('active')
  }

  function mudarSlide(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length
    mostrarSlide(slideIndex)
  }

  window.changeSlide = mudarSlide
  mostrarSlide(slideIndex)
}