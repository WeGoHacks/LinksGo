console.log("Inside background.js");

let activeTabUrl = "";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.activeTabUrl){
        activeTabUrl = message.activeTabUrl;
		console.log(activeTabUrl);
    }
	/* to implement
	if(message.addLink){
		
	}
	*/
})
