console.log('background running');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked (tab) {
    console.log('button clicked');
    let msg = {
        txt: "button"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}