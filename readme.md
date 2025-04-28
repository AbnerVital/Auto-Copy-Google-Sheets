# 📋 **Auto Copy Google Sheets**

**Auto Copy Google Sheets** é uma extensão para o **Google Chrome** que permite copiar automaticamente o conteúdo de uma célula em uma planilha do Google Sheets com um simples clique. Ao copiar a célula, a extensão exibe uma notificação visual discreta ("Copiado!") para confirmar que a ação foi bem-sucedida, tornando o processo mais ágil e sem a necessidade de usar atalhos de teclado.

---

## 🚀 **Funcionalidades**

- **📌 Cópia Automática:** O conteúdo da célula é copiado automaticamente ao clicar nela, sem a necessidade de usar o atalho de teclado **Ctrl+C**.
- **🔔 Notificação Visual:** Exibe uma notificação discreta na tela ("Copiado!") para confirmar que a célula foi copiada com sucesso.
- **⚙️ Ativação/Desativação:** A extensão pode ser ativada ou desativada diretamente pelo popup da extensão no navegador.
- **💾 Persistência de Estado:** A extensão mantém o estado (ativada/desativada) usando o armazenamento local (`chrome.storage`), permitindo que a configuração seja preservada entre as sessões.

---

## 📥 **Como Instalar**

1. Baixe ou clone este repositório.
2. Acesse a página de extensões do Chrome: `chrome://extensions/`
3. Ative o **Modo de Desenvolvedor** no canto superior direito.
4. Clique em **Carregar sem compactação** e selecione a pasta onde os arquivos da extensão estão localizados.
5. A extensão será carregada e você poderá começar a usá-la no Google Sheets.

---

## ⚙️ **Como Usar**

- Após instalar a extensão, ela estará disponível no seu navegador.
- Acesse qualquer planilha do Google Sheets.
- Clique com o botão direito em uma célula para copiá-la automaticamente.
- Uma notificação aparecerá na tela indicando que o conteúdo foi copiado.
- Para desativar a extensão, clique no ícone da extensão no canto superior direito do navegador e use o botão de ativação/desativação.

---

## 🛠 **Configurações e Personalização**

- **Ativar/Desativar Extensão:** Você pode alternar entre ativar ou desativar a extensão diretamente no **popup da extensão**.
- **Armazenamento Local:** A configuração de ativação/desativação é armazenada no `chrome.storage`, garantindo que sua escolha seja preservada entre as sessões.

---

## 📚 **Tecnologias Utilizadas**

- **JavaScript**: Lógica de controle de eventos e manipulação do DOM.
- **HTML**: Estrutura do popup da extensão.
- **CSS**: Estilo da notificação visual e da interface do usuário.
- **Chrome Extensions API**: Para gerenciamento de armazenamento e eventos da extensão.
  
---

## 🔧 **Contribuindo**

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Para isso, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma nova branch com suas alterações: `git checkout -b minha-nova-feature`.
3. Faça commit das suas alterações: `git commit -am 'Adiciona nova funcionalidade'`.
4. Envie para o repositório remoto: `git push origin minha-nova-feature`.
5. Abra um pull request.

---

## 📜 **Licença**

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais informações.
