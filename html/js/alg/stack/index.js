var memory = 36;
create(memory); //创建36个内存块
var block=(-1); //入栈号,栈头
var blockOut=(-1); //出栈号,栈尾

if(localStorage.getItem('name') == 1){
    $("#mask").css({"display":"none"});
}

function timerPromisefyIn() {
    $('.in').attr("disabled",true);
    $('.out').attr("disabled",true);
    let inStack = document.getElementsByClassName("inStack")[0].value; //获取入栈输入的字符
    let num = inStack.length;
    let i = 0;
    return new Promise(function (resolve,reject) {
        let sivIn = setInterval(function () {
            crash(bump()); //判断栈头栈尾文字碰撞
            crashFont(bump()); //栈为空&满时，提示
            console.log("a");
            if(bump() != 0 && num > 0) { //bump 0=满栈 & 36=空栈
                block = StackLogic(block); //栈环逻辑
                ins(inStack[i], block); //ins(栈内容,几号块栈)
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
    $('.in').attr("disabled",true);
    $('.out').attr("disabled",true);
    let outStack = document.getElementsByClassName("outStack")[0].value; //获取入栈输入的字符
    return new Promise(function (resolve,reject) {
        let sivOut = setInterval(function () {
            crash(bump());
            crashFont(bump());
            if (bump() != memory && outStack > 0) {
                out(block--); //out(几号块出栈)
                outStack--;
            }else {
                clearInterval(sivOut);
                resolve(0);
            }
        },150)
    });
}


//----------------------------------------------------------------//

$(".in").click(function(){ //点击入栈按钮

    console.log(bump());
    timerPromisefyIn().then(function (value) {
        $('.in').attr("disabled",false);
        $('.out').attr("disabled",false);
        crash(bump());
        crashFont(bump());
        console.log(block,"---",blockOut,bump());
    });


});

//----------------------------------------------------------------//

$(".out").click(function(){

    timerPromisefyOut().then(function (value) {
        $('.in').attr("disabled",false);
        $('.out').attr("disabled",false);
        crash(bump());
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

//----------------------------------------------------------------//

mask([
    {
        id: 'x',
        desc: '这是内存块'
    },
    {
        id: 'in',
        desc: '这是入栈框，可将框内字符连续入栈，最长输入二十位。'
    },
    {
        id: 'out',
        desc: '这是出栈框，可连续出栈，最多输入两位数。'
    }
]);