require("js/alg/in.js");
require("js/alg/out.js");
require("js/alg/timer.js");
require("js/alg/codeRun.js");
require("js/alg/number.js");
require("js/alg/runIn.js");
require("js/alg/runOut.js");


///////////////////////////点击出栈入栈////////////////////////
var block=0; //入栈号
var blockOut=0; //出栈号

$(".in").click(function(){
    //timer(ins,3,block++);
    ins(block++); //指定几号方块入栈
});
$(".out").click(function(){
    if(blockOut < block){
        out(blockOut++); //指定几号方块出栈
    }else{
        document.getElementById("h4").innerHTML = "栈空了";
        console.log("栈空了");
    }
});
///////////////////////////点击出栈入栈////////////////////////

///////////////////////////点击代码执行////////////////////////
$("#CodeRun").click(function(){
    for(var i=0;i<codeRun().length;i++){
        if(codeRun()[i][0] == 'I'){
            block += runIn(block,numberInt(codeRun()[i])); //从几开始，入几个栈
        }else if(codeRun()[i][0] == 'O'){
            blockOut += runOut(blockOut,numberInt(codeRun()[i]));
        }
    }
    console.log(codeRun());
});
///////////////////////////点击代码执行////////////////////////