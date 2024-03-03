console.log("Inside background script");

let activeTabUrl = "";
let allTabsLinks = [];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if(message.activeTabUrl){
		activeTabUrl = message.activeTabUrl;
		console.log(activeTabUrl);
	}
	if(message.allTabsLinks){
		allTabsLinks = message.allTabsLinks;
	}
	if(message.currentTabButtonClicked){
		console.log("Sending this to indexScript.js - " + activeTabUrl);
		sendResponse({activeTabLink: activeTabUrl});
	}
	if(message.allTabsButtonClicked){
		console.log("Sending this to indexScript.js - " + activeTab);
	}
})
