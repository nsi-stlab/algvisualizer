var memory = 20;
create(memory); //创建36个内存块
var block=(-1); //入队号,队头
var blockOut=(-1); //出队号,队尾

//----------------------------------------------------------------//

$(".in").click(function(){ //点击入队按钮
    var inStack = document.getElementsByClassName("inStack")[0].value; //获取入队输入的字符
    for(var i=0;i<inStack.length;i++){
        if(bump() != 0) { //bump 0=满队列 & 36=空队列
            block = queueLogic(block); //队列环逻辑
            ins(inStack[i], block); //ins(入队内容,几号块入队)
        }
    }
    crash(bump(),block); //判断队头队尾文字碰撞
    crashFont(bump()); //队列为空&满时，提示
    console.log(block,"---",blockOut,bump());
});

//----------------------------------------------------------------//

$(".out").click(function(){
    var outStack = document.getElementsByClassName("outStack")[0].value; //获取入队输入的字符
    for(var j=0;j<outStack;j++) {
        if (bump() != memory) {
            blockOut = queueLogic(blockOut);
            out(blockOut); //out(几号块出队)
        }
    }
    crash(bump(),block);
    crashFont(bump());
    console.log(block, "---", blockOut,bump());
})

//----------------------------------------------------------------//

//keyup键盘按下，keyup键盘弹起
$(".outStack").blur(function() { //文本框失去焦点后
    if(this.value.replace(/\D/g,'').length == 0){ //如果文本框没有内容
        this.value = 1;
    }else if(this.value.length > 2 ){ //如果文本框长度 > 2
        this.value=this.value.replace(/\D/g,'').substring(0, 2);
    }else {
        this.value=this.value.replace(/\D/g,'');
    }
})

$(".inStack").blur(function() {
    if(this.value.length == 0){
        this.value = 1;
    }else if(this.value.length > memory ){
        this.value=this.value.substring(0, memory);
    }
})



