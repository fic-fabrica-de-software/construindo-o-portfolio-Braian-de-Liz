const quemario = document.querySelector('.QUE-MÁRIO');
const tubo = document.querySelector('.tubo');

let loop;


function pulo() {
    quemario.classList.remove('pulo');
    void quemario.offsetWidth; 
    quemario.classList.add('pulo');
}


function iniciarLoop() {
    console.log("Iniciando loop...");

    loop = setInterval(() => {
        const posicaoTubo = tubo.offsetLeft;
        const posicaoMario = +window.getComputedStyle(quemario).bottom.replace('px', '');

        if (posicaoTubo <= 120 && posicaoTubo > 0 && posicaoMario < 80) {

            tubo.style.animation = 'none';
            tubo.style.left = `${posicaoTubo}px`;

            quemario.style.animation = 'none';
            quemario.style.bottom = `${posicaoMario}px`;
            quemario.src = '../ASSETS/imagens/mario_morre.png';
            quemario.style.width = '75px';

            clearInterval(loop);

            setTimeout(reiniciarJogo, 1000);
        }
    }, 10);
}


function reiniciarJogo() {
    console.log("Reiniciando o jogo...");

    tubo.style.animation = 'none';
    tubo.offsetWidth; 
    tubo.style.animation = 'animacao-tubo 2s infinite linear';
    tubo.style.left = "";

    quemario.style.animation = 'none';
    quemario.offsetWidth;
    quemario.style.bottom = "0px";


    quemario.src = '../ASSETS/imagens/mario_atras_armario.gif';
    quemario.style.width = ''; 

    quemario.onload = () => {
        iniciarLoop();
    };
}


document.addEventListener('keydown', pulo);


iniciarLoop();