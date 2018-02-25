/*
* 封装AJAX函数
*/
function ajax(oParam) {
    return new Promise(function (resolve, reject) {
        // 设置默认值
        oParam.type  = oParam.type  || 'POST';
        oParam.async = oParam.async || true;
 
        // 创建XHR对象
        if(window.ActiveXObject) {
            var oXhr = new window.ActiveXObject('Microsoft.XMLHTTP');
        } else {
            var oXhr = new XMLHttpRequest();
        }
 
        // 将对象格式的数据转换成字符串形式的数据
        var sData = '';
        for(var sAttr in oParam.data) {
            sData += encodeURIComponent(sAttr) + '=' + encodeURIComponent(oParam.data[sAttr]) + '&';
        }
        sData = sData.slice(0, -1);
 
        // GET请求将数据拼接到URL后面
        if(oParam.type.toUpperCase() === 'GET') {
            oParam.url += '?' + sData;
        }
 
        // 配置
        oXhr.open(oParam.type, oParam.url, oParam.async);
 
        // 设置请求头信息Content-Type
        if(oParam.type.toUpperCase() === 'POST') {
            oXhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
 
        // 发送
        oXhr.send(sData);
 
        // 接收数据
        oXhr.onreadystatechange = function () {
            if(oXhr.readyState === 4) {
                if(oXhr.status === 200) {
                    resolve(oXhr.responseText);
                } else {
                    reject('发送失败：'+oXhr.status);
                }
            }
        }
    });
}