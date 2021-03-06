replaceText(document.body)

function replaceText(element) {
    if(element.hasChildNodes()) {
        element.childNodes.forEach(replaceText);
        //text elements have no child nodes
    } else if (element.nodeType === Text.TEXT_NODE) {
        if(element.textContent.toLowerCase().includes('iu')) {
            console.log('match', element.textContent);
            let newElement = document.createElement('span');
            newElement.innerHTML = element.textContent.replace(/(iu)/gi, 
            '<span class="rainbow">$1</span>')
            element.replaceWith(newElement)
            // element.parentElement.remove();
        }
        // element.textContent = element.textContent.replace(/coronavirus/gi, 'poopy woopy');
    }
}