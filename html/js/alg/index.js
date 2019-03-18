require("js/alg/in.js");
require("js/alg/out.js");

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

///////////////////////////点击代码执行////////////////////////