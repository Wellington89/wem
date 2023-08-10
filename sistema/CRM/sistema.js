function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

//-----------------------------------CALCULADORA DE ROI-----------------------------------//
function calcularROI() {
  const orcamento = parseFloat(document.getElementById("orcamento").value);
  const cpc = parseFloat(document.getElementById("cpc").value);
  const taxaConversao = parseFloat(
    document.getElementById("taxa-conversao").value
  );
  const ticketMedio = parseFloat(document.getElementById("ticket-medio").value);
  const taxaLeadVendas = parseFloat(
    document.getElementById("taxa-lead-vendas").value
  );

  const numeroCliques = orcamento / cpc;
  const numeroLeads = numeroCliques * (taxaConversao / 100);
  const custoPorLead = orcamento / numeroLeads;
  const receitaEsperada = numeroLeads * (taxaLeadVendas / 100) * ticketMedio;
  const lucroEsperado = receitaEsperada - orcamento;
  const roi = (lucroEsperado / orcamento) * 100;

  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = `
    Número de Cliques: ${numeroCliques.toFixed(0)}<br>
    Número de Leads: ${numeroLeads.toFixed(0)}<br>
    Custo por Lead: R$ ${custoPorLead.toFixed(2)}<br>
    Receita Esperada: R$ ${receitaEsperada.toFixed(2)}<br>
    Lucro Esperado: R$ ${lucroEsperado.toFixed(2)}<br>
    Retorno do Investimento em Anúncios: ${roi.toFixed(2)}%
  `;
}
function limparDados() {
  document.getElementById("orcamento").value = "";
  document.getElementById("cpc").value = "";
  document.getElementById("taxa-conversao").value = "";
  document.getElementById("ticket-medio").value = "";
  document.getElementById("taxa-lead-vendas").value = "";
  document.getElementById("resultado").innerHTML = "";
}










  //-----------------------------------CALCULADORA DE ROI-----------------------------------//
  
  
  
  
  

