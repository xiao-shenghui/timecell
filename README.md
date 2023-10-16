[简体中文](./README-cn.md) | [English](./README.md)
# timecell
A minimalist time formatting library for calculating time.

## Function/Feature
- [x] Support timestamp format 
- [x] Support for time string format
- [x] Dual Mode(`1, General Default`/`2, Detail`)
- [x] Dual Lang(`zh-cn, Chinese Default`/`en-us, English`)
- [x] Support `switch` language and mode
- [x] Support `from now`
- [x] Support debugging and printing
- [x] Class code, 'static' private variable

## Install
```sh
npm install timecell --save
```

## Usage - ES-Module
```js
import TimeCell from 'timecell'
let t = new TimeCell();
console.log(t.tc('1697248859445', '2023/10/16 10:00:23'))
// log: 5小时以前

// change mode and language
t.setOptions({
	mode: 2,
	lang: 'en-us',
	debug: true
})

// default from-now function
console.log(t.tc('2023/10/13'))
// log: 3days 15hrs ago
console.log(t.tc('2022/9/13'))
// log: 1years 1months ago
```

## Usage - Nodejs
```js
const TimeCell = require('timecell')
let t = new TimeCell();
console.log(t.tc('1697248859445', '2023/10/16 10:00:23'))
// log: 5小时以前
// ... same as node module
```

## Author
[xiaoshenghui](https://github.com/xiao-shenghui)

## License
[MIT License](https://rmm5t.mit-license.org/)

## Keywords
[time](https://www.npmjs.com/search?q=time)  [format](https://www.npmjs.com/search?q=format)