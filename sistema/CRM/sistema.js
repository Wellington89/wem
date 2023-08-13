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

function gerarPDF() {
  const doc = new jsPDF();
  const a4Width = doc.internal.pageSize.getWidth();
  doc.fromHTML($("#resultado").html(), 20, 0, {
    pagesplit: true,
    "width": (a4Width - 40) // for margin right
  });

  const options = {
    pagesplit: true,
    width: a4Width - 40 // margem direita
  };

  const orcamento = document.getElementById("orcamento").value;
  const cpc = document.getElementById("cpc").value;
  const taxaConversao = document.getElementById("taxa-conversao").value;
  const ticketMedio = document.getElementById("ticket-medio").value;
  const taxaLeadVendas = document.getElementById("taxa-lead-vendas").value;

  const content = `
    Orçamento Mensal: R$ ${orcamento}
    CPC Esperado: R$ ${cpc}
    Taxa de Conversão: ${taxaConversao}%
    Ticket Médio: R$ ${ticketMedio}
    Taxa de Lead para Vendas: ${taxaLeadVendas}%
  `;
  
  doc.fromHTML(content, 20, 0, options, function() {
    doc.save("MeuPDF.pdf");
  });
}
  //-----------------------------------CALCULADORA DE ROI-----------------------------------//
  
  //---------------------------------MÉTRICAS DE MARKETING---------------------------------//
  function calcularMetricas() {
    const visitas = parseInt(document.getElementById("visitas2").value);
    const leads = parseInt(document.getElementById("leads2").value);
    const clientes = parseInt(document.getElementById("clientes2").value);
    const receita = parseFloat(document.getElementById("receita2").value);

    const taxaConversao = (leads / visitas) * 100;
    const roi = ((receita - (clientes * 100)) / (clientes * 100)) * 100;

    const resultadoElement = document.getElementById("resultado2");
    resultadoElement.innerHTML = `
        <h2>Métricas Calculadas:</h2>
        <p>Taxa de Conversão: ${taxaConversao.toFixed(2)}%</p>
        <p>ROI: ${roi.toFixed(2)}%</p>
    `;
}

  //---------------------------------MÉTRICAS DE MARKETING---------------------------------//
  
  
  
//---------------------------------------FINANCEIRO---------------------------------------//
const calculaValorHora = () => {
  let ganharMes = document.getElementById("ganharMes").value;
  let qtHoras = document.getElementById("qtHoras").value;
  let qtDias = document.getElementById("qtDias").value;
  let qtFerias = document.getElementById("qtFerias").value;

  let valorHora =
    Math.round((ganharMes * 12) / (qtHoras * qtDias * 48 - qtFerias * 44)) + 3;

  document.getElementById("valorHora").innerText =
    "R$" + valorHora + ",00/hora";
  console.log(valorHora);
};

document.getElementById("btnGerar").addEventListener("click", calculaValorHora);

// Função para calcular o valor do projeto
function calcularValorProjeto() {
  var valorHora = parseFloat(document.getElementById("valorHora2").value);
  var horasEstimadas = parseFloat(
    document.getElementById("horasEstimadas2").value
  );

  if (isNaN(valorHora) || isNaN(horasEstimadas)) {
    document.getElementById("resultado2").innerHTML = "Digite valores válidos.";
    return;
  }

  var valorProjeto = valorHora * horasEstimadas;
  document.getElementById("resultado2").innerHTML =
    "Valor do Projeto: R$ " + valorProjeto.toFixed(2);
}

//---------------------------------------FINANCEIRO---------------------------------------//


