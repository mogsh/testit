/* 通用配置 */

const config = {
    baseUrl: 'https://tongue.akeyn.com'
}

/* 通用方法 */

//获取URL参数
function GetUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = encodeURI(window.location.search).substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

/* 模板数据处理 */

//数组长度
template.helper("arrLen", function (array) {
    return array.length
});

//处理日期
template.helper("formatDate", function (timeStamp) {
    var date = new Date(timeStamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    var formatVal = year + "年" + month + "月" + day + "日";
    return formatVal;
});

//处理时间
template.helper("formatTime", function (timeStamp) {
    var date = new Date(timeStamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    var formatVal = year + "年" + month + "月" + day + "日" + " " + (hour > 9 ? hour : "0" + hour) + ":" + (minute > 9 ? minute : "0" + minute);
    return formatVal;
});

