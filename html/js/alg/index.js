require("js/alg/in.js");
require("js/alg/out.js");
require("js/alg/timer.js");
require("js/alg/codeRun.js");
require("js/alg/number.js");
require("js/alg/runIn.js");
require("js/alg/runOut.js");
require("js/alg/bump.js");



///////////////////////////生成队列方块////////////////////////
for(var i=0;i<36;i++){
    var div = document.createElement('li'); //创建li标签
    div.className = "li"+i; //为标签创建唯一class
    var bo = document.getElementById("x");//获取body对象
    bo.insertBefore(div,bo.lastChild); //动态插入到body中
}
///////////////////////////生成队列方块////////////////////////

///////////////////////////点击出队入队////////////////////////
var block=(-1); //入队号
var blockOut=(-1); //出队号

$(".in").click(function(){
    if(bump() != 0){
        var inStack = document.getElementsByClassName("inStack")[0].value[0];
        if(block < 35){
            block++;
        }else{
            block = 0;
        }
        ins(inStack,block); //指定几号方块入队列
    }
    console.log(block,"---",blockOut,bump());
});

$(".out").click(function(){
    if(bump() != 36) {
        if (blockOut < 35) {
            blockOut++;
        } else {
            blockOut = 0;
        }
        out(blockOut);
    }
    console.log(block, "---", blockOut,bump());
});
///////////////////////////点击出队入队////////////////////////

///////////////////////////点击代码执行////////////////////////
$("#CodeRun").click(function(){
    for(var i=0;i<codeRun().length;i++){
        if(codeRun()[i][0] == 'I'){
            block += runIn(block,numberInt(codeRun()[i])); //从几开始，入几个队列
        }else if(codeRun()[i][0] == 'O'){
            blockOut += runOut(blockOut,numberInt(codeRun()[i]));
        }
    }
    console.log(codeRun());
});
///////////////////////////点击代码执行////////////////////////