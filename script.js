let isClicked = false;
let filenames = [
    "IU.jpg",
    "IU1.jpg",
    "IU2.jpg",
    "IU3.jpg",
    "IU4.jpg",
    "IU5.jpg"
];

function replaceImg(){
    let imgs = document.getElementsByTagName('img');
    
    for (imgElt of imgs) {
        let r = Math.floor(Math.random() * filenames.length);
        let file = 'IUimg/' + filenames[r];
        let url = chrome.extension.getURL(file);
        imgElt.src = url;
        console.log(url);
    }
}

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
    replaceImg();

    isClicked = !isClicked;
    console.log('isClicked', isClicked);
    if(message.txt === "hello" && isClicked) {
        replaceText(document.body);
    } else {
        revertText(document.body);
    }
}