[简体中文](./README-cn.md) | [English](./README.md)
# timecell
A minimalist time formatting library for calculating time.

## Function/Feature
- 🚀 Support **timestamp** format 
- 🚀 Support for time string format
- 💪 **Four** Mode(`1: General`/`2: Detail`/`3: Personalization - Week`/`4: Personalization - Today & Yesterday`), default mode `1` 
- 💪 Support Typescript
- 🌍 Dual Lang(`zh-cn: Chinese`/`en-us: English`), default lang `zh-cn`
- 🛠️ Support `switch` language and mode 
- 🍭 Support auto **filling `0`** for date and time
- 🍭 Support `from now`
- 🍭 Support debugging and printing
- 🍭 Class code, 'static' private variable

## Install
```sh
npm install timecell --save
```

## Usage - ES-Module
```js
import TimeCell from 'timecell'
let t = new TimeCell();
console.log(t.tc('1697248859445', '2023/10/16 10:00:23'))
// log: 5小时前

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
## Usage - Detail
```js
import TimeCell from 'timecell'
let t = new TimeCell({
	lang: 'en-us'
});
console.log(t.tc(1697442756721))
// log: 4hrs ago
console.log(t.tc('2023/10/16 10:00:23'))
// log: 10hrs ago

t.setOptions({
	mode: 2
})
console.log(t.tc(1697421623000))
// 10hrs 57mins ago
console.log(t.tc('2023/10/15 10:00:23'))
// 1days 10hrs ago

t.setOptions({
	mode: 3
})
console.log(t.tc('2023/10/16 10:00:23'))
// 10:00
console.log(t.tc('2023/10/15 10:00:23'))
// Sun.10:00
console.log(t.tc(1697421623000))
// 10/08

t.setOptions({
	lang: 'en-us',
	mode: 4
})
console.log(t.tc('2023/10/16 10:00:23'))
// today10:00
console.log(t.tc('2023/10/15 10:00:23'))
// yesterday10:00
```
## Function Description
```js
// Args: What formats are supported? Automatic timestamp conversion
	// number|string: new Date().getTime() / '1697421623000'
	// string: 2023/10/16 10:00:23 
	// string: 2023/10/16
	// string: 2023
	// string: 10/16


// Config: Which languages are supported?
	// zh-cn Chinese, default
	// en-us English

// Config: What modes are supported?
// 1 General, default - example 10mins ago
	//Within 1 minute: now
	//Within 1 hour: 10mins ago
	//Within 1 day: 10hrs ago
	//Within 1 month: 10days ago
	//Within 1 year: 10months ago
	//Over 1 year: 10years ago
// 2 Detail, - example 10mins 8s ago
	//Within 1 minute: 10s ago
	//Within 1 hour: 10mins 8s ago
	//Within 1 day: 10hrs 8mins ago
	//Within 1 month: 10days 8hrs ago
	//Within 1 year: 10months 8days ago
	//Over 1 year: 3years 10months ago

// 3 Personalization - Week: - example Sun.08:03
	// Within 1 day: 08:03
	// Within 1 week: Sun.08:03
	// others: 10/16 08:03
// 4 Personalization - Today & Yesterday: - example today08:03
	// Within 1 day: today08:03
	// Within 2 day: yesterday08:03
	// others: 10/16 08:03
```

## API
- new TimeCell(options?:object)
```js
// default options
{
	lang: 'zh-cn',
	mode: 1
}
// lang: 'zh-cn' | 'en-us'
// mode: 1 | 2 | 3 | 4
```
- tc(startTime:string|number,endTime?:string|number)
```js
// startTime: timestamp or time string
t.tc(1697421623000);
t.tc('2023/10/15 10:00:23');
t.tc('2023/10/15');
// endTime: timestamp or time string
// default endTime: Date.now()
```
- setOptions(options?:object)
```js
// to change options from TimeCell
t.setOptions({
	lang: 'en-us',
	mode: 4
})
```

## Author
[xiaoshenghui](https://github.com/xiao-shenghui)

## License
[MIT License](https://rmm5t.mit-license.org/)

## Keywords
[time](https://www.npmjs.com/search?q=time)  [format](https://www.npmjs.com/search?q=format)