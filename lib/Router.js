"use strict";

const {RESPONSE_CODES} = require('../config');
const {handlers, mapper} = require('../mapTable');

let Router = function(reqHandler){
  this.mapper = mapper,
  this.reqHandler = reqHandler;
}

Router.prototype.getHandler = function(){
  return typeof(mapper[this.reqHandler.trimmedPath]) !== 'undefined' ? mapper[this.reqHandler.trimmedPath] : handlers.notFound;
}

Router.prototype.getMapperTable = function(){
  return this.mapper;
}

module.exports = Router;
