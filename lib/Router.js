'use strict';

const {RESPONSE_CODES} = require('../config');
const {handlers, mapper} = require('../mapTable');

let Router = function(reqHandler){
  /*
   * based on requested resource, map the correct success handler (if found), or 404 if not
   */
  this.mapper = mapper,
  this.reqHandler = reqHandler;
};

Router.prototype.getHandler = function(){
  return typeof(mapper[this.reqHandler.trimmedPath]) !== 'undefined' ? mapper[this.reqHandler.trimmedPath] : handlers.notFound;
};

module.exports = Router;
