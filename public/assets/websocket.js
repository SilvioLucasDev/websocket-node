const socket = io('http://localhost:3000');

socket.on('podium', (data) => {
  console.log('Mensagem recebida do servidor:', data);
});
