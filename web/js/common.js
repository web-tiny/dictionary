/**
 * 有关时间的处理
 */
let _time = {
	/**
	 * 获得当前时间戳
	 */
	_timestemp: function () {
		/**获取当前时间戳的三种方式
		 * return  Date.parse(new Date())/1000; 
		 * return new Date().getTime()/1000;
		*/
		return new Date().valueOf() / 1000;
	},
	/**
	 * 时间戳转换成时间： 2011/3/16 16:50:43 格式
	 * @param {Object} timestemp
	 */
	_getDateHasHorizontalLine: function (timestemp) {
		var time = new Date(parseInt(timestemp) * 1000),
			timeFormat,
			minutes,
			seconds,
			mouthes,
			days;
		mouthes = time.getMonth() + 1;
		days = time.getDate();
		minutes = time.getMinutes();
		seconds = time.getSeconds();
		if (minutes < 10) {
			minutes = "0" + time.getMinutes();
		}
		if (seconds < 10) {
			seconds = "0" + time.getSeconds();
		}
		if (mouthes < 10) {
			mouthes = "0" + mouthes;
		}
		if (days < 10) {
			days = "0" + days;
		}
		timeFormat = time.getFullYear() + "/"
			+ mouthes + "/"
			+ days + " "
			+ time.getHours() + ":"
			+ minutes + ":"
			+ seconds;
		return timeFormat;
	},
	/**
	 * 时间戳转换成时间： 2011-3-16 16:50:43 格式
	 * @param {Object} timestemp
	 */
	_getDateHasSlash: function (timestemp) {
		var time = new Date(parseInt(timestemp) * 1000),
			timeFormat,
			minutes,
			seconds,
			mouthes,
			days;
		mouthes = time.getMonth() + 1;
		days = time.getDate();
		minutes = time.getMinutes();
		seconds = time.getSeconds();
		if (minutes < 10) {
			minutes = "0" + time.getMinutes();
		}
		if (seconds < 10) {
			seconds = "0" + time.getSeconds();
		}
		if (mouthes < 10) {
			mouthes = "0" + mouthes;
		}
		if (days < 10) {
			days = "0" + days;
		}
		timeFormat = time.getFullYear() + "-"
			+ mouthes + "-"
			+ days + " "
			+ time.getHours() + ":"
			+ minutes + ":"
			+ seconds;
		return timeFormat;
	},
	/**
	 * 时间戳转换成时间： 2011年3月16日 16:50:43
	 * @param {Object} timestemp
	 */
	_getDateHasHoursMinutesSecondes: function (timestemp) {
		var time = new Date(parseInt(timestemp) * 1000),
			timeFormat,
			minutes,
			seconds;
		minutes = time.getMinutes();
		seconds = time.getSeconds();
		if (minutes < 10) {
			minutes = "0" + time.getMinutes();
		}
		if (seconds < 10) {
			seconds = "0" + time.getSeconds();
		}
		timeFormat = time.getFullYear() + "年"
			+ (time.getMonth() + 1) + "月"
			+ time.getDate() + "日" + " "
			+ time.getHours() + ":"
			+ minutes + ":"
			+ seconds;
		return timeFormat;
	},
	/**
	 * 时间戳转换成时间： 2011-3-16
	 * @param {Object} timestemp
	 */
	_getDateNoMilliSecond: function (timestemp) {
		return new Date(parseInt(timestemp) * 1000).toLocaleDateString();
	},
	/**
	 * 多少天以后的时间
	 * @param {Object} days
	 */
	_getTimeDaysLater: function (days) {
		/**
		 * js判断输入的值是否是数值
		*1:isNaN判断，格式：isNaN(days),return boolean,(判断不严禁，因为值为空格和空串的时候是做0处理，故不用);
		*2:正则判断：/^[1-9]+[0-9]*]*$/
		 */
		if (/^[1-9]+[0-9]*]*$/.test(days)) {
			var toInt = days * 1 | 0 || 0,//将天数做整数处理
				second = toInt * 24 * 60 * 60,
				nowTimestemp = _time._timestemp();
			return _time._getDateHasHoursMinutesSecondes(second + nowTimestemp);
		} else {
			alert("请输入整数！");
		}
	}
};
/**
 * 有关表单的验证
 */
let _form = {
	/**
	 * 表单验证,验证中文名称 
	 * @param {Object} name
	 */
	_isChinaName: function (name) {
		return /^[\u4E00-\u9FA5]{1,30}$/.test(name);
	},
	/**
	 * email正则
	 * @param {Object} email
	 */
	_isEmail: function (email) {
		return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(email);
	},
	/**
	 * 手机号正则验证
	 * @param {Object} phone
	 */
	_isPhone: function (phone) {
		return /^1[34578]\d{9}$/.test(phone);
	},
	/**
	 * 身份证号正则验证
	 * @param {Object} idcard
	 */
	_isIdCard: function (idcard) {
		return /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(idcard);
	},
	/**
	 * 强密码正则验证：必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间
	 * @param {Object} password
	 */
	_isPassword: function (password) {
		return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/.test(password);
	},
	/**
	 * 储蓄卡正则验证
	 * @param {Object} bankNo
	 */
	_isBankNo: function (bankNo) {
		return /^(\d{16}|\d{19})$/.test(bankNo);
	},
};
/**
 * url指定内容的获取
 */
let _url = {
	/**
	 * 截取url指定的内容
	 * @param {Object} name
	 */
	_getQueryString: function (name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
		var context = "";
		if (r != null)
			context = r[2];
		reg = null;
		r = null;
		return context == null || context == "" || context == "undefined" ? "" : context;
	},
};
/**
 * 判断参数，数组，url是否为空
 */
let _empty = {
	/**
	 * 判断参数是否为空
	 * @param {Object} params
	 */
	_isEmpty: function (params) {
		if (typeof (params) == "undefined" || typeof (params) == "NaN" || params == "" || params == null || params == "undefined") {
			return true;
		}
		return false;
	},
	/**
	 * 判断一个数组是否为空
	 * @param {Object} params
	 */
	_isEmptyArray: function (params) {
		var flag = false;
		if (params.length > 0) {
			for (var i = 0; i < params.length; i++) {
				if (_empty._isEmpty(params[i])) {
					flag = true;
					break;
				}
			}
		}
		return flag;
	},
	/**
	 * 判断URL请求参数是否为空
	 * @param {Object} params
	 */
	_isEmptyUrlParams: function (params) {
		var array = params.split("&");
		if (array.length > 0) {
			var paramsArray = [];
			for (var i = 0; i < array.length; i++) {
				var temp = array[i].split("=");
				paramsArray.push(temp[1]);
			}
			return empty._isEmptyArray(paramsArray);
		}
		return false;
	}
};
/**
 * 弹框，提示框
 **/
var _PopupWindow = {
	/**
	 * 提示框
	 * @param {Object} content
	 * @param {Object} times
	 */
	_tips: function (content, times) {
		var div = document.createElement('div'), timer;
		div.innerHTML = content;
		div.setAttribute('style', 'position: absolute;height: 40px;width: 100px;background: #000000;color: #FFFFFF;font-size: 14px;text-align: center;line-height: 40px;opacity: 0.6;border-radius: 30px;top: 50%;left: 50%;margin-left: -50px;margin-top: -20px;');
		div.setAttribute('id', 'tips');
		document.body.appendChild(div);
		timer = setInterval(function () {
			timer = null;
			document.getElementById('tips').setAttribute('style', 'display: none;');
		}, times)
	},
	/**
	 * 弹出层
	 * 使用方法：
	 * var bounce = new PopupWindow.PopupLayout({
			id: 'select1', //增加弹层的唯一标识，如果存在则删除在生成，避免重复生成，主要兼容一个页面中有多个弹层
			title: '温馨提示',//可选
			content: '确定退出登录？',//自行填充的内容
			bottomTitle1: "取消",
			bottomTitle2: "确定",
			active: 'right',
			bottomTitleFn1: fn1,
			bottomTitleFn2: fn2
		});
	 * @param {Object} obj
	 */
	_PopupLayout: function (obj) {
		/**新增修改**/
		var el = document.getElementById(obj.id);
		if (el) {
			el.parentNode.removeChild(el);
		}
		/**修改结束**/
		var _this = this;
		//生成遮盖层
		var bounce_layout = document.getElementsByClassName('bounce_layout');
		if (bounce_layout.length == 0) {
			var layout = document.createElement('div');
			layout.setAttribute('class', 'bounce_layout');
			layout.setAttribute('style', 'position: fixed;width: 100%;height: 100%;top: 0;left: 0;background: black;opacity: 0.5;');
			document.body.appendChild(layout);
		}
		_this.layout = layout;
		var left = obj.active == 'left' ? 'active' : '';
		var right = obj.active == 'right' ? 'active' : '';
		var title = obj.title ? obj.title : "",
			content = obj.content,
			bottomStr;
		if (obj.bottomTitle1 && obj.bottomTitle2) {
			bottomStr = "<span class='bottomTitle1 " + left + "'>" + obj.bottomTitle1 + "</span><span class='bottomTitle2 " + right + "'>" + obj.bottomTitle2 + "</span>";
		} else if (obj.bottomTitle2) {
			bottomStr = "<span class='bottomTitle2 " + right + "'>" + obj.bottomTitle2 + "</span>";
		} else if (obj.bottomTitle1) {
			bottomStr = "<span class='bottomTitle1 " + left + "'>" + obj.bottomTitle1 + "</span>";
		} else {
			bottomStr = "<span class='bottomTitle1'>知道了</span>";
		}
		//生成弹窗
		var bounce_wrap = document.createElement('div');
		bounce_wrap.innerHTML = "<div id=" + obj.id + " class='bounce_wrap'><div class='title'>" + title + "</div><div class='content'>" + content + "</div><div class='bottom'>" + bottomStr + "</div></div>";
		document.body.appendChild(bounce_wrap);
		//弹窗隐藏
		_this.hidden = function () {
			document.getElementsByClassName('bounce_layout')[0].setAttribute('style', 'display: none;');
			document.getElementsByClassName('bounce_wrap')[0].setAttribute('style', 'display: none;');
		}
		_event._addHandler(_this.layout, 'click', function () {
			_this.hidden();
		})
		var bottomTitle1 = document.getElementsByClassName('bottomTitle1')[0];
		var bottomTitle2 = document.getElementsByClassName('bottomTitle2')[0];
		_event._addHandler(bottomTitle1, 'click', function () {
			if (obj.bottomTitleFn1) {
				obj.bottomTitleFn1();
				return false;
			}
			_this.hidden();
		});
		_event._addHandler(bottomTitle2, 'click', function () {
			obj.bottomTitleFn2();
		});
	},
	/**
	 * 加载提示
	 */
	_loading: function (boolean) {
		let divbowlG = document.createElement('div');
		divbowlG.innerHTML = `<div id="bowlG"><div id="bowl_ringG"><div class="ball_holderG">
				<div class="ballG"></div></div></div><p class="loadWord">加载中...</p></div>`;
		document.body.appendChild(divbowlG);
		if (!boolean) {
			divbowlG.setAttribute('style', 'display:none');
		} else if (boolean) {
			divbowlG.setAttribute('style', 'display:block');
		}
	}
};
/**
 * 倒计时，
 * 注意：写成button，以便设置在规定的时间不能重复点击
 */
let _countdown = {
	/**
	 * 倒计时
	 * @param {Object} hide_obj
	 * @param {Object} show_obj
	 * @param {Object} time
	 */
	_timer: function (element, time) {
		var time_num = time;
		element.value = time_num + '秒';
		var id = setInterval(function () {
			time_num--;
			element.setAttribute('disabled', 'false');
			element.value = time_num + '秒';
			if (time_num < 0) {
				element.value = '发送验证码';
				clearInterval(id);
			}
		}, 1000);
	},
};
/**
 * 事件相关
 * 添加事件，移除事件，获取事件，获取事件对象，阻止默认行为，阻止冒泡
 */
let _event = {
	/**
	 * js原生添加事件
	 * @param element
	 * @param type
	 * @param handler
     * @private
     */
	_addHandler: function (element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent) { //兼容IE
			element.attachEvent("on" + type, handler);
		} else { //DOM0级事件绑定
			element["on" + type] = handler;
		}
	},

	/**
	 * js原生移除事件绑定
	 * @param element
	 * @param type
	 * @param handle
     * @private
     */
	_removeHandler: function (element, type, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if (element.detachEvent) {
			element.detachEvent("on" + type, handler);
		} else {
			element["on" + type] = null;
		}
	},
	/**
	 * get event
	 * window.event,  in IE browser
	 * @param event
	 * @returns {Event}
     * @private
     */
	_getEvent: function (event) {
		return event ? event : window.event;
	},
	/**
	 * get event target
	 *  event.srcElement,  in IE browser
	 * @param event
	 * @returns {string|Node|EventTarget|*|Object}
     * @private
     */
	_getTarget: function (event) {
		return event.target || event.srcElement;
	},
	/**
	 * prevent default action of target
	 * event.returnValue=false,  in IE browser
	 * @param event
	 * @private
     */
	_preventDefault: function (event) {
		if (event.preventDefault) {
			event.preventDefault()
		} else {
			event.returnValue = false;
		}
	},
	/**
	 * prevent bubbing of the target
	 * event.cancelBubble=true,  in IE browser 
	 * @param event
	 * @private
     */
	_stopPropagation: function (event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	},
    /**
     * 鼠标滚轮事件，判断鼠标的滚轮是上滚还是下滚
     * 当用户向前滚动鼠标滚轮的时候，wheelDelta是120的整数倍，相反则是-120的整数倍
     * @param event
     * @returns {*}
     */
	_getWheelDelta: function (event) {
		if (event.wheelDelta) {//FireFox9.5及之前的版本中，wheelDelta值的正负号是颠倒的，
			return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
		} else { //兼容火狐，火狐的DOMMouseScroll(event.detail)事件就是mouseWhell(event.wheelDelta)，
			return -event.detail * 40;
		}
	},

    /**
     * DOM通过event对象的relatedTarget属性提供了相关元素的属性
     * @param event
     * @returns {*}
     */
	_getRelatedTarget: function (event) {
		if (event.relatedTarget) {
			return event.relatedTarget;
		} else if (event.toElement) {
			return event.toElement;
		} else if (event.fromElement) {
			return event.fromElement;
		} else {
			return null;
		}

	},
    /**
     * 获取字符编码
     * @param event
     * @returns {number}
     */
	_getCharCode: function (event) {
		if (typeof event.charCode == "number") {
			return event.charCode;
		} else {
			return event.keyCode;
		}
	},

    /**
     * 得知用户是鼠标左击/鼠标滑轮按钮/鼠标右击。
     * DOM的button属性可能有如下3个值：
     * 0表示主鼠标按钮，即鼠标左击
     * 1表示中间鼠标按钮
     * 2表示次鼠标按钮。
     * 但是万恶的IE8及之前的版本提供的button属性值与DOM的属性值差别比较大，下面是做过兼容处理的
     * @param event
     * @returns {number}
     */
	_getButton: function (event) {
		if (document.implementation.hasFeature("MouseEvents", "2.0")) {
			return event.button;
		} else {
			switch (event.button) {
				case 0:
				case 1:
				case 3:
				case 5:
				case 7:
					return 0;
				case 2:
				case 6:
					return 2;
				case 4: return 1;
			}
		}
	},
	/**
	 * 设置剪贴板的内容，
	 * @param event
	 * @param value
	 */
	_setClipboardText: function (event, value) {
		if (event.clipboardData) {
			event.clipboardData.setData("text/plain", value);
		} else if (window.clipboardData) {//兼容IE
			window.clipboardData.setData("text", value);
		}
	},

	/**
	 * 获取剪贴板的内容。
	 * 在IE中，clipboardData对象是window对象的属性
	 * 而在FF4+，Safari，Chrome中clipboardData对象是相应的event对象的属性
	 * @param event
	 * @returns {string}
	 */
	_getClipboardText: function (event) {
		var clipboardData = (event.clipboardData || window.clipboardData);
		return clipboardData.getData("text");
	}

};
/**
 * 将数字每三个用逗号分割
 * @param number
 * @returns {string}
 */
let _number = {
	_numberFormat: function (number) {
		var b = parseInt(number).toString();
		var len = b.length;
		if (len <= 3) {
			return b;
		}
		var r = len % 3;
		return r > 0 ? b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",") : b.slice(r, len).match(/\d{3}/g).join(",");
	}
};

/**
 * 自定义事件：
 * 当代码中存在多个部分在特定时刻相互交互的情况下，自定义事件就非常有用。这时，如果每个对象都有对其他所有对象的引用，那么整个代码就会紧密耦合，同时维护也变得困难，因为对某个对象的修改也会影响到其他对象。使用自定义事件有助于解耦相关对象，保持功能的隔绝。
 */
function EventTarget() {
	this.handlers = {};
}

EventTarget.prototype = {
	constructor: EventTarget,

	addHandler: function (type, handler) {
		if (typeof this.handlers[type] == "undefined") {
			this.handlers[type] = [];
		}

		this.handlers[type].push(handler);
	},

	fire: function (event) {
		if (!event.target) {
			event.target = this;
		}
		if (this.handlers[event.type] instanceof Array) {
			var handlers = this.handlers[event.type];
			for (var i = 0, len = handlers.length; i < len; i++) {
				handlers[i](event);
			}
		}
	},

	removeHandler: function (type, handler) {
		if (this.handlers[type] instanceof Array) {
			var handlers = this.handlers[type];
			for (var i = 0, len = handlers.length; i < len; i++) {
				if (handlers[i] === handler) {
					break;
				}
			}
			handlers.splice(i, 1);
		}
	}
};
/**
 * 拖拽
 */
var _dragDrop = function () {
	var dragdrop = new EventTarget(),
		dragging = null,
		diffX = 0,
		diffY = 0;
	function handleEvent(event) {
		//get event and target
		event = _event._getEvent(event);
		var target = _event._getTarget(event);
		//determine the type of event
		switch (event.type) {
			case "mousedown":
				if (target.className.indexOf("draggable") > -1) {
					dragging = target;
					diffX = event.clientX - target.offsetLeft;
					diffY = event.clientY - target.offsetTop;
					dragdrop.fire({ type: "dragstart", target: dragging, x: event.clientX, y: event.clientY });
				}
				break;
			case "mousemove":
				if (dragging !== null) {
					var left = event.clientX - diffX;
					var top = event.clientY - diffY;
					//判断左边是否过界
					if (left < 0) {
						left = 0;
					}
					//判断右边是否过界
					else if (left > document.documentElement.clientWidth - dragging.offsetWidth) {
						left = document.documentElement.clientWidth - dragging.offsetWidth;
					}
					//判断上边是否过界
					if (top < 0) {
						top = 0;
					}
					//判断下边是否过界
					else if (top > document.documentElement.clientHeight) {
						top = document.documentElement.clientHeight - dragging.offsetHeight;
					}
					//assign location
					dragging.style.left = left + "px";
					dragging.style.top = top + "px";

					//fire custom event
					dragdrop.fire({ type: "drag", target: dragging, x: event.clientX, y: event.clientY });
				}
				break;
			case "mouseup":
				dragdrop.fire({ type: "dragend", target: dragging, x: event.clientX, y: event.clientY });
				dragging = null;
				break;
		}
	};
	//public interface
	dragdrop.enable = function () {
		_event._addHandler(document, "mousedown", handleEvent);
		_event._addHandler(document, "mousemove", handleEvent);
		_event._addHandler(document, "mouseup", handleEvent);
	};
	dragdrop.disable = function () {
		_event._addHandler(document, "mousedown", handleEvent);
		_event._addHandler(document, "mousemove", handleEvent);
		_event._addHandler(document, "mouseup", handleEvent);
	};
	return dragdrop;
}();
/**
 * cookie
 */
var _cookie = {
    _get: function (name){
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null,
            cookieEnd;           
        if (cookieStart > -1){
            cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1){
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
		} 
        return cookieValue;
    },   
    _set: function (name, value, expires, path, domain, secure) {
		var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);   
        if (expires instanceof Date) {
            cookieText += "; expires=" + expires.toGMTString();
        }   
        if (path) {
            cookieText += "; path=" + path;
        }    
        if (domain) {
            cookieText += "; domain=" + domain;
        }   
        if (secure) {
            cookieText += "; secure";
        }   
		document.cookie = cookieText;		
    },   
    _unset: function (name, path, domain, secure){
        this._set(name, "", new Date(0), path, domain, secure);
    }
};
/**
 * subCookie
 */
var _subCookie = {
    _get: function (name, subName){
        var subCookies = this._getAll(name);
        if (subCookies){
            return subCookies[subName];
        } else {
            return null;
        }
    },   
    _getAll: function(name){
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null,
            cookieEnd,
            subCookies,
            i,
            parts,
            result = {};           
        if (cookieStart > -1){
            cookieEnd = document.cookie.indexOf(";", cookieStart)
            if (cookieEnd == -1){
                cookieEnd = document.cookie.length;
            }
            cookieValue = document.cookie.substring(cookieStart + cookieName.length, cookieEnd);           
            if (cookieValue.length > 0){
                subCookies = cookieValue.split("&");               
                for (i=0, len=subCookies.length; i < len; i++){
                    parts = subCookies[i].split("=");
                    result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
                }    
                return result;
            }  
        } 
        return null;
    },    
    _set: function (name, subName, value, expires, path, domain, secure) {    
        var subcookies = this._getAll(name) || {};
        subcookies[subName] = value;
        this._setAll(name, subcookies, expires, path, domain, secure);
    },    
    _setAll: function(name, subcookies, expires, path, domain, secure){    
        var cookieText = encodeURIComponent(name) + "=",
            subcookieParts = new Array(),
            subName;        
        for (subName in subcookies){
            if (subName.length > 0 && subcookies.hasOwnProperty(subName)){
                subcookieParts.push(encodeURIComponent(subName) + "=" + encodeURIComponent(subcookies[subName]));
            }
        }        
        if (subcookieParts.length > 0){
            cookieText += subcookieParts.join("&");               
            if (expires instanceof Date) {
                cookieText += "; expires=" + expires.toGMTString();
            }        
            if (path) {
                cookieText += "; path=" + path;
            }        
            if (domain) {
                cookieText += "; domain=" + domain;
            }        
            if (secure) {
                cookieText += "; secure";
            }
        } else {
            cookieText += "; expires=" + (new Date(0)).toGMTString();
        }    
        document.cookie = cookieText;            
    },    
    _unset: function (name, subName, path, domain, secure){
        var subcookies = this._getAll(name);
        if (subcookies){
            delete subcookies[subName];
            this._setAll(name, subcookies, null, path, domain, secure);
        }
    },    
    _unsetAll: function(name, path, domain, secure){
        this._setAll(name, null, new Date(0), path, domain, secure);
    }
};
/**
 * 函数节流：
 * 只要时周期性执行的，都应该使用节流。如onresize事件，以免造成浏览器运行缓慢。
 * @param {*} method 
 * @param {*} scope 
 */
function throttle(method, scope) {
	clearTimeout(method.tId);
	method.tId= setTimeout(function(){
		method.call(scope);
	}, 100);
}

var client = function () {
	//rendering engines
	var engine = {
		ie: 0,
		gecko: 0,
		webkit: 0,
		khtml: 0,
		opera: 0,
		//complete version
		ver: null
	};
	//browsers
	var browser = {
		//browsers
		ie: 0,
		firefox: 0,
		safari: 0,
		konq: 0,
		opera: 0,
		chrome: 0,
		safari: 0,
		//specific version
		ver: null
	};
	//platform/device/OS
	var system = {
		win: false,
		mac: false,
		x11: false,
		//mobile devices
		iphone: false,
		ipod: false,
		ipad: false,
		ios: false,
		android: false,
		nokiaN: false,
		winMobile: false,
		//game systems
		wii: false,
		ps: false
	};
	//detect rendering engines/browsers
	var ua = navigator.userAgent;
	if (window.opera) {
		engine.ver = browser.ver = window.opera.version();
		engine.opera = browser.opera = parseFloat(engine.ver);
	} else if (/AppleWebKit\/(\S+)/.test(ua)) {
		engine.ver = RegExp["$1"];
		engine.webkit = parseFloat(engine.ver);
		//figure out if it's Chrome or Safari
		if (/Chrome\/(\S+)/.test(ua)) {
			browser.ver = RegExp["$1"];
			browser.chrome = parseFloat(browser.ver);
		} else if (/Version\/(\S+)/.test(ua)) {
			browser.ver = RegExp["$1"];
			browser.safari = parseFloat(browser.ver);
		} else {
			//approximate version
			var safariVersion = 1;
			if (engine.webkit < 100) {
				safariVersion = 1;
			} else if (engine.webkit < 312) {
				safariVersion = 1.2;
			} else if (engine.webkit < 412) {
				safariVersion = 1.3;
			} else {
				safariVersion = 2;
			}
			browser.safari = browser.ver = safariVersion;
		}
	} else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
		engine.ver = browser.ver = RegExp["$1"];
		engine.khtml = browser.konq = parseFloat(engine.ver);
	} else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) {
		engine.ver = RegExp["$1"];
		engine.gecko = parseFloat(engine.ver);
		//determine if it's Firefox
		if (/Firefox\/(\S+)/.test(ua)) {
			browser.ver = RegExp["$1"];
			browser.firefox = parseFloat(browser.ver);
		}
	} else if (/MSIE ([^;]+)/.test(ua)) {
		engine.ver = browser.ver = RegExp["$1"];
		engine.ie = browser.ie = parseFloat(engine.ver);
	}
	//detect browsers
	browser.ie = engine.ie;
	browser.opera = engine.opera;
	//detect platform
	var p = navigator.platform;
	system.win = p.indexOf("Win") == 0;
	system.mac = p.indexOf("Mac") == 0;
	system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
	//detect windows operating systems
	if (system.win) {
		if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {
			if (RegExp["$1"] == "NT") {
				switch (RegExp["$2"]) {
					case "5.0":
						system.win = "2000";
						break;
					case "5.1":
						system.win = "XP";
						break;
					case "6.0":
						system.win = "Vista";
						break;
					case "6.1":
						system.win = "7";
						break;
					default:
						system.win = "NT";
						break;
				}
			} else if (RegExp["$1"] == "9x") {
				system.win = "ME";
			} else {
				system.win = RegExp["$1"];
			}
		}
	}
	//mobile devices
	system.iphone = ua.indexOf("iPhone") > -1;
	system.ipod = ua.indexOf("iPod") > -1;
	system.ipad = ua.indexOf("iPad") > -1;
	system.nokiaN = ua.indexOf("NokiaN") > -1;
	system.winMobile = (system.win == "CE");
	//determine iOS version
	if (system.mac && ua.indexOf("Mobile") > -1) {
		if (/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)) {
			system.ios = parseFloat(RegExp.$1.replace("_", "."));
		} else {
			system.ios = 2;  //can't really detect - so guess
		}
	}
	//determine Android version
	if (/Android (\d+\.\d+)/.test(ua)) {
		system.android = parseFloat(RegExp.$1);
	}
	//gaming systems
	system.wii = ua.indexOf("Wii") > -1;
	system.ps = /playstation/i.test(ua);
	//return it
	return {
		engine: engine,
		browser: browser,
		system: system
	};
}();
