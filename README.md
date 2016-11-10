# camelizejs
Converts strings to UpperCamelCase.

## Installation
```
npm install --save camelizejs
```

## Usage
```js
import camelize from 'camelizejs'

camelize('hoge') # => "Hoge"
camelize('hoge_fuga') # => "HogeFuga"
camelize('hoge', false) # => "hoge"
camelize('hoge_fuga', false) # => "hogeFuga"
```
