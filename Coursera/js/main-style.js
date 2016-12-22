/**
 * Created by 谭建 on 2015/4/30.
 */
/*回到顶部ji效果*/
window.onload =function(){
    var obtn =document.getElementById('go-top');
    //获取页面可视区得得高度
/*    var clientHeight=document.documentElement.clientHeight;*/
    var timer =null;
    var isTop =true;
    //滚动条滚动时触发
    window.onscroll =function(){
      /*  var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(isTop>=clientHeight){
            obtn.style.display = 'block';
        }
        else{
            obtn.style.display='none';
        }用于自动隐藏图标*/

        if(!isTop){
            clearInterval(timer);
        }
        isTop=false;
    }
    obtn.onclick=function(){
    //设置定时器
        timer=setInterval(function(){
           //获取滚动距离顶部的高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            var ispeed=Math.floor(-osTop/7);
            document.documentElement.scrollTop=document.body.scrollTop= osTop+ispeed;
            isTop=true;
            console.log(osTop-ispeed);
            if(osTop==0){
                clearInterval(timer);
            }
        },30);

    }
}