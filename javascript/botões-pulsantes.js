window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.pagina-boton').forEach(botao => {
      botao.addEventListener('click', () => {
        botao.classList.add('clicado');
        setTimeout(() => botao.classList.remove('clicado'), 200);
      });
    });
  });