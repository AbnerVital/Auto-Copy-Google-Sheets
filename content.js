function showToast(message) { 
  const toast = document.createElement("div");
  toast.innerText = message;
  Object.assign(toast.style, {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
    zIndex: 9999,
    fontSize: "14px",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out"
  });

  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.opacity = 1;
  });

  setTimeout(() => {
    toast.style.opacity = 0;
    setTimeout(() => document.body.removeChild(toast), 300);
  }, 1500);
}

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

  event.preventDefault(); // Impede o menu de contexto padrão
});
