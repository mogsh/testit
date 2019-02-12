/*jackyLoading*/
(function(d){
	var loading_dom = d.createElement("div");
	with(loading_dom){
        addEventListener('touchstart',function(e){
             e.preventDefault();
         });
            addEventListener('touchmove',function(e){
             e.preventDefault();
         });
            addEventListener('touchend',function(e){
             e.preventDefault();
         });
    }
	loading_dom.className = "loading";
	loading_dom.innerHTML = '<div class="loader"><div class="loaderbar"></div><div class="loaderbar"></div><div class="loaderbar"></div><div class="loaderbar"></div><div class="loaderbar"></div><div class="loaderball"></div></div><p class="progress hide"><span id="pro">0</span><span>%</span></p>';
	var first=d.body.firstChild; //得到第一个元素
	d.body.insertBefore(loading_dom,first);
    if(preLoadSource){
        sourceArr=preLoadSource;//去除相同的资源
        new mo.Loader(sourceArr,{
            loadType : 0,
            minTime : 300,
            onLoading : function(count,total){
                var r = Math.round(count/total*100);
                $('.loading').find('#pro').text(r);
            },
            onComplete : function(time){
                setTimeout(function(){
                    $('.loading').remove();
                    $('.wrap').css('display','block');
                    delete mo.Loader;
                    preLoadSource='';
                },600)
            }
        });
    }
})(document);
//loader


