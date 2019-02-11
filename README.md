# A Standard Buzzphrase Generator: antic/buzz

This is a [standard lib](https://stdlib.com/) wrapper for [buzzphrase](https://www.npmjs.com/package/buzzphrase)

Mainly this exists just as a way for me to play with `serverless` frameworks and platforms.


## Usage

### As a web-service
```
curl https://f.stdlib.com/antic/buzz
```

### As Standard Lib

before using, you'll need the [stdlib](https://stdlib.com/) cli:
```
npm install lib.cli -g
# see setup instructions here: https://github.com/stdlib/lib
```

Then you can run the remote standard lib
```
f antic/buzz
f antic/buzz 2
f antic/buzz 3
# etc...
```

## Hacking on this project

### Setup
```
git clone git@github.com:atomantic/buzz.git
cd buzz
npm i
```

### Running it
```
f .
```
