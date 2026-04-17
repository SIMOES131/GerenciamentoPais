// Função para download do Projeto Político Pedagógico
function downloadPPP(event) {
  event.preventDefault();

  // Simulação - Substitua pela URL real do seu PDF
  const pdfURL = "documentos/ppp-cebn-2026.pdf";

  // Criar link temporário para download
  const link = document.createElement("a");
  link.href = pdfURL;
  link.download = "PPP_CEBN_2026.pdf"; // Nome do arquivo ao baixar
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Função para download do Plano de Ação da Equipe Gestora
function downloadPlanoAcao(event) {
  event.preventDefault();

  // Simulação - Substitua pela URL real do seu PDF
  const pdfURL = "documentos/plano-acao-gestao-cebn-2026.pdf";

  // Criar link temporário para download
  const link = document.createElement("a");
  link.href = pdfURL;
  link.download = "Plano_Acao_Gestao_CEBN_2026.pdf"; // Nome do arquivo ao baixar
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
