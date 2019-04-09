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
    }else if(i == 36){
        $("#h4").text("队列已空");
    }else{
        $("#h4").text("队列未满");
    }
}

//
var codeRun = function codeRun() {
    var T = $(".in1").val(), //读取输入框里的数据
        MyAr=new Array(),
        I = 0,
        O = 0,
        J = '';
    for(var i=0;i<T.length;i++){ //分析入队和出队各有多少个，保存在MyAr数组里
        if(T[i] == "("){
            if(T[i-1] == "r"){
                I = 1;
                continue
            }else if(T[i-1] == "c"){
                O = 1;
                continue
            }
        }else if (T[i] == ")"){
            if(I == 1){
                MyAr.push('I'+J);
            }else if(O == 1){
                MyAr.push('O'+J);
            }
            J = '';
            I = 0;
            O = 0;
        }

        if(I == 1){
            J += T[i];
        }else if(O == 1){
            J += T[i];
        }
    }
    return MyAr;
}

