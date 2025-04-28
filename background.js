chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "enable") {
      chrome.storage.sync.set({ isEnabled: true });
    } else if (message.action === "disable") {
      chrome.storage.sync.set({ isEnabled: false });
    }
  });
  