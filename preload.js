// Importar os módulos do Node.js que você deseja expor para o código da página da web
const { ipcRenderer } = require('electron');

// Definir funções ou objetos que você deseja expor
window.electron = {
  // Exemplo de função para enviar uma mensagem para o processo principal
  sendToMain: (message) => {
    ipcRenderer.send('messageToMain', message);
  },

  // Outros métodos, objetos ou funções que você deseja expor
};
