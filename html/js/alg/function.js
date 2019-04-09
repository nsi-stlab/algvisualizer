//入队列
var ins = function ins(inStack,block){
    $(".li"+block).css({"background-color":"rgb(218,13,17)"});
    $(".li"+block).text(inStack);
    var left = $(".li"+block).css("left");
    var top = $(".li"+block).css("top")
    console.log(left,top);

    var t = 0.314;
    var p = (block+1)*t-1;
    $(".ihead").css({"left":Math.sin(p)*215+185,"top":Math.cos(p)*215+185});
}

//出队列
var out = function out(num){
    $(".li"+num).css({"background-color":"rgb(0,0,0,0)"});
    $(".li"+num).text("");
    var left = $(".li"+num).css("left");
    var top = $(".li"+num).css("top")
    console.log(left,top);

    var t = 0.314;
    var p = (num+1)*t-1;
    $(".ibottom").css({"left":Math.sin(p)*215+185,"top":Math.cos(p)*215+185});
}

//队列环逻辑
var queueLogic = function queueLogic(i){
    if (i < (memory-1)) {
        i++;
    } else {
        i = 0;
    }
    return i;
}

//判断队列内是空的还是满的，处理队列碰撞
var bump = function bump(){
    var a=0,b=0;
    for(var i=0;i<memory;i++){
        var u = $(".li"+i).text();
        if(u == ""){
            a++;
        }
    }
    return a;
}

//返回字符串中数字
var numberInt = function numberInt(string) {
    return string.replace(/[^0-9]/ig,"");
}

//创建队列块
var create = function create(num){
    for(var i=0;i<num;i++) {
        var div = document.createElement('li'); //创建li标签
        div.className = "li" + i; //为标签创建唯一class
        var bo = document.getElementById("x");//获取body对象
        bo.insertBefore(div, bo.lastChild); //动态插入到body中
        var t = 0.314;
        var p = (i+1)*t-1;
        $(".li"+i).css({"left":Math.sin(p)*160+185,"top":Math.cos(p)*160+185});
    }
}

//判断入队出队文字重叠
var crash = function crash(num,i) {
    console.log(num);
    if(num == 0 || num == 20){
        var t = 0.314;
        var p = (i+1)*t-1;
        $(".ihead").css({"left":Math.sin(p)*270+185,"top":Math.cos(p)*270+185});
    }else {
        var t = 0.314;
        var p = (i+1)*t-1;
        $(".ihead").css({"left":Math.sin(p)*215+185,"top":Math.cos(p)*215+185});
    }
}

//判断入队出队文字重叠
var crashFont = function crashFont(i) {
    if(i == 0){
        $("#h4").text("队列已满");
    }else if(i == memory){
        $("#h4").text("队列已空");
    }else{
        $("#h4").text("队列未满");
    }
}

//圆盘位置
var round = function round(){

}