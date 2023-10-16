(function(global, Factory) {
    Factory(global, function(env) {
        return (function() {
            class TimeCell {
                static options = {}
                constructor(o = {}) {
                    this.setOptions(o)
                }
                static formatO(o) {
                    o.mode = o.mode === 2 ? 2 : 1;
                    o.lang = o.lang === 'en-us' ? 'en-us' : 'zh-cn';
                    return o
                }
                static getDefault() {
                    return {
                        mode: 1,
                        lang: 'zh-cn',
                        debug: false,
                        version: '1.0.0',
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
                    let m = mode == 1 ? true : false;
                    return TimeCell.timehandle(TimeCell.timeFormat(start), TimeCell.timeFormat(end), l, m)
                }
                tc(start, end = Date.now()) {
                    return this.timecell(start, end)
                }
                static timeFormat(t) {
                    t = typeof t == 'string' ? Number(t) || new Date(t).getTime() : t;
                    return t
                }
                static timehandle(s, e, l, t) {
                    let sec = getTimes(s, e);
                    let res = '', m;
                    if (sec <= 0) {
                        res = l ? '未来' : 'futrue';
                    } else if (sec < 60) {
                        res = t ? (l ? '刚刚' : 'now') : (l ? `${sec}秒以前` :
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
                        return t ? (l ? m + CN + '以前' : m + EN + ' ago') :
                            (l ? m + CN + n + CN2 + '以前' :
                                m + EN + ' ' + n + EN2 + ' ago')
                    }

                    function getTimes(s, e, r = 1) {
                        return Math.floor((e - s) / 1000 / r)
                    }

                    return res
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