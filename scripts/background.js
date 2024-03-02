let activeTabUrl = "";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.activeTabUrl){
        activeTabUrl = message.activeTabUrl;
    }
})
