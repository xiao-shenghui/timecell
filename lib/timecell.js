(function(global, Factory) {
    Factory(global, function(env) {
        return (function() {
            class TimeCell {
                static options = {}
                constructor(o = {}) {
                    this.setOptions(o)
                }
                static formatO(o) {
                    switch(o.mode){
                        case 4:
                        case 3: 
                        case 2:  
                        case 1: 
                            o.mode = o.mode;
                            break;
                        default: 
                            o.mode = 1;
                    };
                    o.lang = o.lang === 'en-us' ? 'en-us' : 'zh-cn';
                    return o
                }
                static getDefault() {
                    return {
                        mode: 1,
                        lang: 'zh-cn',
                        debug: false,
                        version: '1.0.1',
                        environment: env
                    }
                }
                log() {
                    console.group("TimeCell's options", TimeCell.options)
                }
                setOptions(o = {}) {
                    TimeCell.options = Object.assign(TimeCell.getDefault(), TimeCell.formatO(o));
                    if (TimeCell.options.debug) this.log()
                    return this
                }
                timecell(start, end = Date.now()) {
                    let { mode, lang } = TimeCell.options
                    let l = lang == 'zh-cn' ? true : false
                    let m = mode;
                    switch(m){
                        case 1:
                        case 2: 
                             return TimeCell.timeOne(TimeCell.timeFormat(start), TimeCell.timeFormat(end), l, m===1)
                             break;
                        case 3:
                        case 4:
                             return TimeCell.timeTwo(TimeCell.timeFormat(start), TimeCell.timeFormat(end), l, m===3)
                             break;
                    }
                }
                tc(start, end = Date.now()) {
                    return this.timecell(start, end)
                }
                static timeFormat(t) {
                    t = typeof t == 'string' ? Number(t) || new Date(t).getTime() : t;
                    return t
                }
                static timeOne(s, e, l, t) {
                    let sec = getTimes(s, e);
                    let res = '', m;
                    if (sec <= 0) {
                        res = l ? '未来' : 'futrue';
                    } else if (sec < 60) {
                        res = t ? (l ? '刚刚' : 'now') : (l ? `${sec}秒前` :
                            `${sec}secs ago`);
                    } else if (sec < 3600) {
                        m = getTimes(s, e, 60);
                        res = resHandle(m, sec % 60, '分钟', '秒', 'mins', 's')
                    } else if (sec < 86400) {
                        m = getTimes(s, e, 3600);
                        res = resHandle(m, Math.floor(sec % 3600 / 60), '小时', '分钟', 'hrs', 'mins')
                    } else if (sec < 2592000) {
                        m = getTimes(s, e, 86400);
                        res = resHandle(m, Math.floor(sec % 86400 / 3600), '天', '小时', 'days', 'hrs')
                    } else if (sec < 31104000) {
                        m = getTimes(s, e, 2592000);
                        res = resHandle(m, Math.floor(sec % 2592000 / 86400), '月', '天', 'months', 'days')

                    } else {
                        m = getTimes(s, e, 31104000);
                        res = resHandle(m, Math.floor(sec % 31104000 / 2592000), '年', '月', 'years', 'months')
                    }

                    function resHandle(m, n, CN, CN2, EN, EN2) {
                        return t ? (l ? m + CN + '前' : m + EN + ' ago') :
                            (l ? m + CN + n + CN2 + '前' :
                                m + EN + ' ' + n + EN2 + ' ago')
                    }

                    function getTimes(s, e, r = 1) {
                        return Math.floor((e - s) / 1000 / r)
                    }

                    return res
                }
                static timeTwo(s, e, l, t){
                    let sec = getTimes(s, e);
                    let data = new Date(s);
                    let h = data.getHours()
                    let min = data.getMinutes()
                    let res = (h >= 10 ? h : '0' + h) + ':' + (min >= 10 ? min : '0' + min);
                    if(sec < 86400){
                        return t ? res : l ? '今天' + res : 'today' + res
                    }
                    else if(sec < 86400 * 2 && t === false){
                        return l ? '昨天' + res : 'yesterday' + res
                    }
                    else if(sec < 86400 * 7 && t === true){
                        let arr = [['星期日', 'Sun.'],['星期一', 'Mon.'],['星期二', 'Tues.'],['星期三', 'Wed.'],
                            ['星期四', 'Thur.'],['星期五', 'Fri.'],['星期六', 'Sat.']]
                        let i = data.getDay();
                        return l ? arr[i][0] + res : arr[i][1] + res
                    }
                    else{
                        let m = data.getMonth() + 1;
                        m = m >= 10 ? m : '0' + m;
                        let d = data.getDate();
                        d = d >= 10 ? d : '0' + d;
                        return l ? m + '月' + d + '日' : m + '/' + d + ' '
                    }

                    function getTimes(s, e, r = 1) {
                        return Math.floor((e - s) / 1000 / r)
                    }
                }
            }
            return TimeCell;
        })()
    })
})(this, function(global, factory) {
    typeof exports === 'object' && typeof module.exports === 'object' ? 
    module.exports = factory('CommonJs') : 
    typeof define === 'function' && define.amd ? 
    define(factory) : global.TimeCell = factory('Browser');
});