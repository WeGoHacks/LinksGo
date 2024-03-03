console.log("Inside content.js");

//get link of active tab, and send to background script

let activeTabUrl = document.URL;
let allTabsLinks = [];

chrome.runtime.sendMessage({activeTabUrl: activeTabUrl}, (response) => {
	console.log('received data of url of current tab.', response);
});
// get links of all tabs in the current window
/*
function logTabs(tabs) {
  for (const tab of tabs) {
    // tab.url requires the `tabs` permission or a matching host permission.
    console.log(tab.url);
	allTabsLinks.append(tab.url);
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}
*/
/*
chrome.windows.getCurrent.tabs.query({ currentWindow: true }).then(logTabs, onError);
chrome.runtime.sendMessage({allTabsLinks: allTabsLinks}, (response) => {
	console.log('received data of all links in current window.', response);
});
*/
