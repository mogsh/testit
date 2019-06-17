/**
 * author:ep_ling@163.com
 */
$(function () {
    window.onload=function(){
        Wresize(320,640);
    };
    window.onresize=function(){Wresize(320,640);};
    function Wresize(min,max){
        var wi_ =window.document.body.clientWidth;
        var size = parseInt(wi_);
        if (document.body.offsetWidth>max) {
            size = max;
        } else if(document.body.offsetWidth<min){
            size = min;
        }
        document.getElementsByTagName('html')[0].style.fontSize=size/20+"px";
    }
});
