[简体中文](./README-cn.md) | [English](./README.md)
# timecell
一个精简的时间单元格式化库, 用于计算时间间隔

## 常用功能/特点
- 🚀 支持时间戳格式
- 🚀 支持时间格式(字符串)
- 💪 四种个性化模式(`1, 通用`/`2, 精细`/`3,个性化-星期`/`4,个性化-今天昨天`), 默认`通用`模式
- 💪 支持Typescript 
- 🌍 双语言(`zh-cn, 中`/`en-us, 英`), 默认`中文`
- 🛠️ 支持随意`切换`语言和模式
- 🍭 支持日期和时间自动`补0`
- 🍭 支持`from-now`计算
- 🍭 支持debug打印调试
- 🍭 class类编写,`static`封装

## npm安装
```sh
npm install timecell --save
```

## ES-Module使用
```js
import TimeCell from 'timecell'
let t = new TimeCell();
console.log(t.tc('1697248859445', '2023/10/16 10:00:23'))
// log: 5小时前

// 改变模式和语言
t.setOptions({
	mode: 2,
	lang: 'en-us',
	debug: true
})

// 不传参, 默认为from-now
console.log(t.tc('2023/10/13'))
// log: 3days 15hrs ago
console.log(t.tc('2022/9/13'))
// log: 1years 1months ago
```

## Nodejs使用
```js
const TimeCell = require('timecell')
let t = new TimeCell();
console.log(t.tc('1697248859445', '2023/10/16 10:00:23'))
// log: 5小时前

// ...和node module一样
```
## 更多使用
```js
import TimeCell from 'timecell'
let t = new TimeCell();
console.log(t.tc(1697442756721))
// log: 4小时前
console.log(t.tc('2023/10/16 10:00:23'))
// log: 10小时前

t.setOptions({
	lang: 'en-us'
})
console.log(t.tc('2023/10/16 10:00:23'))
// log: 10hrs ago

t.setOptions({
	lang: 'en-us',
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
t.setOptions({
	lang: 'zh-cn',
	mode: 4
})
console.log(t.tc(1697421623000))
// 今天10:00
console.log(t.tc('2023/10/15 10:00:23'))
// 昨天10:00
```
## 功能说明
```js
/*
// 参数: 支持哪些格式？自动转时间戳
	// number|string: new Date().getTime() / '1697421623000'
	// string: 2023/10/16 10:00:23 
	// string: 2023/10/16
	// string: 2023
	// string: 10/16


// 配置: 支持哪些语言?
	// zh-cn 中文, 默认
	// en-us 英文

// 配置: 支持哪些模式?
// 1 通用, 默认
	// 1分钟内: 刚刚
	// 1小时内: n分钟前
	// 1天内: n小时前
	// 1个月内: n天前
	// 1年内: n月前
	// 1年以上: n年前
// 2 精准的,
	// 1分钟内: n秒前
	// 1小时内: n分钟m秒前
	// 1天内: n小时m分钟前
	// 1个月内: n天m小时前
	// 1年内: n月m天前
	// 1年以上: n年m月前 
// 3 个性化-星期: 
	// 1天内: 发布时间 08:03
	// 1周内: 发布星期+发布时间 星期一08:03
	// 其他时间: 发布日期+发布时间 10月16日08:03
// 4 个性化-今天和昨天: 
	// 1天内: 今天+时间 今天08:03
	// 2天内: 昨天+时间 昨天08:03
	// 其他时间: 发布日期+发布时间 10月16日08:03
*/
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