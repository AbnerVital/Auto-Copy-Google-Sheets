chrome.storage.sync.get("isEnabled", (data) => {
  const isEnabled = data.isEnabled ?? true; // Padrão é ativado

  if (isEnabled) {
    document.addEventListener("contextmenu", (event) => {
      setTimeout(() => {
        const activeCell = document.querySelector('.cell-input');
        if (activeCell) {
          const text = activeCell.innerText;

          const tempInput = document.createElement("textarea");
          tempInput.value = text;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand("copy");
          document.body.removeChild(tempInput);

          console.log(`Conteúdo copiado: ${text}`);
          showToast("Copiado!");
        }
      }, 100);
      event.preventDefault();
    });
  }
});
