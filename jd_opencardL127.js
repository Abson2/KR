/*
4.29-5.7 51打卡超级品牌
新增开卡脚本，一次性脚本

活动地址：https://mpdz-dz.isvjcloud.com/jdbeverage/pages/sign51/sign51?bizExtString=c2hhcmVOaWNrOmsxTm9iYiUyQlAwZXIlMkJDMnN5c3hueCUyRlAyS0VMTzlpelJWcHdDeXF1MGVxVlo1YVc3Ukh6bE1vYnJ6SiUyRmU5ciUyRnVmJmhlYWRQaWNVcmw6aHR0cCUzQSUyRiUyRnN0b3JhZ2UuMzYwYnV5aW1nLmNvbSUyRmkuaW1hZ2VVcGxvYWQlMkY3MTM3MzUzNDM4MzczOTMxMzMzMzMxMzYzNDM0MzkzMjMxMzYzNTM5MzAzNTMzX21pZC5qcGcmbmlja05hbWU6JUU2JUFEJUEyJUU0JUJBJThFJUU0JUI5JThCJUU1JUJGJTgz


如需做浏览任务请设置环境变量：
//export opencard_toShop="true"


第一个账号助力作者 其他依次助力CK1
注意：第一个CK黑号会全部助力所填写的助力码


============Quantumultx===============
[task_local]
#4.29-5.7 51打卡超级品牌
33 19 * 4,5 * jd_opencardL127.js, tag=4.29-5.7 51打卡超级品牌, enabled=true
*/
let opencard_toShop = "true"
const $ = new Env("4.29-5.7 51打卡超级品牌-加密");
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';

//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [],
    cookie = '';
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
    };
} else {
    cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}

allMessage = ""
message = ""
$.hotFlag = false
$.outFlag = false
$.activityEnd = false
let lz_jdpin_token_cookie = ''
let activityCookie = ''
//此处修改助力码
let shareUuidArr = ["dTVeZ3qMLAWcAFdzlKHc/v2KELO9izRVpwCyqu0eqVZ5aW7RHzlMobrzJ/e9r/uf", "irtuLbqndkcYLBv6HiDuLsjNhNaYFy2HteErE6izlhTf9nrGY7gBkCdGU4C6z/xD", "XSL9LSiKuu13QupuJ1YV28jNhNaYFy2HteErE6izlhTf9nrGY7gBkCdGU4C6z/xD"]
let s = Math.floor((Math.random() * 3))
let n = 0
n = Math.floor((Math.random() * shareUuidArr.length))
let helpnum = shareUuidArr[n] ? shareUuidArr[n] : $.shareUuid

var _0xodQ = 'jsjiami.com.v6', _0xodQ_ = ['_0xodQ'],
    _0x48d4 = [_0xodQ, '\x6c\x6f\x67', '\x0a\u8bf7\u81ea\u884c\u786e\u8ba4\u8d26\u53f7\u4e00\u662f\u5426\u9ed1\u53f7\uff0c\u9ed1\u53f7\u4f1a\u5168\u90e8\u52a9\u529b\u5f53\u524d\u52a9\u529b', '\x0a\u9ed8\u8ba4\u5173\u95ed\u6d4f\u89c8\u4efb\u52a1\uff0c\u8bf7\u5728\u6709\u6c34\u7684\u60c5\u51b5\u4e0b\u5f00\u542f\u53d8\u91cf\x0a', '\x0a\u5f53\u524d\u52a9\u529b\uff1a', '\x0a\u5f53\u524d\u6d3b\u52a8\u53e3\u4ee4\uff1a\x20\x31\x39\x3a\x2f\x28\x49\x34\x69\x79\x39\x34\x62\x61\x74\x52\x56\x29\uff0c\u5347\u7ea7\u65b0\u7248\x4a\u03b9\u03b9\u012b\x6e\x67\u3057\u68df\x41\u03c1\u03c1\u6253\u5361\u8d85\u7ea7\u54c1\u724c\uff0c\u8d62\u4eac\u8c46\u5927\u793c\u5305', '\x6d\x73\x67', '\x6e\x61\x6d\x65', '\u3010\u63d0\u793a\u3011\u8bf7\u5148\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65\x0a\u76f4\u63a5\u4f7f\u7528\x4e\x6f\x62\x79\x44\x61\u7684\u4eac\u4e1c\u7b7e\u5230\u83b7\u53d6', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f', '\x61\x70\x70\x6b\x65\x79', '\x32\x31\x36\x39\x39\x30\x34\x35', '\x75\x73\x65\x72\x49\x64', '\x31\x30\x32\x39\x39\x31\x37\x31', '\x61\x63\x74\x49\x64', '\x73\x63\x65\x6e\x69\x63\x53\x70\x6f\x74\x32\x32\x30\x34\x31\x39', '\x4d\x69\x78\x4e\x69\x63\x6b\x73', '\x69\x6e\x76\x69\x74\x65\x4e\x69\x63\x6b', '\x6c\x65\x6e\x67\x74\x68', '\x55\x73\x65\x72\x4e\x61\x6d\x65', '\x6d\x61\x74\x63\x68', '\x69\x6e\x64\x65\x78', '\x62\x65\x61\x6e', '\x68\x6f\x74\x46\x6c\x61\x67', '\x6e\x69\x63\x6b\x4e\x61\x6d\x65', '\x0a\x0a\x2a\x2a\x2a\x2a\x2a\x2a\u5f00\u59cb\u3010\u4eac\u4e1c\u8d26\u53f7', '\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x0a', '\x6f\x75\x74\x46\x6c\x61\x67', '\x61\x63\x74\x69\x76\x69\x74\x79\x45\x6e\x64', '\u6b64\x69\x70\u5df2\u88ab\u9650\u5236\uff0c\u8bf7\u8fc7\x31\x30\u5206\u949f\u540e\u518d\u6267\u884c\u811a\u672c', '\x69\x73\x4e\x6f\x64\x65', '\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79', '\x63\x61\x74\x63\x68', '\x6c\x6f\x67\x45\x72\x72', '\x66\x69\x6e\x61\x6c\x6c\x79', '\x64\x6f\x6e\x65', '\x68\x61\x73\x45\x6e\x64', '\x65\x6e\x64\x54\x69\x6d\x65', '\x54\x6f\x6b\x65\x6e', '\x50\x69\x6e', '\x4d\x69\x78\x4e\x69\x63\x6b', '\u6b64\x69\x70\u5df2\u88ab\u9650\u5236\uff0c\u8bf7\u8fc7\x31\x30\u5206\u949f\u540e\u518d\u6267\u884c\u811a\u672c\x0a', '\x69\x73\x76\x4f\x62\x66\x75\x73\x63\x61\x74\x6f\x72', '\u83b7\u53d6\x5b\x74\x6f\x6b\x65\x6e\x5d\u5931\u8d25\uff01', '\x61\x63\x74\x69\x76\x69\x74\x79\x5f\x6c\x6f\x61\x64', '\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65\u5931\u8d25', '\x74\x6f\x42\x69\x6e\x64', '\x6f\x70\x65\x6e\x4c\x69\x73\x74', '\x77\x61\x69\x74', '\x6d\x69\x73\x73\x69\x6f\x6e\x54\x79\x70\x65', '\x73\x70\x65\x63\x69\x61\x6c\x53\x69\x67\x6e', '\x6d\x69\x73\x73\x69\x6f\x6e', '\x73\x68\x6f\x70\x4c\x69\x73\x74', '\x6a\x6f\x69\x6e\x4d\x65\x6d\x62\x65\x72', '\x69\x73\x56\x69\x70', '\x6f\x70\x65\x6e\x43\x61\x72\x64\x55\x72\x6c', '\x6f\x70\x65\x6e\x43\x61\x72\x64', '\x6a\x6f\x69\x6e\x56\x65\x6e\x64\x65\x72\x49\x64', '\x72\x61\x6e\x64\x6f\x6d', '\x65\x72\x72\x6f\x72\x4a\x6f\x69\x6e\x53\x68\x6f\x70', '\x69\x6e\x64\x65\x78\x4f\x66', '\u6d3b\u52a8\u592a\u706b\u7206\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5', '\u7b2c\x31\u6b21\x20\u91cd\u65b0\u5f00\u5361', '\u7b2c\x32\u6b21\x20\u91cd\u65b0\u5f00\u5361', '\x68\x61\x73\x43\x6f\x6c\x6c\x65\x63\x74\x53\x68\x6f\x70', '\x63\x6f\x6c\x6c\x65\x63\x74\x53\x68\x6f\x70', '\u5df2\u7ecf\u5173\u6ce8', '\x74\x72\x75\x65', '\u9ed8\u8ba4\u6d4f\u89c8\u4efb\u52a1\u6b21\u6570\x3a', '\u6b21\u6d4f\u89c8', '\x76\x69\x65\x77\x53\x68\x6f\x70', '\x73\x68\x6f\x70\x49\x64', '\u6d4f\u89c8\u592a\u591a\u6b21\uff0c\u591a\u4f59\u7684\u6b21\u6570\u8bf7\u518d\u6267\u884c\u811a\u672c', '\u5982\u9700\u6d4f\u89c8\u5e97\u94fa\u8bf7\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\x5b\x6f\x70\x65\x6e\x63\x61\x72\x64\x5f\x74\x6f\x53\x68\x6f\x70\x5d\u4e3a\x22\x74\x72\x75\x65\x22', '\x72\x75\x6e\x46\x61\x6c\x61\x67', '\x75\x73\x65\x64\x43\x68\x61\x6e\x63\x65', '\u7acb\u5373\u51fa\u53d1\u6b21\u6570\u4e3a\x3a', '\u6b21\u7acb\u5373\u51fa\u53d1', '\u62bd\u5956\u592a\u591a\u6b21\uff0c\u591a\u4f59\u7684\u6b21\u6570\u8bf7\u518d\u6267\u884c\u811a\u672c', '\x6d\x79\x41\x77\x61\x72\x64', '\x6d\x69\x73\x73\x69\x6f\x6e\x49\x6e\x76\x69\x74\x65\x4c\x69\x73\x74', '\u5f53\u524d\u52a9\u529b\x3a', '\u540e\u9762\u7684\u53f7\u90fd\u4f1a\u52a9\u529b\x3a', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6d\x70\x64\x7a\x2d\x64\x7a\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d', '\x50\x4f\x53\x54', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x69\x73\x76\x4f\x62\x66\x75\x73\x63\x61\x74\x6f\x72', '\x62\x6f\x64\x79\x3d\x25\x37\x42\x25\x32\x32\x75\x72\x6c\x25\x32\x32\x25\x33\x41\x25\x32\x32\x68\x74\x74\x70\x73\x25\x33\x41\x25\x35\x43\x2f\x25\x35\x43\x2f\x6d\x70\x64\x7a\x2d\x64\x7a\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x25\x35\x43\x2f\x6a\x64\x62\x65\x76\x65\x72\x61\x67\x65\x25\x35\x43\x2f\x70\x61\x67\x65\x73\x25\x35\x43\x2f\x73\x69\x67\x6e\x35\x31\x25\x35\x43\x2f\x73\x69\x67\x6e\x35\x31\x3f\x62\x69\x7a\x45\x78\x74\x53\x74\x72\x69\x6e\x67\x25\x33\x44\x63\x32\x68\x68\x63\x6d\x56\x4f\x61\x57\x4e\x72\x4f\x6a\x68\x30\x57\x46\x4a\x51\x54\x45\x46\x6f\x62\x6b\x38\x79\x61\x45\x55\x34\x56\x31\x56\x50\x55\x48\x42\x79\x59\x32\x4d\x33\x56\x48\x64\x4b\x51\x32\x31\x4f\x5a\x54\x68\x4f\x52\x6e\x5a\x6f\x63\x45\x6b\x77\x57\x47\x31\x4b\x52\x46\x56\x4d\x56\x6c\x55\x78\x4d\x44\x67\x6c\x4d\x6b\x4a\x56\x65\x47\x78\x49\x64\x7a\x64\x78\x62\x31\x56\x31\x53\x45\x45\x30\x52\x69\x5a\x6f\x5a\x57\x46\x6b\x55\x47\x6c\x6a\x56\x58\x4a\x73\x4f\x6d\x68\x30\x64\x48\x41\x6c\x4d\x30\x45\x6c\x4d\x6b\x59\x6c\x4d\x6b\x5a\x7a\x64\x47\x39\x79\x59\x57\x64\x6c\x4c\x6a\x4d\x32\x4d\x47\x4a\x31\x65\x57\x6c\x74\x5a\x79\x35\x6a\x62\x32\x30\x6c\x4d\x6b\x5a\x70\x4c\x6d\x6c\x74\x59\x57\x64\x6c\x56\x58\x42\x73\x62\x32\x46\x6b\x4a\x54\x4a\x47\x4e\x7a\x63\x33\x4e\x54\x59\x34\x4e\x6a\x55\x32\x5a\x54\x63\x7a\x4e\x7a\x51\x32\x4d\x54\x63\x79\x4d\x7a\x45\x7a\x4e\x6a\x4d\x77\x4d\x7a\x51\x7a\x4f\x54\x4d\x34\x4d\x7a\x63\x7a\x4f\x44\x4d\x78\x4d\x7a\x4d\x7a\x4d\x54\x4d\x78\x4d\x7a\x4e\x66\x62\x57\x6c\x6b\x4c\x6d\x70\x77\x5a\x79\x5a\x75\x61\x57\x4e\x72\x54\x6d\x46\x74\x5a\x54\x6f\x6c\x52\x54\x59\x6c\x4f\x45\x4d\x6c\x4f\x55\x45\x6c\x52\x54\x63\x6c\x4f\x44\x67\x6c\x51\x6a\x45\x6c\x52\x54\x63\x6c\x4f\x45\x59\x6c\x4f\x45\x45\x6c\x52\x54\x55\x6c\x51\x55\x55\x6c\x4f\x55\x51\x6c\x52\x54\x55\x6c\x51\x55\x55\x6c\x4f\x55\x51\x25\x33\x44\x25\x32\x36\x73\x69\x64\x25\x33\x44\x38\x34\x37\x36\x34\x38\x30\x65\x38\x32\x37\x31\x62\x61\x32\x30\x39\x63\x30\x35\x35\x61\x66\x63\x61\x36\x33\x61\x39\x32\x34\x77\x25\x32\x36\x75\x6e\x5f\x61\x72\x65\x61\x25\x33\x44\x34\x5f\x35\x30\x39\x35\x30\x5f\x35\x30\x39\x35\x37\x5f\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x37\x44\x26\x62\x75\x69\x6c\x64\x3d\x31\x36\x37\x39\x36\x33\x26\x63\x6c\x69\x65\x6e\x74\x3d\x61\x70\x70\x6c\x65\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x31\x30\x2e\x33\x2e\x36\x26\x64\x5f\x62\x72\x61\x6e\x64\x3d\x61\x70\x70\x6c\x65\x26\x64\x5f\x6d\x6f\x64\x65\x6c\x3d\x69\x50\x68\x6f\x6e\x65\x38\x25\x32\x43\x32\x26\x65\x66\x3d\x31\x26\x65\x69\x64\x3d\x65\x69\x64\x49\x39\x39\x34\x62\x38\x31\x32\x31\x32\x33\x73\x31\x50\x52\x68\x6d\x62\x2f\x33\x36\x52\x4e\x57\x32\x75\x51\x4a\x61\x72\x4a\x32\x37\x31\x7a\x30\x59\x5a\x25\x32\x42\x76\x34\x41\x50\x63\x72\x6a\x37\x35\x79\x6d\x44\x65\x25\x32\x42\x30\x5a\x36\x25\x32\x42\x6e\x54\x57\x53\x4c\x79\x6b\x59\x54\x6e\x70\x52\x38\x70\x2f\x4e\x77\x78\x70\x6f\x72\x50\x59\x38\x4a\x64\x62\x45\x77\x56\x49\x6f\x48\x36\x25\x32\x42\x74\x4a\x54\x48\x6d\x2f\x75\x4c\x30\x38\x74\x75\x4f\x36\x67\x31\x30\x68\x6d\x4e\x50\x26\x65\x70\x3d\x25\x37\x42\x25\x32\x32\x63\x69\x70\x68\x65\x72\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x35\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x25\x32\x32\x25\x33\x41\x25\x37\x42\x25\x32\x32\x73\x63\x72\x65\x65\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x4a\x53\x30\x43\x73\x65\x79\x43\x74\x4b\x34\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6f\x73\x56\x65\x72\x73\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x4a\x47\x6b\x45\x4b\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6f\x70\x65\x6e\x75\x64\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x5a\x57\x59\x35\x59\x74\x54\x76\x59\x77\x56\x73\x43\x7a\x59\x34\x44\x57\x59\x6e\x59\x32\x56\x74\x44\x4e\x55\x30\x5a\x74\x56\x77\x43\x4e\x55\x32\x45\x51\x54\x74\x5a\x74\x59\x31\x44\x74\x54\x75\x44\x74\x75\x34\x44\x6d\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x72\x65\x61\x25\x32\x32\x25\x33\x41\x25\x32\x32\x44\x50\x38\x31\x43\x4e\x75\x31\x43\x50\x38\x31\x43\x4e\x75\x31\x44\x31\x38\x6d\x25\x32\x32\x25\x32\x43\x25\x32\x32\x75\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x61\x51\x66\x31\x5a\x52\x64\x78\x62\x32\x72\x34\x6f\x76\x5a\x31\x45\x4a\x5a\x68\x63\x78\x59\x6c\x56\x4e\x5a\x53\x5a\x7a\x30\x39\x25\x32\x32\x25\x37\x44\x25\x32\x43\x25\x32\x32\x74\x73\x25\x32\x32\x25\x33\x41\x31\x36\x35\x31\x31\x31\x35\x30\x37\x33\x25\x32\x43\x25\x32\x32\x68\x64\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x4a\x4d\x39\x46\x31\x79\x77\x55\x50\x77\x66\x6c\x76\x4d\x49\x70\x59\x50\x6f\x6b\x30\x74\x74\x35\x6b\x39\x6b\x57\x34\x41\x72\x4a\x45\x55\x33\x6c\x66\x4c\x68\x78\x42\x71\x77\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x76\x65\x72\x73\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x2e\x30\x2e\x33\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x6e\x61\x6d\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x63\x6f\x6d\x2e\x33\x36\x30\x62\x75\x79\x2e\x6a\x64\x6d\x6f\x62\x69\x6c\x65\x25\x32\x32\x25\x32\x43\x25\x32\x32\x72\x69\x64\x78\x25\x32\x32\x25\x33\x41\x2d\x31\x25\x37\x44\x26\x65\x78\x74\x3d\x25\x37\x42\x25\x32\x32\x70\x72\x73\x74\x61\x74\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x70\x76\x63\x53\x74\x75\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x25\x32\x32\x25\x37\x44\x26\x69\x73\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3d\x4e\x26\x6a\x6f\x79\x63\x69\x6f\x75\x73\x3d\x31\x31\x36\x26\x6c\x61\x6e\x67\x3d\x7a\x68\x5f\x43\x4e\x26\x6e\x65\x74\x77\x6f\x72\x6b\x54\x79\x70\x65\x3d\x77\x69\x66\x69\x26\x6e\x65\x74\x77\x6f\x72\x6b\x6c\x69\x62\x74\x79\x70\x65\x3d\x4a\x44\x4e\x65\x74\x77\x6f\x72\x6b\x42\x61\x73\x65\x41\x46\x26\x70\x61\x72\x74\x6e\x65\x72\x3d\x61\x70\x70\x6c\x65\x26\x72\x66\x73\x3d\x30\x30\x30\x30\x26\x73\x63\x6f\x70\x65\x3d\x30\x31\x26\x73\x69\x67\x6e\x3d\x61\x38\x37\x32\x32\x31\x38\x61\x30\x62\x35\x62\x38\x62\x62\x66\x32\x30\x37\x31\x38\x32\x31\x37\x66\x30\x38\x34\x62\x31\x65\x64\x26\x73\x74\x3d\x31\x36\x35\x31\x32\x30\x35\x37\x31\x30\x38\x31\x34\x26\x73\x76\x3d\x31\x32\x30\x26\x75\x65\x6d\x70\x73\x3d\x30\x2d\x30\x26\x75\x74\x73\x3d\x30\x66\x33\x31\x54\x56\x52\x6a\x42\x53\x73\x71\x6e\x64\x75\x34\x2f\x6a\x67\x55\x50\x7a\x36\x75\x79\x6d\x79\x35\x30\x4d\x51\x4a\x47\x44\x76\x49\x55\x4d\x53\x33\x36\x4e\x2f\x6c\x37\x6d\x4a\x31\x4e\x56\x7a\x53\x69\x4b\x43\x73\x4a\x44\x73\x36\x57\x67\x65\x63\x46\x69\x64\x36\x63\x6b\x58\x68\x32\x4f\x36\x35\x68\x36\x55\x70\x35\x6d\x52\x56\x66\x4d\x39\x46\x78\x79\x71\x53\x66\x37\x41\x6e\x41\x55\x6b\x6b\x78\x5a\x75\x43\x45\x65\x6c\x4d\x4a\x77\x65\x4b\x45\x30\x71\x6d\x78\x4b\x6f\x36\x52\x62\x5a\x50\x6d\x76\x46\x63\x73\x4f\x25\x32\x42\x42\x53\x69\x76\x63\x35\x45\x69\x58\x44\x4e\x47\x52\x32\x2f\x50\x6c\x79\x74\x35\x48\x43\x4f\x77\x34\x59\x68\x56\x33\x6c\x38\x52\x35\x52\x62\x44\x55\x4f\x76\x71\x74\x34\x66\x64\x54\x52\x6b\x4b\x36\x62\x6b\x51\x32\x38\x6b\x25\x32\x42\x38\x4c\x66\x37\x33\x2f\x43\x69\x55\x48\x52\x25\x32\x42\x79\x5a\x6a\x4c\x6a\x6c\x66\x2f\x70\x35\x30\x5a\x71\x39\x41\x25\x33\x44\x25\x33\x44', '\x2f\x64\x6d\x2f\x66\x72\x6f\x6e\x74\x2f\x6a\x64\x53\x63\x65\x6e\x69\x63\x53\x70\x6f\x74\x2f\x61\x63\x74\x69\x76\x69\x74\x79\x2f\x6c\x6f\x61\x64\x3f\x6f\x70\x65\x6e\x5f\x69\x64\x3d\x26\x6d\x69\x78\x5f\x6e\x69\x63\x6b\x3d', '\x2f\x6a\x64\x53\x63\x65\x6e\x69\x63\x53\x70\x6f\x74\x2f\x61\x63\x74\x69\x76\x69\x74\x79\x2f\x6c\x6f\x61\x64', '\x2f\x64\x6d\x2f\x66\x72\x6f\x6e\x74\x2f\x6a\x64\x53\x63\x65\x6e\x69\x63\x53\x70\x6f\x74\x2f\x73\x68\x6f\x70\x2f\x67\x65\x74\x53\x68\x6f\x70\x41\x6e\x64\x43\x6f\x6d\x6d\x6f\x64\x69\x74\x79\x3f\x6f\x70\x65\x6e\x5f\x69\x64\x3d\x26\x6d\x69\x78\x5f\x6e\x69\x63\x6b\x3d', '\x2f\x6a\x64\x53\x63\x65\x6e\x69\x63\x53\x70\x6f\x74\x2f\x73\x68\x6f\x70\x2f\x67\x65\x74\x53\x68\x6f\x70\x41\x6e\x64\x43\x6f\x6d\x6d\x6f\x64\x69\x74\x79', '\x2f\x64\x6d\x2f\x66\x72\x6f\x6e\x74\x2f\x6a\x64\x53\x63\x65\x6e\x69\x63\x53\x70\x6f\x74\x2f\x73\x63\x65\x6e\x69\x63\x53\x70\x6f\x74\x2f\x63\x6f\x6e\x74\x65\x6e\x74\x48\x65\x6c\x70\x3f\x6f\x70\x65\x6e\x5f\x69\x64\x3d\x26\x6d\x69\x78\x5f\x6e\x69\x63\x6b\x3d', '\x2f\x6a\x64\x53\x63\x65\x6e\x69\x63\x53\x70\x6f\x74\x2f\x73\x63\x65\x6e\x69\x63\x53\x70\x6f\x74\x2f\x63\x6f\x6e\x74\x65\x6e\x74\x48\x65\x6c\x70', '\x2f\x64\x6d\x2f\x66\x72\x6f\x6e\x74\x2f\x6a\x64\x53\x63\x65\x6e\x69\x63\x53\x70\x6f\x74\x2f\x6d\x69\x73\x73\x69\x6f\x6e\x2f\x63\x6f\x6d\x70\x6c\x65\x74\x65\x4d\x69\x73\x73\x69\x6f\x6e\x3f\x6f\x70\x65\x6e\x5f\x69\x64\x3d\x26\x6d\x69\x78\x5f\x6e\x69\x63\x6b\x3d', '\x73\x68\x61\x72\x65\x41\x63\x74', '\x2f\x6a\x64\x53\x63\x65\x6e\x69\x63\x53\x70\x6f\x74\x2f\x6d\x69\x73\x73\x69\x6f\x6e\x2f\x63\x6f\x6d\x70\x6c\x65\x74\x65\x4d\x69\x73\x73\x69\x6f\x6e', '\x2f\x64\x6d\x2f\x66\x72\x6f\x6e\x74\x2f\x6a\x64\x53\x63\x65\x6e\x69\x63\x53\x70\x6f\x74\x2f\x73\x63\x65\x6e\x69\x63\x53\x70\x6f\x74\x2f\x63\x6c\x6f\x63\x6b\x49\x6e\x3f\x6f\x70\x65\x6e\x5f\x69\x64\x3d\x26\x6d\x69\x78\x5f\x6e\x69\x63\x6b\x3d', '\x2f\x6a\x64\x53\x63\x65\x6e\x69\x63\x53\x70\x6f\x74\x2f\x73\x63\x65\x6e\x69\x63\x53\x70\x6f\x74\x2f\x63\x6c\x6f\x63\x6b\x49\x6e', '\x66\x6f\x6c\x6c\x6f\x77\x53\x68\x6f\x70', '\x61\x64\x64\x43\x61\x72\x74', '\x2f\x64\x6d\x2f\x66\x72\x6f\x6e\x74\x2f\x6a\x64\x53\x63\x65\x6e\x69\x63\x53\x70\x6f\x74\x2f\x61\x64\x64\x43\x61\x72\x74\x3f\x6d\x69\x78\x5f\x6e\x69\x63\x6b\x3d', '\x2f\x6f\x70\x65\x6e\x43\x61\x72\x64\x4e\x65\x77\x2f\x61\x64\x64\x43\x61\x72\x74', '\x2f\x64\x6d\x2f\x66\x72\x6f\x6e\x74\x2f\x6a\x64\x53\x63\x65\x6e\x69\x63\x53\x70\x6f\x74\x2f\x61\x77\x61\x72\x64\x73\x2f\x6c\x69\x73\x74\x3f\x6f\x70\x65\x6e\x5f\x69\x64\x3d\x26\x6d\x69\x78\x5f\x6e\x69\x63\x6b\x3d', '\x2f\x6a\x64\x53\x63\x65\x6e\x69\x63\x53\x70\x6f\x74\x2f\x61\x77\x61\x72\x64\x73\x2f\x6c\x69\x73\x74', '\x2f\x64\x6d\x2f\x66\x72\x6f\x6e\x74\x2f\x6a\x64\x53\x63\x65\x6e\x69\x63\x53\x70\x6f\x74\x2f\x63\x75\x73\x74\x6f\x6d\x65\x72\x2f\x69\x6e\x76\x69\x74\x65\x4c\x69\x73\x74\x3f\x6f\x70\x65\x6e\x5f\x69\x64\x3d\x26\x6d\x69\x78\x5f\x6e\x69\x63\x6b\x3d', '\x2f\x6a\x64\x53\x63\x65\x6e\x69\x63\x53\x70\x6f\x74\x2f\x63\x75\x73\x74\x6f\x6d\x65\x72\x2f\x69\x6e\x76\x69\x74\x65\x4c\x69\x73\x74', '\x70\x6f\x73\x74', '\x73\x74\x61\x74\x75\x73\x43\x6f\x64\x65', '\x74\x6f\x53\x74\x72', '\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5', '\x61\x63\x63\x65\x73\x73\x4c\x6f\x67\x57\x69\x74\x68\x41\x44', '\x64\x72\x61\x77\x43\x6f\x6e\x74\x65\x6e\x74', '\x70\x61\x72\x73\x65', '\x20\u6267\u884c\u4efb\u52a1\u5f02\u5e38', '\x6f\x62\x6a\x65\x63\x74', '\x65\x72\x72\x63\x6f\x64\x65', '\x74\x6f\x6b\x65\x6e', '\x75\x6e\x64\x65\x66\x69\x6e\x65\x64', '\x6d\x65\x73\x73\x61\x67\x65', '\x6c\x6f\x61\x64\x55\x6e\x69\x74\x65\x4f\x70\x65\x6e\x43\x61\x72\x64', '\x73\x65\x74\x4d\x69\x78\x4e\x69\x63\x6b', '\x75\x6e\x69\x74\x65\x4f\x70\x65\x6e\x43\x61\x72\x64\x4f\x6e\x65', '\x63\x68\x65\x63\x6b\x4f\x70\x65\x6e\x43\x61\x72\x64', '\x73\x75\x63\x63\x65\x73\x73', '\x64\x61\x74\x61', '\x73\x74\x61\x74\x75\x73', '\x69\x73\x4f\x70\x65\x6e\x43\x61\x72\x64', '\x72\x65\x6d\x61\x72\x6b', '\u7ed1\u5b9a\u6210\u529f', '\x63\x75\x73\x41\x63\x74\x69\x76\x69\x74\x79', '\x6d\x69\x73\x73\x69\x6f\x6e\x43\x75\x73\x74\x6f\x6d\x65\x72', '\x62\x75\x79\x65\x72\x4e\x69\x63\x6b', '\x72\x65\x6d\x61\x69\x6e\x43\x68\x61\x6e\x63\x65', '\u8d76\u7d27\u53bb\u5f00\u5361\u5427', '\x75\x6e\x69\x74\x65\x4f\x70\x65\x6e\x43\x61\x72', '\u6211\u7684\u5956\u54c1\uff1a', '\x6c\x69\x73\x74', '\x61\x77\x61\x72\x64\x44\x65\x73', '\u5171\u83b7\u5f97', '\u4eac\u8c46\x0a\u65e0\u6cd5\u5224\u65ad\u5956\u52b1\u662f\u5426\u4e3a\u9080\u8bf7\u5956\u52b1\uff0c\u6240\u4ee5\u76f4\u63a5\u663e\u793a\u83b7\u5f97\u591a\u5c11\u8c46\x0a', '\u9080\u8bf7\u4eba\u6570\x28', '\x74\x6f\x74\x61\x6c', '\x65\x72\x72\x6f\x72\x4d\x65\x73\x73\x61\x67\x65', '\u6d3b\u52a8\u672a\u5f00\u59cb', '\x2d\x3e\x20', '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e', '\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72', '\x7a\x68\x2d\x63\x6e', '\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65', '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64', '\x58\x4d\x4c\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74', '\x4f\x72\x69\x67\x69\x6e', '\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65', '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38', '\x43\x6f\x6f\x6b\x69\x65', '\x32\x2e\x30', '\x6e\x6f\x77', '\x70\x61\x72\x61\x6d\x73', '\x61\x64\x6d\x4a\x73\x6f\x6e', '\x6a\x64\x61\x70\x70\x3b\x69\x50\x68\x6f\x6e\x65\x3b\x31\x30\x2e\x31\x2e\x34\x3b\x31\x33\x2e\x31\x2e\x32\x3b', '\x3b\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x77\x69\x66\x69\x3b\x6d\x6f\x64\x65\x6c\x2f\x69\x50\x68\x6f\x6e\x65\x38\x2c\x31\x3b\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2f\x32\x33\x30\x38\x34\x36\x30\x36\x31\x31\x3b\x61\x70\x70\x42\x75\x69\x6c\x64\x2f\x31\x36\x37\x38\x31\x34\x3b\x6a\x64\x53\x75\x70\x70\x6f\x72\x74\x44\x61\x72\x6b\x4d\x6f\x64\x65\x2f\x30\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x31\x33\x5f\x31\x5f\x32\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x3b\x73\x75\x70\x70\x6f\x72\x74\x4a\x44\x53\x48\x57\x4b\x2f\x31', '\x61\x62\x63\x64\x65\x66\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39', '\x63\x68\x61\x72\x41\x74', '\x66\x6c\x6f\x6f\x72', '\x73\x74\x72\x69\x6e\x67', '\u8bf7\u52ff\u968f\u610f\u5728\x42\x6f\x78\x4a\x73\u8f93\u5165\u6846\u4fee\u6539\u5185\u5bb9\x0a\u5efa\u8bae\u901a\u8fc7\u811a\u672c\u53bb\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65', '\x73\x68\x6f\x70\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64', '\x2c\x22\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x22\x3a', '\x32\x30\x32\x32\x30\x34\x31\x32\x31\x36\x34\x36\x33\x34\x33\x30\x36\x25\x33\x42\x66\x35\x32\x39\x39\x33\x39\x32\x61\x32\x30\x30\x64\x36\x64\x39\x66\x66\x63\x65\x64\x39\x39\x37\x65\x35\x37\x39\x30\x64\x63\x63\x25\x33\x42\x31\x36\x39\x66\x31\x25\x33\x42\x74\x6b\x30\x32\x77\x63\x30\x66\x39\x31\x63\x38\x61\x31\x38\x6e\x76\x57\x56\x4d\x47\x72\x51\x4f\x31\x69\x46\x6c\x70\x51\x72\x65\x32\x53\x68\x32\x6d\x47\x74\x4e\x72\x6f\x31\x6c\x30\x55\x70\x5a\x71\x47\x4c\x52\x62\x48\x69\x79\x71\x66\x61\x55\x51\x61\x50\x79\x36\x34\x57\x54\x37\x75\x7a\x37\x45\x25\x32\x46\x67\x75\x6a\x47\x41\x42\x35\x30\x6b\x79\x4f\x37\x68\x77\x42\x79\x57\x4b\x25\x33\x42\x37\x37\x63\x38\x61\x30\x35\x65\x36\x61\x36\x36\x66\x61\x65\x65\x64\x30\x30\x65\x34\x65\x32\x38\x30\x61\x64\x38\x63\x34\x30\x66\x61\x62\x36\x30\x37\x32\x33\x62\x35\x62\x35\x36\x31\x32\x33\x30\x33\x38\x30\x65\x62\x34\x30\x37\x65\x31\x39\x33\x35\x34\x66\x37\x25\x33\x42\x33\x2e\x30\x25\x33\x42\x31\x36\x34\x39\x37\x35\x33\x31\x39\x34\x33\x30\x36', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x61\x70\x70\x69\x64\x3d\x6a\x64\x5f\x73\x68\x6f\x70\x5f\x6d\x65\x6d\x62\x65\x72\x26\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x62\x69\x6e\x64\x57\x69\x74\x68\x56\x65\x6e\x64\x65\x72\x26\x62\x6f\x64\x79\x3d\x7b\x22\x76\x65\x6e\x64\x65\x72\x49\x64\x22\x3a\x22', '\x22\x2c\x22\x73\x68\x6f\x70\x49\x64\x22\x3a\x22', '\x22\x2c\x22\x62\x69\x6e\x64\x42\x79\x56\x65\x72\x69\x66\x79\x43\x6f\x64\x65\x46\x6c\x61\x67\x22\x3a\x31\x2c\x22\x72\x65\x67\x69\x73\x74\x65\x72\x45\x78\x74\x65\x6e\x64\x22\x3a\x7b\x7d\x2c\x22\x77\x72\x69\x74\x65\x43\x68\x69\x6c\x64\x46\x6c\x61\x67\x22\x3a\x30', '\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x34\x30\x31\x7d\x26\x63\x6c\x69\x65\x6e\x74\x3d\x48\x35\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x39\x2e\x32\x2e\x30\x26\x75\x75\x69\x64\x3d\x38\x38\x38\x38\x38\x26\x68\x35\x73\x74\x3d', '\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e\x3b\x20\x43\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d', '\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d', '\x2a\x2f\x2a', '\x67\x65\x74', '\x74\x6f\x4f\x62\x6a', '\x72\x65\x73\x75\x6c\x74', '\x67\x69\x66\x74\x49\x6e\x66\x6f', '\x67\x69\x66\x74\x4c\x69\x73\x74', '\u5165\u4f1a\u83b7\u5f97\x3a', '\x64\x69\x73\x63\x6f\x75\x6e\x74\x53\x74\x72\x69\x6e\x67', '\x70\x72\x69\x7a\x65\x4e\x61\x6d\x65', '\x73\x65\x63\x6f\x6e\x64\x4c\x69\x6e\x65\x44\x65\x73\x63', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x61\x70\x70\x69\x64\x3d\x6a\x64\x5f\x73\x68\x6f\x70\x5f\x6d\x65\x6d\x62\x65\x72\x26\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x67\x65\x74\x53\x68\x6f\x70\x4f\x70\x65\x6e\x43\x61\x72\x64\x49\x6e\x66\x6f\x26\x62\x6f\x64\x79\x3d\x25\x37\x42\x25\x32\x32\x76\x65\x6e\x64\x65\x72\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32', '\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x68\x61\x6e\x6e\x65\x6c\x25\x32\x32\x25\x33\x41\x34\x30\x31\x25\x37\x44\x26\x63\x6c\x69\x65\x6e\x74\x3d\x48\x35\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x39\x2e\x32\x2e\x30\x26\x75\x75\x69\x64\x3d\x38\x38\x38\x38\x38', '\u5165\u4f1a\x3a', '\x73\x68\x6f\x70\x4d\x65\x6d\x62\x65\x72\x43\x61\x72\x64\x49\x6e\x66\x6f', '\x76\x65\x6e\x64\x65\x72\x43\x61\x72\x64\x4e\x61\x6d\x65', '\x69\x6e\x74\x65\x72\x65\x73\x74\x73\x52\x75\x6c\x65\x4c\x69\x73\x74', '\x69\x6e\x74\x65\x72\x65\x73\x74\x73\x49\x6e\x66\x6f', '\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64', '\x6a\x5a\x73\x6a\x68\x57\x69\x68\x4e\x61\x6d\x69\x6c\x46\x57\x4a\x4f\x2e\x62\x63\x79\x55\x6f\x6d\x6e\x2e\x48\x51\x76\x36\x3d\x3d'];

function _0x4c50(_0xdb8b50, _0x203368) {
    _0xdb8b50 = ~~'0x'['concat'](_0xdb8b50['slice'](0x0));
    var _0x3469e3 = _0x48d4[_0xdb8b50];
    return _0x3469e3;
};(function (_0x49c70f, _0x1f4456) {
    var _0x1a6df7 = 0x0;
    for (_0x1f4456 = _0x49c70f['shift'](_0x1a6df7 >> 0x2); _0x1f4456 && _0x1f4456 !== (_0x49c70f['pop'](_0x1a6df7 >> 0x3) + '')['replace'](/[ZhWhNlFWJObyUnHQ=]/g, ''); _0x1a6df7++) {
        _0x1a6df7 = _0x1a6df7 ^ 0xe2e09;
    }
}(_0x48d4, _0x4c50));
!(async () => {
    console[_0x4c50('0')](_0x4c50('1'));
    console[_0x4c50('0')](_0x4c50('2'));
    console[_0x4c50('0')](_0x4c50('3') + helpnum);
    console[_0x4c50('0')](_0x4c50('4'));
    if (!cookiesArr[0x0]) {
        $[_0x4c50('5')]($[_0x4c50('6')], _0x4c50('7'), _0x4c50('8'), {'open-url': _0x4c50('8')});
        return;
    }
    $[_0x4c50('9')] = _0x4c50('a');
    $[_0x4c50('b')] = _0x4c50('c');
    $[_0x4c50('d')] = _0x4c50('e');
    $[_0x4c50('f')] = '';
    $[_0x4c50('10')] = helpnum;
    for (let _0x419f5a = 0x0; _0x419f5a < cookiesArr[_0x4c50('11')]; _0x419f5a++) {
        cookie = cookiesArr[_0x419f5a];
        if (cookie) {
            $[_0x4c50('12')] = decodeURIComponent(cookie[_0x4c50('13')](/pt_pin=([^; ]+)(?=;?)/) && cookie[_0x4c50('13')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $[_0x4c50('14')] = _0x419f5a + 0x1;
            message = '';
            $[_0x4c50('15')] = 0x0;
            $[_0x4c50('16')] = ![];
            $[_0x4c50('17')] = '';
            console[_0x4c50('0')](_0x4c50('18') + $[_0x4c50('14')] + '\u3011' + ($[_0x4c50('17')] || $[_0x4c50('12')]) + _0x4c50('19'));
            await getUA();
            await run();
            if ($[_0x4c50('1a')] || $[_0x4c50('1b')]) break;
        }
    }
    if ($[_0x4c50('1a')]) {
        let _0xc5444b = _0x4c50('1c');
        $[_0x4c50('5')]($[_0x4c50('6')], '', '' + _0xc5444b);
        if ($[_0x4c50('1d')]()) await notify[_0x4c50('1e')]('' + $[_0x4c50('6')], '' + _0xc5444b);
    }
})()[_0x4c50('1f')](_0xf92809 => $[_0x4c50('20')](_0xf92809))[_0x4c50('21')](() => $[_0x4c50('22')]());

async function run() {
    try {
        $[_0x4c50('23')] = !![];
        $[_0x4c50('24')] = 0x0;
        lz_jdpin_token_cookie = '';
        $[_0x4c50('25')] = '';
        $[_0x4c50('26')] = '';
        $[_0x4c50('27')] = '';
        let _0x3a3908 = ![];
        if ($[_0x4c50('1b')]) return;
        if ($[_0x4c50('1a')]) {
            console[_0x4c50('0')](_0x4c50('28'));
            return;
        }
        await takePostRequest(_0x4c50('29'));
        if ($[_0x4c50('25')] == '') {
            console[_0x4c50('0')](_0x4c50('2a'));
            return;
        }
        await takePostRequest(_0x4c50('2b'));
        if ($[_0x4c50('16')]) return;
        if ($[_0x4c50('27')] == '') {
            console[_0x4c50('0')](_0x4c50('2c'));
            return;
        }
        $[_0x4c50('2d')] = 0x0;
        $[_0x4c50('2e')] = [];
        await takePostRequest('\u7ed1\u5b9a');
        await $[_0x4c50('2f')](0x3e8);
        await takePostRequest('\u52a9\u529b');
        await $[_0x4c50('2f')](0x3e8);
        $[_0x4c50('30')] = _0x4c50('31');
        await takePostRequest(_0x4c50('32'));
        await $[_0x4c50('2f')](0x3e8);
        await takePostRequest(_0x4c50('2b'));
        await $[_0x4c50('2f')](0x3e8);
        await takePostRequest('\u62bd\u5956');
        await $[_0x4c50('2f')](0x3e8);
        await takePostRequest(_0x4c50('33'));
        if ($[_0x4c50('1b')]) return;
        for (o of $[_0x4c50('2e')]) {
            $[_0x4c50('30')] = _0x4c50('34');
            if (o[_0x4c50('35')] != !![] && o[_0x4c50('36')]) {
                if ($[_0x4c50('1b')]) return;
                $[_0x4c50('37')] = ![];
                $[_0x4c50('38')] = o[_0x4c50('b')];
                await takePostRequest(_0x4c50('32'));
                await $[_0x4c50('2f')](parseInt(Math[_0x4c50('39')]() * 0x7d0 + 0x7d0, 0xa));
                if ($[_0x4c50('37')] == !![]) {
                    $[_0x4c50('3a')] = '';
                    await joinShop();
                    if ($[_0x4c50('3a')][_0x4c50('3b')](_0x4c50('3c')) > -0x1) {
                        console[_0x4c50('0')](_0x4c50('3d'));
                        await $[_0x4c50('2f')](0x3e8);
                        await joinShop();
                    }
                    if ($[_0x4c50('3a')][_0x4c50('3b')](_0x4c50('3c')) > -0x1) {
                        console[_0x4c50('0')](_0x4c50('3e'));
                        await $[_0x4c50('2f')](0x3e8);
                        await joinShop();
                    }
                    await takePostRequest(_0x4c50('2b'));
                    await $[_0x4c50('2f')](parseInt(Math[_0x4c50('39')]() * 0x7d0 + 0x3e8, 0xa));
                }
                $[_0x4c50('38')] = '';
            }
        }
        $[_0x4c50('38')] = '';
        if ($[_0x4c50('3f')] === 0x0) {
            $[_0x4c50('30')] = _0x4c50('40');
            await takePostRequest(_0x4c50('32'));
            await $[_0x4c50('2f')](parseInt(Math[_0x4c50('39')]() * 0x7d0 + 0x3e8, 0xa));
        } else {
            console[_0x4c50('0')](_0x4c50('41'));
        }
        if (opencard_toShop + '' == _0x4c50('42')) {
            let _0x4c924e = 0x1;
            console[_0x4c50('0')](_0x4c50('43') + _0x4c924e);
            for (m = 0x1; _0x4c924e--; m++) {
                console[_0x4c50('0')]('\u7b2c' + m + _0x4c50('44'));
                $[_0x4c50('30')] = _0x4c50('45');
                await takePostRequest(_0x4c50('33'));
                for (o of $[_0x4c50('2e')]) {
                    $[_0x4c50('38')] = o[_0x4c50('46')];
                    await takePostRequest(_0x4c50('32'));
                    await $[_0x4c50('2f')](parseInt(Math[_0x4c50('39')]() * 0x7d0 + 0x3e8, 0xa));
                }
                if (m >= 0x1) {
                    console[_0x4c50('0')](_0x4c50('47'));
                    break;
                }
            }
        } else {
            console[_0x4c50('0')](_0x4c50('48'));
        }
        await takePostRequest(_0x4c50('2b'));
        $[_0x4c50('49')] = !![];
        let _0xcb8912 = parseInt($[_0x4c50('4a')] / 0x64);
        console[_0x4c50('0')](_0x4c50('4b') + _0xcb8912);
        for (m = 0x1; _0xcb8912--; m++) {
            console[_0x4c50('0')]('\u7b2c' + m + _0x4c50('4c'));
            await takePostRequest('\u62bd\u5956');
            if ($[_0x4c50('49')] == ![]) break;
            if (Number(_0xcb8912) <= 0x0) break;
            if (m >= 0x1e) {
                console[_0x4c50('0')](_0x4c50('4d'));
                break;
            }
            await $[_0x4c50('2f')](parseInt(Math[_0x4c50('39')]() * 0x7d0 + 0x7d0, 0xa));
        }
        await takePostRequest(_0x4c50('4e'));
        await takePostRequest(_0x4c50('4f'));
        console[_0x4c50('0')]($[_0x4c50('27')]);
        console[_0x4c50('0')](_0x4c50('50') + $[_0x4c50('10')]);
        // if ($[_0x4c50('14')] == 0x1) {
        //     $[_0x4c50('10')] = $[_0x4c50('27')];
        //     console[_0x4c50('0')](_0x4c50('51') + $[_0x4c50('10')]);
        // }
        await $[_0x4c50('2f')](parseInt(Math[_0x4c50('39')]() * 0x3e8 + 0x7d0, 0xa));
    } catch (_0x44af77) {
        console[_0x4c50('0')](_0x44af77);
    }
}

async function takePostRequest(_0x100cf8) {
    if ($[_0x4c50('1a')]) return;
    let _0x2a3e02 = _0x4c50('52');
    let _0x4dc906 = '';
    let _0x14eed0 = _0x4c50('53');
    let _0x4f5bc1 = '';
    switch (_0x100cf8) {
        case _0x4c50('29'):
            url = _0x4c50('54');
            _0x4dc906 = _0x4c50('55');
            break;
        case _0x4c50('2b'):
            url = _0x2a3e02 + _0x4c50('56') + ($[_0x4c50('27')] || $[_0x4c50('f')] || '');
            _0x4f5bc1 = {'jdToken': $[_0x4c50('25')], 'inviteNick': $[_0x4c50('10')] || ''};
            if ($[_0x4c50('38')]) _0x4f5bc1 = {..._0x4f5bc1, 'shopId': '' + $[_0x4c50('38')]};
            _0x4dc906 = taskPostUrl(_0x4c50('57'), _0x4f5bc1);
            break;
        case _0x4c50('33'):
            url = _0x2a3e02 + _0x4c50('58') + ($[_0x4c50('27')] || $[_0x4c50('f')] || '');
            _0x4f5bc1 = {};
            _0x4dc906 = taskPostUrl(_0x4c50('59'), _0x4f5bc1);
            break;
        case'\u7ed1\u5b9a':
            url = _0x2a3e02 + _0x4c50('5a') + ($[_0x4c50('27')] || $[_0x4c50('f')] || '');
            _0x4f5bc1 = {'firstJoin': !![], 'invitationBuyerNick': $[_0x4c50('10')] || ''};
            _0x4dc906 = taskPostUrl(_0x4c50('5b'), _0x4f5bc1);
            break;
        case'\u52a9\u529b':
            url = _0x2a3e02 + _0x4c50('5c') + ($[_0x4c50('27')] || $[_0x4c50('f')] || '');
            _0x4f5bc1 = {'missionType': _0x4c50('5d'), 'inviterNick': $[_0x4c50('10')] || ''};
            _0x4dc906 = taskPostUrl(_0x4c50('5e'), _0x4f5bc1);
            break;
        case _0x4c50('32'):
            url = _0x2a3e02 + _0x4c50('5c') + ($[_0x4c50('27')] || $[_0x4c50('f')] || '');
            _0x4f5bc1 = {'missionType': $[_0x4c50('30')]};
            if ($[_0x4c50('38')]) _0x4f5bc1 = {..._0x4f5bc1, 'shopId': $[_0x4c50('38')]};
            _0x4dc906 = taskPostUrl(_0x4c50('5e'), _0x4f5bc1);
            break;
        case'\u62bd\u5956':
            url = _0x2a3e02 + _0x4c50('5f') + ($[_0x4c50('27')] || $[_0x4c50('f')] || '');
            _0x4f5bc1 = {};
            _0x4dc906 = taskPostUrl(_0x4c50('60'), _0x4f5bc1);
            break;
        case _0x4c50('61'):
            url = _0x2a3e02 + _0x4c50('5c') + ($[_0x4c50('27')] || $[_0x4c50('f')] || '');
            _0x4f5bc1 = {'actId': $[_0x4c50('d')], 'missionType': _0x4c50('40')};
            _0x4dc906 = taskPostUrl(_0x4c50('5e'), _0x4f5bc1);
            break;
        case _0x4c50('62'):
            url = _0x2a3e02 + _0x4c50('63') + ($[_0x4c50('27')] || $[_0x4c50('f')] || '');
            _0x4f5bc1 = {'actId': $[_0x4c50('d')], 'missionType': _0x4c50('62')};
            _0x4dc906 = taskPostUrl(_0x4c50('64'), _0x4f5bc1);
            break;
        case _0x4c50('4e'):
            url = _0x2a3e02 + _0x4c50('65') + ($[_0x4c50('27')] || $[_0x4c50('f')] || '');
            _0x4f5bc1 = {'pageNo': 0x1, 'pageSize': 0x270f};
            _0x4dc906 = taskPostUrl(_0x4c50('66'), _0x4f5bc1);
            break;
        case _0x4c50('4f'):
            url = _0x2a3e02 + _0x4c50('67') + ($[_0x4c50('27')] || $[_0x4c50('f')] || '');
            _0x4f5bc1 = {
                'actId': $[_0x4c50('d')],
                'userId': 0x9d2723,
                'missionType': _0x4c50('5d'),
                'inviteNum': 0x1,
                'buyerNick': $[_0x4c50('27')] || ''
            };
            _0x4dc906 = taskPostUrl(_0x4c50('68'), _0x4f5bc1);
            break;
        default:
            console[_0x4c50('0')]('\u9519\u8bef' + _0x100cf8);
    }
    let _0x47c943 = getPostRequest(url, _0x4dc906, _0x14eed0);
    return new Promise(async _0x4d4709 => {
        $[_0x4c50('69')](_0x47c943, (_0x424387, _0x7a0d04, _0x4d3ef7) => {
            try {
                if (_0x424387) {
                    if (_0x7a0d04 && _0x7a0d04[_0x4c50('6a')] && _0x7a0d04[_0x4c50('6a')] == 0x1ed) {
                        console[_0x4c50('0')](_0x4c50('28'));
                        $[_0x4c50('1a')] = !![];
                    }
                    console[_0x4c50('0')]('' + $[_0x4c50('6b')](_0x424387, _0x424387));
                    console[_0x4c50('0')](_0x100cf8 + _0x4c50('6c'));
                } else {
                    dealReturn(_0x100cf8, _0x4d3ef7);
                }
            } catch (_0x558bb4) {
                console[_0x4c50('0')](_0x558bb4, _0x7a0d04);
            } finally {
                _0x4d4709();
            }
        });
    });
}

async function dealReturn(_0x1498ac, _0x210e05) {
    let _0x1fa0da = '';
    try {
        if (_0x1498ac != _0x4c50('6d') || _0x1498ac != _0x4c50('6e')) {
            if (_0x210e05) {
                _0x1fa0da = JSON[_0x4c50('6f')](_0x210e05);
            }
        }
    } catch (_0x1670d9) {
        console[_0x4c50('0')](_0x1498ac + _0x4c50('70'));
        console[_0x4c50('0')](_0x210e05);
        $[_0x4c50('49')] = ![];
    }
    try {
        let _0x192d1e = '';
        switch (_0x1498ac) {
            case _0x4c50('29'):
                if (typeof _0x1fa0da == _0x4c50('71')) {
                    if (_0x1fa0da[_0x4c50('72')] == 0x0) {
                        if (typeof _0x1fa0da[_0x4c50('73')] != _0x4c50('74')) $[_0x4c50('25')] = _0x1fa0da[_0x4c50('73')];
                    } else if (_0x1fa0da[_0x4c50('75')]) {
                        console[_0x4c50('0')](_0x1498ac + '\x20' + (_0x1fa0da[_0x4c50('75')] || ''));
                    } else {
                        console[_0x4c50('0')](_0x210e05);
                    }
                } else {
                    console[_0x4c50('0')](_0x210e05);
                }
                break;
            case _0x4c50('6d'):
            case _0x4c50('6e'):
                break;
            case _0x4c50('2b'):
            case _0x4c50('32'):
            case _0x4c50('33'):
            case _0x4c50('76'):
            case _0x4c50('77'):
            case _0x4c50('78'):
            case _0x4c50('79'):
            case _0x4c50('61'):
            case _0x4c50('62'):
            case _0x4c50('4e'):
            case _0x4c50('4f'):
            case'\u62bd\u5956':
            case'\u7ed1\u5b9a':
            case'\u52a9\u529b':
            case _0x4c50('31'):
                _0x192d1e = '';
                if (_0x1498ac == _0x4c50('61')) _0x192d1e = '\u5173\u6ce8';
                if (_0x1498ac == _0x4c50('62')) _0x192d1e = '\u52a0\u8d2d';
                if (typeof _0x1fa0da == _0x4c50('71')) {
                    if (_0x1fa0da[_0x4c50('7a')] && _0x1fa0da[_0x4c50('7a')] === !![] && _0x1fa0da[_0x4c50('7b')]) {
                        if (_0x1fa0da[_0x4c50('7b')][_0x4c50('7c')] && _0x1fa0da[_0x4c50('7b')][_0x4c50('7c')] == 0xc8) {
                            _0x1fa0da = _0x1fa0da[_0x4c50('7b')];
                            if (_0x1498ac != _0x4c50('77') && (_0x1fa0da[_0x4c50('5')] || _0x1fa0da[_0x4c50('7b')][_0x4c50('7d')] || _0x1fa0da[_0x4c50('7b')][_0x4c50('7e')])) console[_0x4c50('0')]('' + (_0x192d1e && _0x192d1e + '\x3a' || '') + (_0x1fa0da[_0x4c50('5')] || _0x1fa0da[_0x4c50('7b')][_0x4c50('7d')] || _0x1fa0da[_0x4c50('7b')][_0x4c50('7e')] || ''));
                            if (_0x1498ac == _0x4c50('2b')) {
                                if (_0x1fa0da[_0x4c50('5')] || _0x1fa0da[_0x4c50('7b')][_0x4c50('7d')]) {
                                    if ((_0x1fa0da[_0x4c50('5')] || _0x1fa0da[_0x4c50('7b')][_0x4c50('7d')] || '')[_0x4c50('3b')](_0x4c50('7f')) > -0x1) $[_0x4c50('2d')] = 0x1;
                                }
                                if (_0x1fa0da[_0x4c50('7b')]) {
                                    $[_0x4c50('24')] = _0x1fa0da[_0x4c50('7b')][_0x4c50('80')][_0x4c50('24')] || 0x0;
                                    $[_0x4c50('27')] = _0x1fa0da[_0x4c50('7b')][_0x4c50('81')][_0x4c50('82')] || '';
                                    $[_0x4c50('4a')] = _0x1fa0da[_0x4c50('7b')][_0x4c50('81')][_0x4c50('83')] || 0x0;
                                    $[_0x4c50('3f')] = _0x1fa0da[_0x4c50('7b')][_0x4c50('81')][_0x4c50('3f')] || 0x0;
                                }
                            } else if (_0x1498ac == _0x4c50('33')) {
                                $[_0x4c50('2e')] = _0x1fa0da[_0x4c50('7b')] || [];
                            } else if (_0x1498ac == _0x4c50('32')) {
                                if (_0x1fa0da[_0x4c50('7b')][_0x4c50('7e')][_0x4c50('3b')](_0x4c50('84')) > -0x1) {
                                    $[_0x4c50('37')] = !![];
                                } else {
                                    $[_0x4c50('37')] = ![];
                                }
                            } else if (_0x1498ac == _0x4c50('78')) {
                                $[_0x4c50('85')] = _0x1fa0da[_0x4c50('5')] || _0x1fa0da[_0x4c50('7b')][_0x4c50('5')] || '';
                            } else if (_0x1498ac == _0x4c50('4e')) {
                                console[_0x4c50('0')](_0x4c50('86'));
                                let _0x559b0d = 0x0;
                                let _0x1e4fc6 = 0x0;
                                for (let _0x46ce2f in _0x1fa0da[_0x4c50('7b')][_0x4c50('87')] || []) {
                                    let _0x211a75 = _0x1fa0da[_0x4c50('7b')][_0x4c50('87')][_0x46ce2f];
                                    _0x1e4fc6 += Number(_0x211a75[_0x4c50('88')]);
                                }
                                if (_0x1e4fc6 > 0x0) console[_0x4c50('0')](_0x4c50('89') + _0x1e4fc6 + _0x4c50('8a'));
                            } else if (_0x1498ac == _0x4c50('4f')) {
                                console[_0x4c50('0')](_0x4c50('8b') + _0x1fa0da[_0x4c50('7b')][_0x4c50('8c')] + '\x29');
                            }
                        } else if (_0x1fa0da[_0x4c50('7b')][_0x4c50('5')]) {
                            if (_0x1fa0da[_0x4c50('8d')][_0x4c50('3b')](_0x4c50('8e')) > -0x1) {
                                $[_0x4c50('1b')] = !![];
                            }
                            console[_0x4c50('0')]((_0x192d1e || _0x1498ac) + '\x20' + (_0x1fa0da[_0x4c50('7b')][_0x4c50('5')] || ''));
                        } else if (_0x1fa0da[_0x4c50('8d')]) {
                            if (_0x1fa0da[_0x4c50('8d')][_0x4c50('3b')]('\u706b\u7206') > -0x1) {
                            }
                            console[_0x4c50('0')]((_0x192d1e || _0x1498ac) + '\x20' + (_0x1fa0da[_0x4c50('8d')] || ''));
                        } else {
                            console[_0x4c50('0')]((_0x192d1e || _0x1498ac) + '\x20' + _0x210e05);
                        }
                    } else if (_0x1fa0da[_0x4c50('8d')]) {
                        console[_0x4c50('0')]((_0x192d1e || _0x1498ac) + '\x20' + (_0x1fa0da[_0x4c50('8d')] || ''));
                    } else {
                        console[_0x4c50('0')]((_0x192d1e || _0x1498ac) + '\x20' + _0x210e05);
                    }
                } else {
                    console[_0x4c50('0')]((_0x192d1e || _0x1498ac) + '\x20' + _0x210e05);
                }
                break;
            default:
                console[_0x4c50('0')]((_0x192d1e || _0x1498ac) + _0x4c50('8f') + _0x210e05);
        }
        if (typeof _0x1fa0da == _0x4c50('71')) {
            if (_0x1fa0da[_0x4c50('8d')]) {
                if (_0x1fa0da[_0x4c50('8d')][_0x4c50('3b')]('\u706b\u7206') > -0x1) {
                }
            }
        }
    } catch (_0x272aff) {
        console[_0x4c50('0')](_0x272aff);
    }
}

function getPostRequest(_0x1ef044, _0x349842, _0x53bcca = _0x4c50('53')) {
    let _0x3b6e4b = {
        'Accept': _0x4c50('90'),
        'Accept-Encoding': _0x4c50('91'),
        'Accept-Language': _0x4c50('92'),
        'Connection': _0x4c50('93'),
        'Content-Type': _0x4c50('94'),
        'Cookie': cookie,
        'User-Agent': $['\x55\x41'],
        'X-Requested-With': _0x4c50('95')
    };
    if (_0x1ef044[_0x4c50('3b')](_0x4c50('52')) > -0x1) {
        _0x3b6e4b[_0x4c50('96')] = _0x4c50('52');
        _0x3b6e4b[_0x4c50('97')] = _0x4c50('98');
        delete _0x3b6e4b[_0x4c50('99')];
    }
    return {
        '\x75\x72\x6c': _0x1ef044,
        '\x6d\x65\x74\x68\x6f\x64': _0x53bcca,
        '\x68\x65\x61\x64\x65\x72\x73': _0x3b6e4b,
        '\x62\x6f\x64\x79': _0x349842,
        '\x74\x69\x6d\x65\x6f\x75\x74': 0xea60
    };
}

function taskPostUrl(_0x399775, _0x1312fc) {
    const _0x344e67 = {
        'jsonRpc': _0x4c50('9a'),
        'params': {
            'commonParameter': {
                'appkey': $[_0x4c50('9')],
                'm': _0x4c50('53'),
                'timestamp': Date[_0x4c50('9b')](),
                'userId': $[_0x4c50('b')]
            },
            'admJson': {
                'actId': $[_0x4c50('d')],
                'userId': $[_0x4c50('b')], ..._0x1312fc,
                'method': _0x399775,
                'buyerNick': $[_0x4c50('27')] || ''
            }
        }
    };
    if (_0x399775[_0x4c50('3b')](_0x4c50('4f')) > -0x1) {
        delete _0x344e67[_0x4c50('9c')][_0x4c50('9d')][_0x4c50('d')];
    }
    return $[_0x4c50('6b')](_0x344e67, _0x344e67);
}

async function getUA() {
    $['\x55\x41'] = _0x4c50('9e') + randomString(0x28) + _0x4c50('9f');
}

function randomString(_0x2f21f0) {
    _0x2f21f0 = _0x2f21f0 || 0x20;
    let _0x310880 = _0x4c50('a0'), _0x342cfc = _0x310880[_0x4c50('11')], _0xee6060 = '';
    for (i = 0x0; i < _0x2f21f0; i++) _0xee6060 += _0x310880[_0x4c50('a1')](Math[_0x4c50('a2')](Math[_0x4c50('39')]() * _0x342cfc));
    return _0xee6060;
}

function jsonParse(_0x9b522e) {
    if (typeof _0x9b522e == _0x4c50('a3')) {
        try {
            return JSON[_0x4c50('6f')](_0x9b522e);
        } catch (_0x1d870a) {
            console[_0x4c50('0')](_0x1d870a);
            $[_0x4c50('5')]($[_0x4c50('6')], '', _0x4c50('a4'));
            return [];
        }
    }
}

function joinShop() {
    if (!$[_0x4c50('38')]) return;
    return new Promise(async _0x182122 => {
        $[_0x4c50('3a')] = '';
        $[_0x4c50('a5')] = '';
        await $[_0x4c50('2f')](0x3e8);
        await getshopactivityId();
        let _0x121e7e = '';
        if ($[_0x4c50('a5')]) _0x121e7e = _0x4c50('a6') + $[_0x4c50('a5')];
        let _0x153aba = _0x4c50('a7');
        const _0x29c0f9 = {
            '\x75\x72\x6c': _0x4c50('a8') + $[_0x4c50('38')] + _0x4c50('a9') + $[_0x4c50('38')] + _0x4c50('aa') + _0x121e7e + _0x4c50('ab') + _0x153aba,
            '\x68\x65\x61\x64\x65\x72\x73': {
                'Content-Type': _0x4c50('ac'),
                'Origin': _0x4c50('ad'),
                'Host': _0x4c50('ae'),
                'accept': _0x4c50('af'),
                'User-Agent': $['\x55\x41'],
                'content-type': _0x4c50('94'),
                'Cookie': cookie
            }
        };
        $[_0x4c50('b0')](_0x29c0f9, async (_0x274ed8, _0x1538d2, _0x1552fa) => {
            try {
                let _0x44c46d = $[_0x4c50('b1')](_0x1552fa, _0x1552fa);
                if (typeof _0x44c46d == _0x4c50('71')) {
                    if (_0x44c46d[_0x4c50('7a')] === !![]) {
                        console[_0x4c50('0')](_0x44c46d[_0x4c50('75')]);
                        $[_0x4c50('3a')] = _0x44c46d[_0x4c50('75')];
                        if (_0x44c46d[_0x4c50('b2')] && _0x44c46d[_0x4c50('b2')][_0x4c50('b3')]) {
                            for (let _0x4bfd2d of _0x44c46d[_0x4c50('b2')][_0x4c50('b3')][_0x4c50('b4')]) {
                                console[_0x4c50('0')](_0x4c50('b5') + _0x4bfd2d[_0x4c50('b6')] + _0x4bfd2d[_0x4c50('b7')] + _0x4bfd2d[_0x4c50('b8')]);
                            }
                        }
                    } else if (typeof _0x44c46d == _0x4c50('71') && _0x44c46d[_0x4c50('75')]) {
                        $[_0x4c50('3a')] = _0x44c46d[_0x4c50('75')];
                        console[_0x4c50('0')]('' + (_0x44c46d[_0x4c50('75')] || ''));
                    } else {
                        console[_0x4c50('0')](_0x1552fa);
                    }
                } else {
                    console[_0x4c50('0')](_0x1552fa);
                }
            } catch (_0x36443d) {
                $[_0x4c50('20')](_0x36443d, _0x1538d2);
            } finally {
                _0x182122();
            }
        });
    });
}

function getshopactivityId() {
    return new Promise(_0x4628d3 => {
        const _0x2d1cbf = {
            '\x75\x72\x6c': _0x4c50('b9') + $[_0x4c50('38')] + _0x4c50('ba'),
            '\x68\x65\x61\x64\x65\x72\x73': {
                'Content-Type': _0x4c50('ac'),
                'Origin': _0x4c50('ad'),
                'Host': _0x4c50('ae'),
                'accept': _0x4c50('af'),
                'User-Agent': $['\x55\x41'],
                'content-type': _0x4c50('94'),
                'Cookie': cookie
            }
        };
        $[_0x4c50('b0')](_0x2d1cbf, async (_0x77a4d0, _0x3d33d8, _0x757bbe) => {
            try {
                let _0x16d1bf = $[_0x4c50('b1')](_0x757bbe, _0x757bbe);
                if (typeof _0x16d1bf == _0x4c50('71')) {
                    if (_0x16d1bf[_0x4c50('7a')] == !![]) {
                        console[_0x4c50('0')](_0x4c50('bb') + (_0x16d1bf[_0x4c50('b2')][_0x4c50('bc')][_0x4c50('bd')] || ''));
                        $[_0x4c50('a5')] = _0x16d1bf[_0x4c50('b2')][_0x4c50('be')] && _0x16d1bf[_0x4c50('b2')][_0x4c50('be')][0x0] && _0x16d1bf[_0x4c50('b2')][_0x4c50('be')][0x0][_0x4c50('bf')] && _0x16d1bf[_0x4c50('b2')][_0x4c50('be')][0x0][_0x4c50('bf')][_0x4c50('c0')] || '';
                    }
                } else {
                    console[_0x4c50('0')](_0x757bbe);
                }
            } catch (_0x5ca48e) {
                $[_0x4c50('20')](_0x5ca48e, _0x3d33d8);
            } finally {
                _0x4628d3();
            }
        });
    });
};_0xodQ = 'jsjiami.com.v6';

// prettier-ignore
function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}

