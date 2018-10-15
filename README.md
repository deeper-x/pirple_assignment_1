# Pirple assigment #1

Version: 0.0.1

Get a "hello, world" string, based on browser accept-language header.
See: [accept-language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* Node (>=8)

### Run


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

Check configured languages in config.js:
```javascript
const HELLO_DICTIONARY = {
  "en-GB": "hello, world",
  "it-IT": "ciao, mondo",
  "es-ES": "hola, mundo",
  "ft-FR": "bonjour, monde",
  "de-DE": "hallo, welt",
}
```


### Example
![alt example-ass-1](https://image.ibb.co/nGjkt0/pirple-ass-1.png)


## Versioning

v 0.0.1
* hello world string based on your browser language settings


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
