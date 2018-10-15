"use strict";

const url = require("url");

let ReqHandler = function (request) {
    this.request = request;
    this.parsedUrl = url.parse(this.request.url, true);

    // constructing request data, waiting for payload
    this.method = request.method.toLowerCase();
    this.headers = request.headers;
    this.queryStringObject = this.parsedUrl.query;
    this.trimmedPath = this.getTrimmedPath();
}

ReqHandler.prototype.getData = function(){
    return {
        'trimmedPath': this.trimmedPath,
        'queryStringObject': this.queryStringObject,
        'method': this.method,
        'headers': this.headers
    }
}

ReqHandler.prototype.getTrimmedPath = function(){
    /*
     * Set the TrimmedPath parameter (a cleaned query path),
     * starting from parsed url
     */

    //getting the path
    let path = this.parsedUrl.pathname;

    // set the trimmed path regex
    const regexToTrim = /^\/+|\/+$/g;

    return path.replace(regexToTrim, '');
}

module.exports = ReqHandler;
