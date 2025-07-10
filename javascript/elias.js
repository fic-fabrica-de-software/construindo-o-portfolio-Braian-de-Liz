const quemario = document.querySelector('.QUE-MÁRIO');
const tubo = document.querySelector('.tubo');

let loop;
let isAlive = true;

function pulo() {
    if (!isAlive) return;
    quemario.classList.remove('pulo');
    void quemario.offsetWidth; 
    quemario.classList.add('pulo');
}

function iniciarLoop() {


    loop = setInterval(() => {
        const posicaoTubo = tubo.offsetLeft;
        const posicaoMario = +window.getComputedStyle(quemario).bottom.replace('px', '');

        if (posicaoTubo <= 120 && posicaoTubo > 0 && posicaoMario < 80) {

            tubo.style.animation = 'none';
            tubo.style.left = `${posicaoTubo}px`;

            quemario.src = '../ASSETS/imagens/mario_morre.png';
            quemario.style.width = '75px';
            quemario.style.animation = 'none';
            quemario.style.bottom = `${posicaoMario}px`;

            clearInterval(loop);
            mexe = false;

            setTimeout(reiniciarJogo, 1200);
        }
    }, 10);
}

function reiniciarJogo() {

    tubo.style.animation = 'none';
    tubo.offsetWidth;
    tubo.style.animation = 'animacao-tubo 2s infinite linear';
    tubo.style.left = '';

    quemario.src = '../ASSETS/imagens/mario_atras_armario.gif?t=' + new Date().getTime();
    quemario.style.width = '100px';
    quemario.classList.remove('pulo');
    quemario.style.animation = '';
    quemario.style.bottom = '0px';

    mexe = true;
    setTimeout(() => {
        iniciarLoop();
    }, 100);
}

document.addEventListener('keydown', pulo);

iniciarLoop();
