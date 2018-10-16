'use strict';

const {HELLO_DICTIONARY} = require('../config');

let LanguageDetector = function(requestHeaders){
  this.requestHeaders = requestHeaders;
};

LanguageDetector.prototype.getCorrectHello = function(){
    /*
     * Read request accept-language header (if present) and check for it in the config
     * languages dict
     */

    let acceptLanguages = typeof(this.requestHeaders['accept-language']) !== 'undefined' ? this.requestHeaders['accept-language']: 'en-GB,en-US;';

    let detectedLang = acceptLanguages.split(',')[0].toLowerCase();
    
    //let langKey = acceptLanguages.indexOf(detectedLang);
    let langCorrectCase = `${detectedLang.substr(0,2)}-${detectedLang.substr(3,4).toUpperCase()}`;

    //for sure, here I have a result (detected, or default). So no need to if/then check
    return `${HELLO_DICTIONARY[langCorrectCase]} (${langCorrectCase} detected)`;
};

module.exports = LanguageDetector;
