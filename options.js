function init() {
    console.log('options.js: init()');

    /**
     * TODO - get dollar delta
     */

    let prefs = JSON.parse(window.localStorage.getItem('prefs'));
    if (prefs === null) {
        prefs = {city:'Denver', year: 2000}
    }

    let city = prefs.city;
    let year = prefs.year;

    if (city === undefined) {
        city = 'Denver';
    }

    if (year === undefined) {
        year = 2000;
    }

}

init();


function setCity(value){

}


function setYear(value) {

}