var J = 0
    I = 0; //队列&栈内数字初始化
function r(){
    var div = document.createElement('li'); //创建li标签
    div.innerHTML = J; //设置显示的数据，可以是标签．
    div.className = "li"+J; //为标签创建唯一class
    J++; //队列&栈内数字+1
    div.style.background = "rgb(0,0,0)";//设置背景颜色
    var bo = document.getElementById("x");//获取body对象
    bo.insertBefore(div,bo.lastChild); //动态插入到body中
    document.getElementById("h4").innerHTML = "此时方块"+(J-1)+"入栈";
    //console.log("此时方块"+(J-1)+"入栈");
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
        $(".li" + P).animate({marginTop: '200px', opacity: 0}, 500, function () {
            $(".li" + P).remove();
        });
        document.getElementById("h4").innerHTML = "此时方块"+P+"出栈";
        console.log("此时方块"+P+"出栈");
    }
}


function CodeRun() {
    //var T = $(".in1").val();
    var T = $(".in1").val(),
        MyAr=new Array(),
        R = 0,
        C = 0,
        J = '';
    //console.log(T[1]);
    for(var i=0;i<T.length;i++){
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
    for (var i = 0; i < MyAr.length; i++) {
        if (MyAr[i][0] == 'R'){

            var j1 = 0,
                ii1 = i,
                iii1 = 1;
            var t1 = setInterval(function(){
                if(j1 < parseInt(MyAr[ii1].substr(1))){
                    j1++;
                    r();
                }else{
                    clearInterval(t1);
                    iii1 = 0;
                }
                console.log(parseInt(MyAr[ii1].substr(1)));
            },200);


            /*for(var j = 0;j < parseInt(MyAr[i].substr(1));j++){
                r()
                console.log("r");
            }*/
        }else if(MyAr[i][0] == 'C'){

            var j2 = 0,
                ii2 = i;
            var t2 = setInterval(function(){
                if(j2 < parseInt(MyAr[ii2].substr(1)) && iii1==0){
                    j2++;
                    c();
                }else if(j2 == parseInt(MyAr[ii2].substr(1))){
                    clearInterval(t2);
                }
                console.log(iii1);
            },200);


            /*for(var j = 0;j < parseInt(MyAr[i].substr(1));j++){
                c()
                console.log("c");
            }*/
        }
    }
}
//console.log(inp());