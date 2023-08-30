// Simulação de dados para o exemplo
const dadosRanking = ['Aluno A', 'Aluno B', 'Aluno C'];
const tecnologiaRanking = ['Aluno D', 'Aluno E', 'Aluno F'];
const produtoRanking = ['Aluno G', 'Aluno H', 'Aluno I'];
const podium = ['Aluno A', 'Aluno no Meio', 'Aluno I'];

// Mapeamento de botões para dados de escola
const schoolData = {
  'dados-button': dadosRanking,
  'tecnologia-button': tecnologiaRanking,
  'produto-button': produtoRanking
};

// Função para atualizar os rankings na tela
function updateRankings(ranking) {
  updateSchoolRanking('podium', ranking);
}

// Função auxiliar para atualizar um ranking
function updateSchoolRanking(elementId, ranking) {
  const element = document.getElementById(elementId);
  element.innerHTML = ranking.map((student) => `<li>${student}</li>`).join('');
}

// Função para exibir o ranking da escola ao clicar no botão
function showSchoolRanking(buttonId) {
  const ranking = schoolData[buttonId];
  if (ranking) {
    updateSchoolRanking('school-ranking', ranking);
    document.getElementById('top-10').style.display = 'block';
  }
}

// Configurar os eventos de clique para os botões
document.getElementById('dados-button').addEventListener('click', () => showSchoolRanking('dados-button'));
document.getElementById('tecnologia-button').addEventListener('click', () => showSchoolRanking('tecnologia-button'));
document.getElementById('produto-button').addEventListener('click', () => showSchoolRanking('produto-button'));

// Chamada inicial para exibir o pódio geral
updateRankings(podium);
