//入队列
var ins = function ins(inStack,block){
    $(".li"+block).css({"background-color":"rgb(218,13,17)"});
    $(".li"+block).text(inStack);

    if((block+=1) == 36){
        block = 0;
    }
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

    if(blockOut == 35){
        blockOut = -1;
    }
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
        // var t = 0.314;
        // var p = (i+1)*t-1;
        // $(".li"+i).css({"left":Math.sin(p)*160+185,"top":Math.cos(p)*160+185});
    }
}

//判断入队出队文字重叠
var crash = function crash(i) {
    if(i == 0 || i == 36){
        $(".stackHead .p2").css({"bottom":25+"px"});
        $(".stackBottom .p2").css({"top":25+"px"});
    }else {
        $(".stackHead .p2").css({"bottom":3+"px"});
        $(".stackBottom .p2").css({"top":3+"px"});
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



function getPointTop(obj) { //获取某元素以浏览器左上角为原点的坐标
    var t = obj.offsetTop; //获取该元素对应父容器的上边距
    //判断是否有父容器，如果存在则累加其边距
    while (obj = obj.offsetParent) {//等效 obj = obj.offsetParent;while (obj != undefined)
        t += obj.offsetTop; //叠加父容器的上边距
    }
    return t;
}

function getPointLeft(obj) { //获取某元素以浏览器左上角为原点的坐标
    var l = obj.offsetLeft; //对应父容器的上边距
    //判断是否有父容器，如果存在则累加其边距
    while (obj = obj.offsetParent) {//等效 obj = obj.offsetParent;while (obj != undefined)
        l += obj.offsetLeft; //叠加父容器的左边距
    }
    return l;
}



function getElementById(id) {
    return document.getElementById(id);
};

function mask(params) {

    localStorage.setItem('name',1);

    var mask = getElementById('mask');

    if (params.length === 0) {
        mask.style.display = 'none';
        return;
    }

    var {id, desc} = params[0];

    /****************   获取要cover的元素基本信息   ****************/
    var ele = getElementById(id);
    var offsetWidth = ele.offsetWidth;
    var offsetHeight = ele.offsetHeight;
    var offsetLeft = getPointLeft(ele);
    var offsetTop = getPointTop(ele);
    // var offsetLeft = ele.offsetLeft ;
    // var offsetTop = ele.offsetTop;

    console.log(offsetWidth, offsetHeight, offsetLeft, offsetTop);
    console.log(offsetWidth, offsetHeight, getPointTop(ele), getPointLeft(ele));

    /****************   获取屏幕大小，包含滚动区域   ****************/
    var scrollWidth = document.body.scrollWidth;
    var scrollHeight = document.body.scrollHeight;

    console.log(scrollWidth, scrollHeight);

    /****************   为Mask设置css   ****************/
    mask.style.zIndex = 99999;
    mask.style.width = scrollWidth + 'px';
    mask.style.height = scrollHeight + 'px';
    mask.style.borderColor = "rgba(0, 0, 0, 0.75)";
    mask.style.borderStyle = 'solid';
    mask.style.borderLeftWidth = offsetLeft - 5 + 'px';
    mask.style.borderRightWidth = (scrollWidth - offsetWidth - offsetLeft - 5) + 'px';
    mask.style.borderTopWidth = offsetTop - 5 + 'px';
    mask.style.borderBottomWidth = (scrollHeight - offsetHeight - offsetTop - 5) + 'px';
    mask.style.position = 'absolute';
    mask.style.left = 0;
    mask.style.top = 0;


    /****************   为Mask设置desc   ****************/
    var maskDesc = getElementById('mask-desc');
    maskDesc.innerHTML = desc;

    /****************   绑定next事件   ****************/
    var nextBtn = getElementById('mask-next');
    (function(mask) {
        nextBtn.onclick = function() {
            params.shift();
            mask(params);
        };
    })(arguments.callee);
};