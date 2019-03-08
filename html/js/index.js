
cr = 0;
cr2 = 0;

var J = 0,
    I = 0; //队列&栈内数字初始化
function r(){
    var div = document.createElement('li'); //创建li标签
    div.innerHTML = J; //设置显示的数据，可以是标签．
    div.className = "li"+J; //为标签创建唯一class
    J++; //队列&栈内数字+1
    div.style.background = "rgb(218,13,17)";//设置背景颜色
    var bo = document.getElementById("x");//获取body对象
    bo.insertBefore(div,bo.lastChild); //动态插入到body中
    document.getElementById("h4").innerHTML = "此时方块"+(J-1)+"入栈";
    console.log("此时方块"+(J-1)+"入栈");
}

function c(){
    if (I < J) {
        var P = I;//确认唯一class
        I++;
        /*$(".li" + P).css({
            "animation":"x 1s",
            "position":"absolute",
            "top":"54px",
            "left":"150px"
            "marginLeft":"-100px",
        });*/
        $(".li" + P).animate({marginLeft: '-100px'}, 300);
        $(".li" + P).animate({top: '200px', opacity: 0}, 500, function () {
            $(".li" + P).remove();
        });
        document.getElementById("h4").innerHTML = "此时方块"+P+"出栈";
        console.log("此时方块"+P+"出栈");
    }
}


function CodeRun() {

    if(cr == 0 && cr2 == 1){ //如果执行过了，并且cr为1开始状态，暂停
        console.log("zt");
        cr = 1; //cr为1:暂停
        //alert("zt");
        $("#CodeRun").css({"backgroundImage":"url(images/start.png)"});
        return;
    }else if(cr == 1 && cr2 == 1){  //如果执行过了，并且cr0为暂停状态，开始
        console.log("ks");
        cr = 0;  //cr为0:开始
        //alert("ks");
        $("#CodeRun").css({"backgroundImage":"url(images/stop.png)"});
        return;
    }
    cr2 = 1; //判断动画是否在执行，0:未执行，1:执行过了

    //var T = $(".in1").val();
    //$("#CodeRun").attr("disabled","disabled"); //禁用代码执行按钮
    $("#CodeRun").css({"backgroundImage":"url(images/stop.png)"});
    var T = $(".in1").val(), //读取输入框里的数据
        MyAr=new Array(),
        R = 0,
        C = 0,
        J = '';
    //console.log(T[1]);
    for(var i=0;i<T.length;i++){ //分析入队和出队各有多少个，保存在MyAr数组里
        if(T[i] == "("){
            if(T[i-1] == "r"){
                R = 1;
                continue
            }else if(T[i-1] == "c"){
                C = 1;
                continue
            }
        }else if (T[i] == ")"){
            if(R == 1){
                MyAr.push('R'+J);
            }else if(C == 1){
                MyAr.push('C'+J);
            }
            J = '';
            R = 0;
            C = 0;
        }

        if(R == 1){
            J += T[i];
        }else if(C == 1){
            J += T[i];
        }
    }
    //return MyAr;
    console.log(MyAr);//R10,C5,R10,C10
    i = 0,
    oo = 0,
    num = 0; //判断动画是否正在执行，0:没在执行，1:正在执行
    stack = setInterval(function(){ //动画队列，执行完一个动画之后再执行另一个动画，直到全部执行完毕，销毁队列
        console.log(oo);
        if(i >= MyAr.length && oo == 0){
            //$("#CodeRun").removeAttr("disabled"); //启用代码执行按钮
            cr2 = 0;
            console.log("cr20le");
            $("#CodeRun").css({"backgroundImage":"url(images/start.png)"});
            clearInterval(stack);
        }else if(oo == 0){
            if (MyAr[i][0] == 'R'){
                oo = 1;
                runrc("R",parseInt(MyAr[i].substr(1)));
                i++;
            }else if(MyAr[i][0] == 'C'){
                oo = 1;
                runrc("C",parseInt(MyAr[i].substr(1)));
                i++;
            }
        }
    },200);
    /*if(cr == 0){
        timer.pause(); // 暂停所有的 setTimeout & setInterval
    }else if(cr == 4){
        timer.resume(); // 恢复所有的 setTimeout & setInterval
    }*/

}

function runrc(rc,count){ //动画函数，rc:入队还是出队，count:出入队列个数
    irc = 0, //判断是否达到入队个数
    oo = 1; //动画执行状态，0:没在执行，1:正在执行
    t1 = setInterval(function(){
        if(rc == "R"){
            if(cr == 0){ //判断是否暂停 0:开始，1:暂停。如果为0开始
                r();
                irc++;
                num++;
                if (irc >= count) { //判断是否达到入队个数
                    clearInterval(t1); //销毁循环
                    oo = 0; //恢复动画状态为0，没在执行
                }
                console.log("numr", num);
            }
        }else if(rc == "C"){
            if(cr == 0) {
                c();
                irc++;
                num--;
                if (irc >= count || num <= 0) { //判断是否达到入队个数,或者是否全部出队
                    oo = 0; //恢复动画状态为0，没在执行
                    clearInterval(t1); //销毁循环
                }
                console.log("numc", num);
            }
        }
    },500);
}