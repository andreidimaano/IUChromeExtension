// replaceText(document.body)

function replaceText(element) {
    if(element.hasChildNodes()) {
        element.childNodes.forEach(replaceText);
        //text elements have no child nodes
    } else if (element.nodeType === Text.TEXT_NODE) {
        if(element.textContent.toLowerCase().includes('iu')) {
            let newElement = document.createElement('span');
            newElement.innerHTML = element.textContent.replace(/(iu)/gi, 
            '<span class="rainbow">$1</span>')
            element.replaceWith(newElement)
            // element.parentElement.remove();
        }
        // element.textContent = element.textContent.replace(/coronavirus/gi, 'poopy woopy');
    }
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    if(message.txt === "hello") {
        replaceText(document.body);
    }
}