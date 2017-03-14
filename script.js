/**
 * Global Vars
 */
let prefs;

let year = 2000;
let city = 'Denver';

/**
 * Utils
 */
function id(name) {
    return document.getElementById(name);
}
// function exists(value) { return () ? false :true }


function init() {
    console.log('script.js: init()');


    /**
     * TODO - run once
     */


    /**
     * Get options from the options page then go.
     */
    chrome.extension.sendMessage({action: 'prefs'}, function (response) {

        if (response !== undefined && response !== null) {
            prefs = response;
            year = prefs.year;
            city = prefs.city;
        }

        updateFakeUnitsOfMeasurement();

    });

}
init();

function updateFakeUnitsOfMeasurement() {
    console.log('update fake units of measurement');

}