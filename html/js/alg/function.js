//入队列
var ins = function ins(inStack,block){
    $(".li"+block).css({"background-color":"rgb(218,13,17)"});
    $(".li"+block).text(inStack);
    if(block < 18){
        $(".stackBottom .p2").css({"color":"rgba(0, 0, 0, 0)"});
        $(".stackHead .p2").css({"color":"rgba(0, 0, 0, 0.5)"});
        $(".stackHead .p2").css({"left":block*55+"px"});
    }else{
        $(".stackBottom .p2").css({"color":"rgba(0, 0, 0, 0.5)"});
        $(".stackHead .p2").css({"color":"rgba(0, 0, 0, 0)"});
        $(".stackBottom .p2").css({"left":(block-18)*55+"px"});
    }
}

//出队列
var out = function out(num){
    $(".li"+num).css({"background-color":"rgb(0,0,0,0)"});
    $(".li"+num).text("");
    if(blockOut < 17){
        $(".stackBottom .p1").css({"color":"rgba(0, 0, 0, 0)"});
        $(".stackHead .p1").css({"color":"rgba(0, 0, 0, 0.5)"});
        $(".stackHead .p1").css({"left":(blockOut+1)*55+"px"});
    }else{
        $(".stackBottom .p1").css({"color":"rgba(0, 0, 0, 0.5)"});
        $(".stackHead .p1").css({"color":"rgba(0, 0, 0, 0)"});
        $(".stackBottom .p1").css({"left":(blockOut-17)*55+"px"});
    }
}

//队列环逻辑
var queueLogic = function queueLogic(i){
    if (i < 35) {
        i++;
    } else {
        i = 0;
    }
    return i;
}

//判断队列内是空的还是满的，处理队列碰撞
var bump = function bump(){
    var a=0,b=0;
    for(var i=0;i<36;i++){
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
    }
}