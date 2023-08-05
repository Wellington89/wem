function abrirAba(aba) {
    // Esconder todos os conteúdos das abas
    const conteudos = document.querySelectorAll(".conteudo");
    for (const conteudo of conteudos) {
      conteudo.style.display = "none";
    }
  
    // Mostrar o conteúdo da aba selecionada
    const conteudoAba = document.getElementById(aba);
    if (conteudoAba) {
      conteudoAba.style.display = "block";
    }
  }
  