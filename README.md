# Pirple assigment #1

Version: 0.0.2

Get a 'hello, world' string, based on browser accept-language header (RFC-5646)
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
ciao, mondo
```
If your language's configured, you'll get related 'hello' string

Check configured languages in config.js, and add the 'accept-language' header key for your language:
```javascript
const HELLO_DICTIONARY = {
  'en-GB': 'hello, world', //DEFAULT
  'it-IT': 'ciao, mondo',
  'es-ES': 'hola, mundo',
  'fr-FR': 'bonjour, monde',
  'de-DE': 'hallo, welt',
  //ADD YOUR LANGUAGE DATA...
}
```


### Example
![alt example-ass-1](https://preview.ibb.co/mSg7qf/pirple.png)


## Versioning
v 0.0.2
* improved language detection, based on RFC-3066 format string (see https://www.ietf.org/rfc/rfc3066.txt)

v 0.0.1
* calling /hello, a 'hello world' string is returned (based on your browser language settings). Error page has static message


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
