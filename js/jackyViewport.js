/*jackyViewport*/
;(function(){
	if(/Android (\d+\.\d+)/.test(navigator.userAgent)){
		var version = parseFloat(RegExp.$1);
		if(version>2.3){
			var phoneScale = parseInt(window.screen.width)/750;
			document.write('<meta name="viewport" content="width=750, minimum-scale = '+ phoneScale +', maximum-scale = '+ phoneScale +', target-densitydpi=device-dpi">');
		}else{
			document.write('<meta name="viewport" content="width=750, target-densitydpi=device-dpi">');
		}
	}else{
		document.write('<meta name="viewport" content="width=750, user-scalable=no, target-densitydpi=device-dpi">');
	}
	//微信去掉下方刷新栏
	// if(navigator.userAgent.indexOf('MicroMessenger') >= 0){
	// 	document.addEventListener('WeixinJSBridgeReady', function() {
	// 		WeixinJSBridge.call('hideToolbar');
	// 	});
	// }
})();
