var ins = function ins(inStack,block){
    /*var div = document.createElement('li'); //创建li标签
    div.innerHTML = block; //设置显示的数据，可以是标签．
    div.className = "li"+block; //为标签创建唯一class
    div.style.background = "rgb(218,13,17)";//设置背景颜色
    var bo = document.getElementById("x");//获取body对象
    bo.insertBefore(div,bo.lastChild); //动态插入到body中
    document.getElementById("h4").innerHTML = "此时方块"+(block)+"入队";
    console.log("此时方块"+(block)+"入队");*/
    //for(var i=0;i<36;i++){
        if($(".li"+block).text() == ""){
            $(".li"+block).css({"background-color":"rgb(218,13,17)"});
            $(".li"+block).text(inStack);
            //break;
        }
    //}
}