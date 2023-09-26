window.onload = () => {
  getRanking();
}

async function getRanking() {
  await fetch('http://localhost:8080/v1/api/students/rankings', { method: 'GET' });
}

const socket = io('http://localhost:3000');

socket.on('podium', (data) => {
  setPodium(data.rankStudents);
  updateSchoolRanking(data.rankStudentsBySchool);
});

function setPodium(rankStudents) {
  const rankElements = {
    1: { name: document.querySelector('#rank-one-name'), points: document.querySelector('#rank-one-points') },
    2: { name: document.querySelector('#rank-two-name'), points: document.querySelector('#rank-two-points') },
    3: { name: document.querySelector('#rank-three-name'), points: document.querySelector('#rank-three-points') },
  };

  for (let i = 1; i <= 3 && i <= rankStudents.length; i++) {
    rankElements[i].name.innerText = rankStudents[i - 1].name;
    rankElements[i].points.innerText = rankStudents[i - 1].points;
  }
}

let schoolData = {}
function updateSchoolRanking(rankStudentsBySchool) {
  const schoolsRankings = {};
  for (const school in rankStudentsBySchool) {
    schoolsRankings[school] = rankStudentsBySchool[school].map(student => ({
      name: student.name,
      points: student.points
    }));
  }
  schoolData = {
    'data-button': schoolsRankings['Dados'],
    'tech-button': schoolsRankings['Tecnologia'],
    'product-button': schoolsRankings['Produto']
  };
  const activeButton = document.querySelector('.button.active');
  if (activeButton) {
    const buttonId = activeButton.id;
    const ranking = schoolData[buttonId];
    if (ranking) {
      showSchoolRanking(buttonId, ranking);
    }
  }
}

document.getElementById('data-button').addEventListener('click', () => showSchoolRanking('data-button'));
document.getElementById('tech-button').addEventListener('click', () => showSchoolRanking('tech-button'));
document.getElementById('product-button').addEventListener('click', () => showSchoolRanking('product-button'));

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
    document.querySelector('.ranking-table-schools').style.display = 'block';
  }
}

function setRanking(elementId, ranking) {
  const element = document.getElementById(elementId);
  element.innerHTML = ranking.map((student, index) => `
    <div class="ranking-table-row">
      <div class="ranking-table-data">
        <div class="position">${index + 1}</div>
      </div>
      <div class="ranking-table-data">
        <span class="name">${student.name}</span>
      </div>
      <div class="ranking-table-data">
        <span class="points">${student.points}</span>
      </div>
    </div>
  `).join('');
}

document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const buttonId = button.id;
    const ranking = schoolData[buttonId];
    if (ranking) showSchoolRanking(buttonId, ranking);
  });
});
