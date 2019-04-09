var memory = 20;
create(memory); //创建36个内存块
var block=(-1); //入队号,队头
var blockOut=(-1); //出队号,队尾




function timerPromisefyIn() {
    $('.in').attr("disabled",true);
    var inStack = document.getElementsByClassName("inStack")[0].value; //获取入队输入的字符
    var num = inStack.length;
    var i = 0;
    return new Promise(function (resolve,reject) {
        var sivIn = setInterval(function () {
            crash(bump(),block); //判断队头队尾文字碰撞
            crashFont(bump()); //队列为空&满时，提示
            console.log("a");
            if(bump() != 0 && num > 0) { //bump 0=满队列 & 36=空队列
                block = queueLogic(block); //队列环逻辑
                ins(inStack[i], block); //ins(入队内容,几号块入队)
                num--;
                i++;
            }else {
                clearInterval(sivIn);
                resolve(0);
            }
        },150)
    });
}


function timerPromisefyOut() {
    $('.out').attr("disabled",true);
    var outStack = document.getElementsByClassName("outStack")[0].value; //获取入队输入的字符
    return new Promise(function (resolve,reject) {
        var sivOut = setInterval(function () {
            crash(bump(),block);
            crashFont(bump());
            if (bump() != memory && outStack > 0) {
                blockOut = queueLogic(blockOut);
                out(blockOut); //out(几号块出队)
                outStack--;
            }else {
                clearInterval(sivOut);
                resolve(0);
            }
        },150)
    });
}


//----------------------------------------------------------------//

$(".in").click(function(){ //点击入队按钮

    console.log(bump());
    timerPromisefyIn().then(function (value) {
        $('.in').attr("disabled",false);
        crash(bump(),block);
        crashFont(bump());
        console.log(block,"---",blockOut,bump());
    });


});

//----------------------------------------------------------------//

$(".out").click(function(){

    timerPromisefyOut().then(function (value) {
        $('.out').attr("disabled",false);
        crash(bump(),block);
        crashFont(bump());
        console.log(block, "---", blockOut,bump());
    });


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



