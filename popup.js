function getSelectedTab(tab) {

  const tabId = tab.id;
  const messageObj = {};
  const downloadBtn = document.getElementById('download');

  downloadBtn.addEventListener('click', () => {
    chrome.tabs.sendMessage(tabId, messageObj);
  });
};

chrome.tabs.getSelected(null, getSelectedTab); // first parameter is windowId (defaults to the current window)

// console.log('[in browser_action] chrome:', chrome);
// console.log('loading popup.js');