// console.log("Inside content.js");

// // get link of active tab, and send to background script.
// activeTabUrl = document.URL;
// chrome.runtime.sendMessage({activeTabUrl: activeTabUrl}, (response) => {
//     console.log('received user data', response);
// });

// content.js
document.addEventListener('copy', function (event) {
    const selectedText = document.getSelection().toString();

    if (selectedText) {
        console.log(selectedText);

        // Send the copied text to the popup.js
        chrome.runtime.sendMessage({ copiedTextFromContent: selectedText }, (response) => {
            console.log('Received response from popup.js', response);
        });
    }
});

