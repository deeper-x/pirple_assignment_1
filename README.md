# Pirple assigment #1

Version: 0.0.1

Get a "hello, world" string, based on browser accept-language header.
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
If your language's configured, you'll get related "hello" string

Check configured languages in config.js, and add the "accept-language" header key for your language:
```javascript
const HELLO_DICTIONARY = {
  "en-gb": "hello, world", //DEFAULT
  "it-it": "ciao, mondo",
  "es-es": "hola, mundo",
  "fr-fr": "bonjour, monde",
  "de-de": "hallo, welt",
  //ADD YOUR LANGUAGE DATA...
}
```


### Example
![alt example-ass-1](https://image.ibb.co/nGjkt0/pirple-ass-1.png)


## Versioning

v 0.0.1
* calling /hello, a "hello world" string is returned (based on your browser language settings). Error page has static message


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
