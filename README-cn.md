[简体中文](./README-cn.md) | [English](./README.md)
# timecell
一个精简的时间单元格式化库, 用于计算时间间隔

## 常用功能/特点
- [x] 支持时间戳格式
- [x] 支持时间格式(字符串)
- [x] 双模式(`1, 通用`/`2, 精细`), 默认`通用`模式
- [x] 双语言(`zh-cn, 中`/`en-us, 英`), 默认`中文`
- [x] 支持随意切换语言和模式
- [x] 支持`from-now`计算
- [x] debug打印调试
- [x] class类编写,`static`封装

## npm安装
```sh
npm install timecell --save
```

## ES-Module使用
```js
import TimeCell from 'timecell'
let t = new TimeCell();
console.log(t.tc('1697248859445', '2023/10/16 10:00:23'))
// log: 5小时以前

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
// log: 5小时以前

// ...和node module一样
```

## Author
[xiaoshenghui](https://github.com/xiao-shenghui)

## License
[MIT License](https://rmm5t.mit-license.org/)

## Keywords
[time](https://www.npmjs.com/search?q=time)  [format](https://www.npmjs.com/search?q=format)