"use strict";

const RESPONSE_CODES = {
  "RES_OK": 200,
  "RES_NOT_FOUND": 404
};

const DEFAULT_MESSAGES = {
  "ERROR": "Boo! This is an error"
};

// feel free to add yours. Check for your language id: 
// http://www.i18nguy.com/unicode/language-identifiers.html
const HELLO_DICTIONARY = {
  "en-GB": "hello, world", //DEFAULT
  "en-US": "hello, world",
  "it-IT": "ciao, mondo",
  "es-ES": "hola, mundo",
  "fr-FR": "bonjour, monde",
  "de-DE": "hallo, welt",
};

const SERVER_PARAMS = {
  "HOST": "127.0.0.1",
  "PORT": 3000,
  "RUNNING_MSG": "Server running..."
};

module.exports = {
  "RESPONSE_CODES": RESPONSE_CODES,
  "HELLO_DICTIONARY": HELLO_DICTIONARY,
  "DEFAULT_MESSAGES": DEFAULT_MESSAGES,
  "SERVER_PARAMS": SERVER_PARAMS
};
