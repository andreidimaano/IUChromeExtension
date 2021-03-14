function setup() {
    noCanvas();

    let bgpage = chrome.extension.getBackgroundPage();
    let word = bgpage.word;
    createP(word);

    let url = 'https://api.kanye.rest/';

    loadJSON(url, gotQuote);

    function gotQuote(data) {
        createP(data.quote);
    }
}