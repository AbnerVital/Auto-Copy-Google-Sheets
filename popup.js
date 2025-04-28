document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleButton");
  
    // Recupera o estado da extensão armazenado
    chrome.storage.sync.get("isEnabled", (data) => {
      const isEnabled = data.isEnabled ?? true;
      toggleButton.textContent = isEnabled ? "Desativar" : "Ativar";
  
      // Altera o estado ao clicar no botão
      toggleButton.addEventListener("click", () => {
        const newState = !isEnabled;
        chrome.storage.sync.set({ isEnabled: newState });
  
        // Altera o texto do botão com base no novo estado
        toggleButton.textContent = newState ? "Desativar" : "Ativar";
        
        // Envia a mensagem para o background.js para atualizar o estado
        chrome.runtime.sendMessage({ action: newState ? "enable" : "disable" });
      });
    });
  });
  