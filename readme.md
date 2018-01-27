# format-bcp-47

Validates BCP-47 Language Tags using the npm package [bcp-47](https://github.com/wooorm/bcp-47) and formats them in a unique way to ensure consistency.

# Install
```
npm i format-bcp-47
```

# Usage
```js
const formatBcp47 = require('format-bcp-47');
console.log(formatBcp47('de-ch'));
console.log(formatBcp47('de-ch') === formatBcp47('DE-ch'));
console.log(formatBcp47(6757547547546754653));
/* CONSOLE:
de-CH
true
null
*/
```
Returns `null` if the valdiation fails, otherwise it returns a valid and formatted BCP-47 language tag.

# What does it exactly?
It validates using `bcp-47` and does some uppercase / lowercase formatting.
