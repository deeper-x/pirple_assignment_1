"use strict";

const http = require('http');
const url = require('url');
const ReqHandler = require('./http_utils/ReqHandler');
const ResHandler = require('./http_utils/ResHandler');
const StringDecoder = require('string_decoder').StringDecoder;
const {DEFAULT_MESSAGES, RESPONSE_CODES, SERVER_PARAMS} = require('./config');
const LanguageDetector = require('./lib/LanguageDetector');
const Router = require('./lib/Router');

// HTTP server creation
const httpServer = http.createServer((req, res)=>{
    let reqHandler = new ReqHandler(req);

    let decoder = new StringDecoder('utf-8');
    let buffer = '';

    req.on('data', (data)=>{
        buffer += decoder.write(data);
    });

    req.on('end', ()=>{
        buffer += decoder.end();

        let data = reqHandler.getData();
        data.payload = buffer;

        let router = new Router(reqHandler)
        let routedRequest = router.getHandler();

        // Route the request to the handler specified in the router
        routedRequest(data,function(statusCode,resPayload){

          if (statusCode == RESPONSE_CODES.RES_OK){
            // get interesting header data about language
            let languageDetector = new LanguageDetector(req.headers);
            // Define the OK string output payload
            var strPayOutput = languageDetector.getCorrectHello();
          } else {
            //ERROR message, no result payload: show errors
            var strPayOutput = DEFAULT_MESSAGES.ERROR;
          }

          let resHandler = new ResHandler(res, "text/plain");
          let realStatusCode = resHandler.getStatusCode(statusCode);

          // set response data
          resHandler.stringPayloadRes = strPayOutput;

          // Close with the response
          res.setHeader('Content-Type', resHandler.headerContentType);
          res.writeHead(realStatusCode);
          res.end(resHandler.stringPayloadRes);
        });
    });
});

httpServer.listen(SERVER_PARAMS.PORT, SERVER_PARAMS.HOST, ()=>{
    console.log(SERVER_PARAMS.RUNNING_MSG);
})
