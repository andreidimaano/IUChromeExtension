console.log('background running');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked (tab) {
    let msg = {
        txt: "button"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}