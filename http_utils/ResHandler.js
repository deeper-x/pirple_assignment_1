"use strict";

const {RESPONSE_CODES, DEFAULT_MESSAGES} = require('../config');

let ResHandler = function(response, headerContentType){
  this.response = response;
  this.headerContentType = headerContentType;
}

ResHandler.prototype.getStatusCode = function(statusCode){
  // Use the returned code, or set the default to 200
  return typeof(statusCode) == 'number' ? statusCode : RESPONSE_CODES.RES_OK;
}

module.exports = ResHandler;
