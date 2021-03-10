// replaceText(document.body)
let isClicked = false;

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

function revertText(element) {
    if(element.hasChildNodes()) {
        element.childNodes.forEach(revertText);
    } 

    if(element.classList) {
        for(let i = 0; i < element.classList.length; i++) {
            if(element.classList.contains("rainbow")){
                element.classList.remove("rainbow");
            }
        }
    }
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    isClicked = !isClicked;
    console.log('isClicked', isClicked);
    if(message.txt === "hello" && isClicked) {
        replaceText(document.body);
    } else {
        revertText(document.body);
    }
}