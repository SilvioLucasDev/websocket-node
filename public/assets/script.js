window.onload = () => {
  getRanking();
}

async function getRanking() {
  await fetch('http://localhost:8080/v1/api/students/rankings', { method: 'GET' });
}

const socket = io('http://localhost:3000');

socket.on('podium', (data) => {
  updatePodium(data.rankStudents);
  updateSchoolRanking(data.rankStudentsBySchool);
});

function updatePodium(rankStudents) {
  podium = rankStudents.map(student => student.name)
  setRanking('podium', podium);
}

let schoolData = {}
function updateSchoolRanking(rankStudentsBySchool) {
  const schoolsRankings = {};
  for (const school in rankStudentsBySchool) {
    schoolsRankings[school] = rankStudentsBySchool[school].map(student => student.name);
  }
  schoolData = {
    'data-button': schoolsRankings['Dados'],
    'tech-button': schoolsRankings['Tecnologia'],
    'product-button': schoolsRankings['Produto']
  };
  const activeButton = document.querySelector('.school-button.active');
  if (activeButton) {
    const buttonId = activeButton.id;
    const ranking = schoolData[buttonId];
    if (ranking) {
      showSchoolRanking(buttonId, ranking);
    }
  }
}

function setRanking(elementId, ranking) {
  const element = document.getElementById(elementId);
  element.innerHTML = ranking.map((student) => `<li>${student}</li>`).join('');
}

function showSchoolRanking(buttonId) {
  const ranking = schoolData[buttonId];
  if (ranking) {
    setRanking('school-ranking', ranking);
    switch (buttonId) {
      case 'data-button':
        schoolName = 'Dados'
        break;
      case 'tech-button':
        schoolName = 'Tecnologia'
        break;
      case 'product-button':
        schoolName = 'Produtos'
        break;
      default:
        schoolName = 'Escolas'
    }
    document.getElementById('school-name').innerText = schoolName;
    document.getElementById('top-10').style.display = 'block';
  }
}

document.querySelectorAll('.school-button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.school-button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const buttonId = button.id;
    const ranking = schoolData[buttonId];
    if (ranking) showSchoolRanking(buttonId, ranking);
  });
});

document.getElementById('data-button').addEventListener('click', () => showSchoolRanking('data-button'));
document.getElementById('tech-button').addEventListener('click', () => showSchoolRanking('tech-button'));
document.getElementById('product-button').addEventListener('click', () => showSchoolRanking('product-button'));
