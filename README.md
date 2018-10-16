# Pirple assigment #1

Version: 0.0.3

Get a hello string, based on browser accept-language header (RFC-5646)
See: [accept-language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language)


### Prerequisites

* Node (>=8)

### Getting Started

Pull and run Node instance
```bash
$ git clone https://github.com/deeper-x/pirple_assignment_1.git
$ cd pirple_assignment_1
$ node index.js
Server running...

```

Now open your browser/curl/http client/whatever on:
```
http://127.0.0.1:3000/hello
```

and read output (italian, in my case):
```bash
You speak Italian (Italy), I guess! (it-IT detected)
```
If your language's configured, you'll get related 'hello' string

Check configured languages in config.js, and add the 'accept-language' header key for your language:
```javascript
const HELLO_DICTIONARY = {
  ...
  'ar-IQ': 'Arabic (Iraq)',
  'ar-JO': 'Arabic (Jordan)',
  'ar-KW': 'Arabic (Kuwait)',
  'ar-LB': 'Arabic (Lebanon)',
  'ar-LY': 'Arabic (Libya)',
  'ar-MA': 'Arabic (Morocco)',
  'ar-OM': 'Arabic (Oman)',
  'ar-QA': 'Arabic (Qatar)',
  'ar-SA': 'Arabic (Saudi Arabia)',

  ...
  //ADD YOUR LANGUAGE DATA...
}
```


### Example
![alt example-ass-1](https://image.ibb.co/j3mzML/language-detector.png)


## Versioning
v 0.0.3
* now all languages are (should be) already in: hello string should give it yours

v 0.0.2
* improved language detection, based on RFC-5646 format string (see https://tools.ietf.org/html/rfc5646)

v 0.0.1
* calling /hello, a 'hello world' string is returned (based on your browser language settings). Error page has static message


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
