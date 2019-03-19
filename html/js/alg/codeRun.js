function codeRun() {
    var T = $(".in1").val(), //读取输入框里的数据
        MyAr=new Array(),
        I = 0,
        O = 0,
        J = '';
    for(var i=0;i<T.length;i++){ //分析入队和出队各有多少个，保存在MyAr数组里
        if(T[i] == "("){
            if(T[i-1] == "r"){
                I = 1;
                continue
            }else if(T[i-1] == "c"){
                O = 1;
                continue
            }
        }else if (T[i] == ")"){
            if(I == 1){
                MyAr.push('I'+J);
            }else if(O == 1){
                MyAr.push('O'+J);
            }
            J = '';
            I = 0;
            O = 0;
        }

        if(I == 1){
            J += T[i];
        }else if(O == 1){
            J += T[i];
        }
    }
    return MyAr;
}
