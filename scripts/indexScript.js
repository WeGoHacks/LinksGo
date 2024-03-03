// javascript logic for the index.html popup

let currentTabButton = document.getElementById('currentTabButton');
let allTabsButton = document.getElementById('allTabsButton');

// let clearAllButton = document.getElementById('clearAll');

let linksList = document.getElementById('listOfLinks');
let allTabsLinks = [];

/*
let tabsInWindow = [];


function logTabs(tabs) {
  tabsInWindows = tabs;
  /*
  for(const tab of tabs) {
      // tab.url requires the `tabs` permission or a matching host permission.
  	  // console.log(tab.url);
  }
  */

/*
function onError(error) {
  console.error(`Error: ${error}`);
}
/*
browser.tabs.query({currentWindow: true}).then(logTabs, onError);
*/
let activeTabLink = "";

currentTabButton.addEventListener("click", () => {
	chrome.runtime.sendMessage({currentTabButtonClicked: true}, (response) => {
		console.log(response);
		// response object contains link for the active tab.
		activeTabLink = response.activeTabLink;
		let listElement = document.createElement('li');
		listElement.appendChild(document.createTextNode(activeTabLink));
		// listElement.innerText = activeTabLink;
		linksList.appendChild(listElement);
	});
});

allTabsButton.addEventListener("click", () => {
	chrome.runtime.sendMessage({allTabsButtonClicked: true}, (response) => {
		// response contains a list of all links of the active window (called allTabsLinks)
		console.log(response);
		allTabsLinks = response.allTabsLinks;
		for(const link of allTabsLinks){
			let listElement = document.createElement('li');
			listElement.appendChild(document.createTextNode(link));
			linksList.appendChild(listElement);
		}
	})
})

/*
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
*/
