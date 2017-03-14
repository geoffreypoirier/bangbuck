chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action === 'prefs') {

            let prefsString = localStorage.prefs;

            if (prefsString === undefined) {
                sendResponse(undefined);
            } else {
                sendResponse(JSON.parse(localStorage.prefs));
            }


        }

    }
);

function click(e) {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {

        console.log('background.js: click()', e);
        let specTab = tabs[0];
        chrome.tabs.insertCSS(specTab.id, {file:'styles.css'});
        // chrome.tabs.executeScript(specTab.id, {file:'spinner.js'});
        chrome.tabs.executeScript(specTab.id, {file:'script.js'});

    });


}

chrome.browserAction.onClicked.addListener(click);