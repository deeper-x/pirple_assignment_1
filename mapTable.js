"use strict";

const {RESPONSE_CODES} = require('./config');

// handlers container
let handlers = {};

// Hello handler
handlers.hello = (data,callback)=>{
    callback(RESPONSE_CODES.RES_OK);
};

// Not-Found handler
handlers.notFound = function(data,callback){
  callback(RESPONSE_CODES.RES_NOT_FOUND);
};

// Define the request router map: every requested resource will be mapped there
let mapper = {
  'hello' : handlers.hello,
};

module.exports = {
  "handlers": handlers,
  "mapper": mapper
}
