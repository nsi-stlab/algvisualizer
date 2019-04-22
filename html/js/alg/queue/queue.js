//入队列
function ins(ins,block){
    $(".li"+block).css({"background-color":"rgb(218,13,17)"});
    $(".li"+block).text(ins);

    if((block+=1) == 36){
        block = 0;
    }
    if(block < 18){
        $(".queueBottom .p2").css({"color":"rgba(0, 0, 0, 0)"});
        $(".queueHead .p2").css({"color":"rgba(0, 0, 0, 0.5)"});
        $(".queueHead .p2").css({"left":block*55+"px"});
    }else{
        $(".queueBottom .p2").css({"color":"rgba(0, 0, 0, 0.5)"});
        $(".queueHead .p2").css({"color":"rgba(0, 0, 0, 0)"});
        $(".queueBottom .p2").css({"left":(block-18)*55+"px"});
    }
}

//出队列
function out(num){
    $(".li"+num).css({"background-color":"rgb(0,0,0,0)"});
    $(".li"+num).text("");

    if(blockOut == 35){
        blockOut = -1;
    }
    if(blockOut < 17){
        $(".queueBottom .p1").css({"color":"rgba(0, 0, 0, 0)"});
        $(".queueHead .p1").css({"color":"rgba(0, 0, 0, 0.5)"});
        $(".queueHead .p1").css({"left":(blockOut+1)*55+"px"});
    }else{
        $(".queueBottom .p1").css({"color":"rgba(0, 0, 0, 0.5)"});
        $(".queueHead .p1").css({"color":"rgba(0, 0, 0, 0)"});
        $(".queueBottom .p1").css({"left":(blockOut-17)*55+"px"});
    }
}

//队列环逻辑
function queueLogic(i){
    if (i < (memory-1)) {
        i++;
    } else {
        i = 0;
    }
    return i;
}

//判断队列内是空的还是满的，处理队列碰撞
function bump(){
    let a=0,b=0;
    for(let i=0;i<memory;i++){
        let u = $(".li"+i).text();
        if(u == ""){
            a++;
        }
    }
    return a;
}


//判断入队出队文字重叠
function crash(i) {
    if(i == 0 || i == 36){
        $(".queueHead .p2").css({"bottom":25+"px"});
        $(".queueBottom .p2").css({"top":25+"px"});
    }else {
        $(".queueHead .p2").css({"bottom":3+"px"});
        $(".queueBottom .p2").css({"top":3+"px"});
    }
}

//判断入队出队文字重叠
function crashFont(i) {
    if(i == 0){
        $("#h4").text("循环队列已满");
    }else if(i == memory){
        $("#h4").text("循环队列已空");
    }else{
        $("#h4").text("循环队列未满");
    }
}