// popup.js
// popup.js
document.addEventListener('DOMContentLoaded', function () {
  const textArea = document.getElementById('textArea');

  // Listen for messages from content.js
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.copiedTextFromContent) {
      const copiedTextFromContent = message.copiedTextFromContent;

      // Display the copied text in the textarea or console
      textArea.value = copiedTextFromContent;
      console.log('Text copied in popup.js:', copiedTextFromContent);
    }
  });
});
