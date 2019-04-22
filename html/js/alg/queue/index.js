var memory = 36;
create(memory); //创建36个内存块
var block=(-1); //入队号,队头
var blockOut=(-1); //出队号,队尾

if(localStorage.getItem('name') == 1){
    $("#mask").css({"display":"none"});
}

function timerPromisefyIn() {
    $('.in').attr("disabled",true);
    let inQueue = document.getElementsByClassName("inQueue")[0].value; //获取入队输入的字符
    let num = inQueue.length;
    let i = 0;
    return new Promise(function (resolve,reject) {
        let sivIn = setInterval(function () {
            crash(bump()); //判断队头队尾文字碰撞
            crashFont(bump()); //队列为空&满时，提示
            console.log("a");
            if(bump() != 0 && num > 0) { //bump 0=满队列 & 36=空队列
                block = queueLogic(block); //队列环逻辑
                ins(inQueue[i], block); //ins(入队内容,几号块入队)
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
    let outQueue = document.getElementsByClassName("outQueue")[0].value; //获取入队输入的字符
    return new Promise(function (resolve,reject) {
        let sivOut = setInterval(function () {
            crash(bump());
            crashFont(bump());
            if (bump() != memory && outQueue > 0) {
                blockOut = queueLogic(blockOut);
                out(blockOut); //out(几号块出队)
                outQueue--;
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
        crash(bump());
        crashFont(bump());
        console.log(block,"---",blockOut,bump());
    });


});

//----------------------------------------------------------------//

$(".out").click(function(){

    timerPromisefyOut().then(function (value) {
        $('.out').attr("disabled",false);
        crash(bump());
        crashFont(bump());
        console.log(block, "---", blockOut,bump());
    });


})

//----------------------------------------------------------------//

//keyup键盘按下，keyup键盘弹起
$(".outQueue").blur(function() { //文本框失去焦点后
    if(this.value.replace(/\D/g,'').length == 0){ //如果文本框没有内容
        this.value = 1;
    }else if(this.value.length > 2 ){ //如果文本框长度 > 2
        this.value=this.value.replace(/\D/g,'').substring(0, 2);
    }else {
        this.value=this.value.replace(/\D/g,'');
    }
})

$(".inQueue").blur(function() {
    if(this.value.length == 0){
        this.value = 1;
    }else if(this.value.length > memory ){
        this.value=this.value.substring(0, memory);
    }
})

//----------------------------------------------------------------//

mask([
    {
        id: 'x',
        desc: '这是内存块'
    },
    {
        id: 'in',
        desc: '这是入队框，可将框内字符连续入队，最长输入二十位。'
    },
    {
        id: 'out',
        desc: '这是出队框，可连续出队，最多输入两位数。'
    }
]);