function atualizarHoraBrasilia() {
    const dataAtual = new Date();
    const hora = dataAtual.getHours().toString().padStart(2, '0');
    const minuto = dataAtual.getMinutes().toString().padStart(2, '0');
  
    document.getElementById('horaBrasilia').textContent = `Horário de Brasília: ${hora}:${minuto}`;
  }
  
  // Atualizar a hora a cada minuto
  atualizarHoraBrasilia();
  setInterval(atualizarHoraBrasilia, 60000); // 60.000 milissegundos = 1 minuto
  