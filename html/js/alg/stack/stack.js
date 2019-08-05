//入栈
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

//出栈
function out(num){
    $(".li"+num).css({"background-color":"rgb(0,0,0,0)"});
    $(".li"+num).text("");

    if(block == 35){
        block = -1;
    }
    if(block < 17){
        $(".queueBottom .p2").css({"color":"rgba(0, 0, 0, 0)"});
        $(".queueHead .p2").css({"color":"rgba(0, 0, 0, 0.5)"});
        $(".queueHead .p2").css({"left":(block+1)*55+"px"});
    }else{
        $(".queueBottom .p2").css({"color":"rgba(0, 0, 0, 0.5)"});
        $(".queueHead .p2").css({"color":"rgba(0, 0, 0, 0)"});
        $(".queueBottom .p2").css({"left":(block-17)*55+"px"});
    }
}

//栈环逻辑
function StackLogic(i,num){
    if (i < (memory-1)) {
        i++;
    } else {
        i = 0;
    }
    return i;
}

//判断栈列内是空的还是满的，处理栈列碰撞
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


//判断入栈出栈文字重叠
function crash(i) {
    if(i == 0 || i == 36){
        $(".queueHead .p2").css({"bottom":25+"px"});
        $(".queueBottom .p2").css({"top":25+"px"});
    }else {
        $(".queueHead .p2").css({"bottom":3+"px"});
        $(".queueBottom .p2").css({"top":3+"px"});
    }
}

//判断入栈出栈文字重叠
function crashFont(i) {
    if(i == 0){
        $("#h4").text("栈已满");
    }else if(i == memory){
        $("#h4").text("栈已空");
    }else{
        $("#h4").text("栈未满");
    }
}