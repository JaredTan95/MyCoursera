/**
 * Created by 谭建 on 2015/5/3.
 */
var tjcommon={
    init:function(){
    this.lessImgShow();
    },
    stopEventBubble:function(event){
        var e=event;
        if(e){
            e.stopPropagation();
        }
    },
    lessImgShow:function(){
        $('.lessonimgbox').bind("mouseover",function(e){
            var _pop=$(this).find('.img-pop');
            $(this).css({border:"1px solid #bbb",width:"230px",height:"230px"});
            TweenMax.to(_pop,0.4,{top:0,ease:Bounce.easeOut});
            tjcommon.stopEventBubble(e);
        });
        $(document).bind("mouseover",function(){
            $('.lessonimgbox').css({border:"0",with:"230px",height:"230px"});
            var _pop=$(this).find(".img-pop");
            TweenMax.to(_pop,0.5,{top:230,ease:Linear.easeNone});
        })
    }
}
$(function(){
    tjcommon.init();
})