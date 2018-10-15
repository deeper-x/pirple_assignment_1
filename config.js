"use strict";

const RESPONSE_CODES = {
  "RES_OK": 200,
  "RES_NOT_FOUND": 404
}

const DEFAULT_MESSAGES = {
  "ERROR": "Boo! This is an error"
}

// feel free to add yours. Pay attention to the case, use lower!
const HELLO_DICTIONARY = {
  "en-gb": "hello, world", //DEFAULT
  "en-us": "hello, world",
  "it-it": "ciao, mondo",
  "es-es": "hola, mundo",
  "fr-fr": "bonjour, monde",
  "de-de": "hallo, welt",
}

const SERVER_PARAMS = {
  "HOST": "127.0.0.1",
  "PORT": 3000,
  "RUNNING_MSG": "Server running..."
}

module.exports = {
  "RESPONSE_CODES": RESPONSE_CODES,
  "HELLO_DICTIONARY": HELLO_DICTIONARY,
  "DEFAULT_MESSAGES": DEFAULT_MESSAGES,
  "SERVER_PARAMS": SERVER_PARAMS
}
