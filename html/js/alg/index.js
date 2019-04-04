
create(36); //创建36个内存块

var block=(-1); //入队号
var blockOut=(-1); //出队号
/*
    block      是队头
    blockOut+1 是队尾
 */
$(".in").click(function(){ //点击入队按钮
    var inStack = document.getElementsByClassName("inStack")[0].value; //获取入队输入的字符
    for(var i=0;i<inStack.length;i++){
        if(bump() != 0) { //bump 0=满队列 & 36=空队列
            block = queueLogic(block); //队列环逻辑
            ins(inStack[i], block); //ins(入队内容,几号块入队)
        }
    }
    //$("#h4").text("此时 "+inStack+" 入队");
    console.log(block,"---",blockOut,bump());
});

$(".out").click(function(){
    var outStack = document.getElementsByClassName("outStack")[0].value; //获取入队输入的字符
    for(var j=0;j<outStack;j++) {
        if (bump() != 36) {
            blockOut = queueLogic(blockOut);
            out(blockOut); ////out(几号块出队)
        }
    }
    console.log(block, "---", blockOut,bump());
})