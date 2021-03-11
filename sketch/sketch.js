function setup() {
    noCanvas();
    let userInput = select('#userinput');
    userInput.input(changeText);

    function changeText() {

        let params = {
            active: true,
            currentWindow: true
        }
        chrome.tabs.query(params, gotTabs);

        function gotTabs(tabs) {
            //send message to content script
            let msg = {
                txt: userInput.value()
            }
            chrome.tabs.sendMessage(tabs[0].id, msg);
        }
    }
}