console.log("Inside background script");

let activeTabUrl = "";
let clipboardData = '';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.activeTabUrl) {
        activeTabUrl = message.activeTabUrl;
        console.log(activeTabUrl);
    }
})


