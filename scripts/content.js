// get link of active tab, and send to background script.
activeTabUrl = document.URL;
chrome.runtime.sendMessage({activeTabUrl: activeTabUrl}, (response) => {
    console.log('received user data', response);
});
// const selection = () => { if (document. getSelection) return document. getSelection(); } selection(). toString();