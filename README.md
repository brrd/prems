# prems

> Hierarchical filepath resolver

## Installation

```
$ npm install --save prems
```

## Usage

```javascript
const prems = require("prems");

prems(["./dir1", "./dir2"], "hello.txt", console.log);
// Log : "./dir1/hello.txt" if it exists
//       otherwise "./dir2/hello.txt" if it exists
//       or null if none of those files exists

// Promise style is also supported
prems(["./dir1", "./dir2"], "hello.txt").then(console.log));
```

## License

The MIT License (MIT) - Copyright (c) 2016 Thomas Brouard
