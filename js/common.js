$(function(){
	FastClick.attach(document.body);
	//landscape
	Jacky.util.landscape({color:'#941e1e'});
	//手机捕捉触摸事件
	document.addEventListener("touchstart", function(){}, true);
	//页面操作可写此区域

})
//popup
function popup(config){
	var elem=config.elem,//目标层
		scrollWrap=config.scrollWrap;//滚动层
		scrollMove=(config && config.scrollMove ? config.scrollMove : false);//默认不调用滚动模块
		coverMove=(config && config.coverMove ? config.coverMove : false);//默认遮罩层不可移动
	Jacky.util.popup({elem:$(elem),move:coverMove});//popup
	//内容滚动
	if (window.addEventListener&&($(elem).data('one'))&&scrollMove) {
		$(elem).data('one',false);
		jackyScroll( document.getElementById(scrollWrap),{
		    verticalScroll: true,          // 默认垂直滚动
		    horizontalScroll: false,       // 水平滚动，默认false，不水平滚动
		    hideScrollBar: false          // 是否隐藏滚动条
		});
	
	}
}
//页面切换
function jump(config){
	var show=config.show,
		hide=config.hide;
	$(show).fadeIn();
	$(hide).fadeOut();
		
}