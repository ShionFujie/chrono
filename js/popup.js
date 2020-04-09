document.getElementById("sender").onclick = () => {
  chrome.runtime.sendMessage(null);
};
