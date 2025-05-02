const alteracor = document.getElementById('escolhe-tema');

function aplicarTemaAtual() {
    const tema = localStorage.getItem('tema');
    if (tema === 'claro') {
        document.body.classList.add('claro');
    } else {
        document.body.classList.remove('claro');
    }
}


aplicarTemaAtual();

alteracor.addEventListener('click', function () {
    document.body.classList.toggle('claro');


    if (document.body.classList.contains('claro')) {
        localStorage.setItem('tema', 'claro');
    } else {
        localStorage.setItem('tema', 'escuro');
    }
});
