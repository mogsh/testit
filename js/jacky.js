var Jacky = (function(c) {
	c.util = {
        //数组去重
		getArray:function(array){
			var hash = {},
			    len = array.length,
			    result = [];
			
			for (var i = 0; i < len; i++){
			    if (!hash[array[i]]){
			        hash[array[i]] = true;
			        result.push(array[i]);
			    } 
			}
			 return result;
		},
		patternString:function (filterString,string){
		        var s,len,res,rule,str = string.toString(),filter = filterString.toString();
		        if(filterString instanceof Array && string instanceof Array){
		            try{
		                res = false;
		                len = filterString.length;
		                for(var i = 0;i<len;i++){
		                    rule = new RegExp(filterString[i]);
		                    s = rule.test(string[i]);
		                    res = (res || s);
		                }
		            }catch(e){
		                e.message();
		            }
		        }else{
		          	var r = new RegExp(filterString,"i"),
		            	rule = r.test(string),
		            	res = rule;
		        }
		        return res;
		},
		//加载中……
		pageLoad:{//elem:选择器,txt:文本
			show:function(config){
				$("body").bind("touchmove tap", function(event) {
				   event.preventDefault()
				}, false); 
				var elem= (config && config.elem ? config.elem : $('body')),
					txt=(config && config.txt ? config.txt : '正在加载'),
					pageload=$('#pageload');
				if(pageload.length){
					pageload.remove();
				}
	            elem.append('<div id="pageload" class="fixed_full"><div class="box-ct"><div class="box-bd"><div><div class="cm-loading-spinner"><span class="loading-top"></span><span class="loading-right"></span><span class="loading-bottom"></span><span class="loading-left"></span></div> <div class="msg">'+txt+'</div></div></div></div></div>');
			},
			remove:function(){
				$("body").unbind("touchmove");
				$('#pageload').remove();
			}
        },
		//消息提示
		alertBox: function(txt, callback, config) {
			var time = (config && config.time ? config.time : 2000);
			if ($("#_alert_bg").length) {
				$("#_alert_bg").show()
			} else {
				var _d = document;
				var _alert_bg = _d.createElement("div");
				_alert_bg.setAttribute("id", "_alert_bg");
				_d.body.appendChild(_alert_bg);
				var _alert_content = _d.createElement("div");
				_alert_content.setAttribute("id", "_alert_content");
				_alert_bg.appendChild(_alert_content)
			}
			var _this = $("#_alert_content");
			_this.html(txt).show();
			setTimeout(function() {
				$("#_alert_bg").hide();
				callback && callback()
			}, time)
		},
		popup:function(config){//默认不可滑动
			var elem=config.elem,
				move=(config && config.move ? config.move : false),
        	    state=elem.data('state');
        	if(state){
        		elem.fadeIn();
        		elem.data('state',false);
        		if(!move){//默认不可滑动
        			$("body").bind("touchmove", function(event) {
						event.preventDefault()
					}, false); 
        		}
        		
        	}else{
        		elem.fadeOut();
        		elem.data('state',true);
        		if(!move){
        			$("body").unbind("touchmove");
        		}
        	}
		},
		//加载时的背景图
		landscape:function(config){
			var color = config && config.color ? config.color : "#000",
				txt = config && config.txt ? config.txt : "为了更好的体验，请使用竖屏浏览",
				images = config && config.images ? config.images : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAADaCAMAAABU68ovAAAAXVBMVEUAAAD29vb////x8fH////////x8fH5+fn29vby8vL////5+fn39/f6+vr////x8fH////////+/v7////09PT////x8fH39/f////////////////////x8fH///+WLTLGAAAAHXRSTlMAIpML+gb4ZhHWn1c2gvHBvq1uKJcC6k8b187lQ9yhhboAAAQYSURBVHja7d3blpowFIDhTUIAOchZDkre/zE7ycySrbUUpsRN2/1fzO18KzEqxEVgTiZNfgmmtxRc8iaR8HNe8x4BtjQePKayYCIoyBSgvNNE1AkNSHqZyLqk97EgUCCHBzZ5mkg7ScvIJuIyOyXBRFxgpqWZyGsAZLB1KjsJi8nutHU4JCRbFRH8tmirI9k8Jx2sqNs8K/m0LQkrktO2crgcgXGB4AiTEsB0hJfo9MGgX7CGcYiYwQxmMOOvZwRhBG8tCoMXjBDeXvWCEcHbi14wgCBmMIMZzGAGM5jxETNwzMAxA8cMHDNwzMAxA8cMHDNwzMAxA8cMHDNwzMAxY6E2rUQxnH2tz9cirlJFwFBJedaPnUv0M7++egPDE8iAJcIDmxwH5wwv9vUviw2kLbVO3TJU5uul/EyB0FoLp4x60PdGUd3qPurrWyjGGTc05u+1dcgI7/+tCCPARWGhH7o5Y7RCf+bH9ctXLp6v2BVDxfqz0oPXeSVaNtINo/1SXDv4dck8IIkbhtC2ol+iouEonTBCbYvVMnXOjxww6s/RFrBUpXHh/gw1rHj5d/qhYn9Gpk2FWh6xRBRX5Oj3Znh2Sq49/L6+y8pB26q9GbE2dbA2mVbx6I+7MfBglLCttm73ZQi7AD3iL4HqjFYJHSPRppqaUaJ3ATpGa+ckpGak2hRRMyqjGMkvl+xyFeSMwjAqcsZgGDdyhl0oNTnDN4yenJGZFGxNChP5/Y3efh6SM2rDOJMzboYxkDMqwyjIGcIw6F+io2FU1IxIm1JqRmgXSkvNKNCXeTpGrU0JNSO2c6LIGPgCS8AuDHz9ta0SXWDtxoDRH+MqlbC2Dt2G2JFRadtQZt2qq/orGowdGb2euxYiqWEpVWhTBnszoNAPdStuQwxqf0aocdWKW4Z+DfszIh8pxJqbuCE4YAC+4bm0evtipjpgJHeFnyyt1Ku2xa0bhjxr27p75rECNwyI9ZwvXkHq+7aTaMEV44YYy/spfgjgjNHaWW+GeUhGEX7tLlVinIFDDSgnOwhi1V6bU0b6tVS9eAERe863g4dRrtiHdc6o+nn5vtyVVgR79Cqt4uL6gfHPQyGqtP2vf7HADGbcYwaOGThm4JiBYwaOGThm4JiBYwaOGThm4JiBYwaOGThm4JiBYwaOGThm4JjhtOM+J/AgT008yDMkN/dPP9hzS8zAMQN3OEYeekp5YU7KOKXwVXqiY+QS7smcinGKABWdiBgpPJTSMHJ4KidhhPBUSMLw4CmPhKHgKUXCkHsygum71ftNSgCX6bsl8FQyfbcL5EdYsDk0R3j7aiA5wpt5AjKg/2gLJEBD/0Hf2OOf/vRrj6z/7GtP4B3nMKyjHA12kIPSjnJs3FEO0TvKkYJHOWCR+rjJH0Vn6fI5PjNbAAAAAElFTkSuQmCC";
			$('body').append('<style type="text/css">@-webkit-keyframes rotation{10%{transform: rotate(90deg); -webkit-transform: rotate(90deg)} 50%, 60%{transform: rotate(0deg); -webkit-transform: rotate(0deg)} 90%{transform: rotate(90deg); -webkit-transform: rotate(90deg)} 100%{transform: rotate(90deg); -webkit-transform: rotate(90deg)} } @keyframes rotation{10%{transform: rotate(90deg); -webkit-transform: rotate(90deg)} 50%, 60%{transform: rotate(0deg); -webkit-transform: rotate(0deg)} 90%{transform: rotate(90deg); -webkit-transform: rotate(90deg)} 100%{transform: rotate(90deg); -webkit-transform: rotate(90deg)} } #orientLayer{display: none; z-index: 999999;} @media screen and (min-aspect-ratio: 12/7){#orientLayer{display: block;} } .mod-orient-layer{display: none; position: fixed; height: 100%; width: 100%; left: 0; top: 0; right: 0; bottom: 0; background: '+color+'; z-index: 9997} .mod-orient-layer__content{position: absolute; width: 100%; top: 45%; margin-top: -75px; text-align: center} .mod-orient-layer__icon-orient{background-image: url('+images+'); display: inline-block; width: 67px; height: 109px; transform: rotate(90deg); -webkit-transform: rotate(90deg); -webkit-animation: rotation infinite 1.5s ease-in-out; animation: rotation infinite 1.5s ease-in-out; -webkit-background-size: 67px; background-size: 67px} .mod-orient-layer__desc{margin-top: 20px; font-size: 15px; color: #fff}</style><div id="orientLayer" class="mod-orient-layer"> <div class="mod-orient-layer__content"> <i class="icon mod-orient-layer__icon-orient"></i> <div class="mod-orient-layer__desc">'+txt+'</div> </div></div>');
		},
		validate:{//elem:选择器,txt:文本
			show:function(config){//显示验证弹层
				$("body").bind("touchmove tap", function(event) {
				   event.preventDefault()
				}, false); 
				var elem= (config && config.elem ? config.elem : $('body')),
					txt=(config && config.txt ? config.txt : '尊敬的用户，活动太火爆了，一下子没挤进去，为保障您能顺利参与活动，请输入如下验证码，再来试下哈！'),
					img= (config && config.img ? config.img : '');
	            elem.append('<article id="validate" class="fixed"><div class="cover"></div><div class="content"><h2>填写验证码</h2><p class="txt">'+txt+'</p><p class="inp"><input class="fl" id="vail" type="text" placeholder="填写验证码" /><img class="code fr" src="'+img+'"></p><a class="confirm">确定</a></div></article>');
			},
			updata:function(config){//更新验证码
				var code=$('#validate .code'),
				    img= (config && config.img ? config.img : '');
				code.attr('src',img);
			},
			remove:function(){//移除验证弹层
				$("body").unbind("touchmove");
				$('#validate').remove();
			}
        }
	};
	c.cookie = {
		get: function(key) {
			try {
				var arr = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)(;|$)"));
				if (arr != null) {
					return decodeURIComponent(arr[2])
				}
			} catch (e) {}
			return null
		},
		set: function(key, value, date, domain) {
			try {
				domain = domain ? (';domain=' + domain) : '';
				var Days = date ? date * 1000 : 60 * 1000;
				var exp = new Date();
				exp.setTime(exp.getTime() + Days);
				document.cookie = key + "=" + encodeURIComponent(value) + domain + ";expires=" + exp.toGMTString() + ";path=/"
			} catch (e) {}
		},
		remove: function(key, domain) {
			this.set(key, "", -24 * 60 * 60, domain)
		}
	};
	//正则验证
	c.validate = {
		isEmpty: function(str) {
			return str.replace(/(^\s*)|(\s*$)/g, "") ? false : true
		},
		isEmail: function(str) {
			return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/i.test(str)
		},
		isPhone: function(str) {
			return /^0?1[3|4|5|8][0-9]\d{8}$/.test(str)
		},
		isID: function(str) {
			return /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(str)
		}
	};
	return c
})(window.Jacky || {});
//jackyScroll
var jackyScroll=(function(){var _upSupportTouch=!((window.DocumentTouch&&document instanceof window.DocumentTouch)||"ontouchstart" in window)*1,_event={start:["touchstart","mousedown"][_upSupportTouch],move:["touchmove","mousemove"][_upSupportTouch],end:["touchend","mouseup"][_upSupportTouch]};var _scroller=function(container,direction,params){var key="top",Key="Top",size="height",Size="Height",pageKey="pageY";if(direction=="horizontal"){key="left";Key="Left";size="width";Size="Width";pageKey="pageX"}var scroller=null;if(params.hideScrollBar==false){scroller=document.createElement("div");scroller.className="scroller_"+direction;params.container.appendChild(scroller)}var sizeContainer=container["client"+Size],sizeContainerWithScroll=0;var fnPosScroll=function(){if(scroller==null){return}var sizeScroller=scroller.style[size].replace("px",""),keyScroller=container["scroll"+Key]/(sizeContainerWithScroll-sizeContainer)*(sizeContainer-sizeScroller);if(sizeContainer-sizeScroller-keyScroller<=0){keyScroller=sizeContainer-sizeScroller}scroller.style[key]=keyScroller+"px"};var pos={};container.addEventListener(_event.start,function(event){sizeContainerWithScroll=this["scroll"+Size];pos[pageKey]=event.touches?event.touches[0][pageKey]:event[pageKey];pos[key]=this["scroll"+Key];document.moveFollow=true;if(scroller&&sizeContainerWithScroll>sizeContainer){scroller.style.opacity=1;scroller.style[size]=(sizeContainer*sizeContainer/sizeContainerWithScroll)+"px";fnPosScroll()}});container.addEventListener(_event.move,function(event){if(_upSupportTouch==false||(document.moveFollow==true)){this["scroll"+Key]=pos[key]+(pos[pageKey]-(event.touches?event.touches[0][pageKey]:event[pageKey]));fnPosScroll();params.onScroll.call(this,event)}event.preventDefault()});container.addEventListener(_event.end,function(event){scroller&&(scroller.style.opacity=0)});if(_upSupportTouch==true){document.addEventListener("mouseup",function(){this.moveFollow=false})}};return function(container,options){options=options||{};var params=new Object({verticalScroll:true,horizontalScroll:false,hideScrollBar:false,onScroll:function(){}}),key;for(key in options){params[key]=options[key]}if(window.getComputedStyle(container).position=="static"){container.style.position="relative"}var childerns=container.childNodes,fragment=document.createDocumentFragment();[].slice.call(childerns).forEach(function(child){fragment.appendChild(child)});var wrap=document.createElement("div");wrap.style.height="100%";wrap.style.width="100%";wrap.style.overflow="hidden";container.appendChild(wrap);wrap.appendChild(fragment);params.container=container;if(params.verticalScroll==true){_scroller(wrap,"vertical",params)}if(params.horizontalScroll==true){_scroller(wrap,"horizontal",params)}}})();