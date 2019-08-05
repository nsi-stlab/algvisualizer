/*停时等待*/
function sleep(second) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("时间到");
        }, second);
    })
}

/*初始化类*/
var initFun = {
    /*删除全部列表元素*/
    insertListDelete:function(){
        let insertLength = $("#insertWrap li").length;
        for(let i=0;i<insertLength;i++) {
            $("#insertWrap .li"+i).remove();
        }
    },

    /*创建列表元素*/
    insertListCreate:function(num){
        for(let i=0;i<num.length;i++) {
            $("#x").append("<li class='li"+i+"'></li>");
            $(".li"+i).css({"left":(i*60+10)+"px"}).text(num[i]);
        }
    },

    /*生成排序数据*/
    insertSorts:function(arrays,mark){
        let list = [[],[]];
        let array = arrays.concat();        list[0].push([[0],mark.concat(),[0],0]);
        let data = 0;                       list[0].push([[1],mark.concat(),[0],0]);
        for(let i=0;i<array.length-1;i++){  list[0].push([[2],mark.concat(),[0],i]);
            for(let j=i;j>=0;j--){          list[0].push([[3],mark.concat(),[0],i]);
                if(array[j] > array[j+1]){  list[0].push([[4],mark.concat(),[1,j,j+1],i]);
                    list[1].push([[4],mark.concat(),[1,j,j+1],i]);
                    data = array[j];
                    array[j] = array[j+1];
                    array[j+1] = data;      let x = initFun.insertListShow(mark,j,j+1).concat();
                                            list[0].push([[5,6,7],x,[1,j,j+1],i]);
                                            list[1].push([[5,6,7],x,[1,j,j+1],i]);
                }else{                      list[0].push([[8],mark.concat(),[1,j,j+1],i]);
                                            list[1].push([[8],mark.concat(),[1,j,j+1],i]);
                                            list[0].push([[9],mark.concat(),[1,j,j+1],i]);
                                            list[1].push([[9],mark.concat(),[1,j,j+1],i]);
                }
            }
        }
                                            list[0].push([[11],mark.concat(),[0],array.length-1]);
                                            list[0].push([[12],mark.concat(),[0],array.length-1]);
                                            list[1].push([[100],mark.concat(),[0],array.length-1]);
                                            list[0].push([[100],mark.concat(),[0],array.length-1]);
        return list;
    },

    /*已排序&未排序背景*/
    insertAreaWidth:function(num) { //num=0代表第0位元素已排序
        $("#insertWrap ul").css({"width":(arr.length)*60+"px"}); //排序区域宽度
        $("#insertWrap .p3").css({"width":(num*60+60)+"px"}); //p3=已排序区域
        $("#insertWrap .p4").css({ //p4=未排序区域
            "width":((arr.length-1-num)*60)+"px",
            "left":(num+1)*60+"px"
        });
    },

    /*左右元素箭头*/
    insertArrow:function(left,right){
        $("#insertWrap .p1").css({"left":(left+1)*60-37.5+"px"})
        $("#insertWrap .p2").css({"left":(right+1)*60-37.5+"px"})
    },

    /*生成排序用下标*/
    insertMark:function(arr){
        let list = [];
        for(let i=0;i<arr.length;i++){
            list.push(i);
        }
        return list;
    },

    /*交换数组元素*/
    insertListShow:function(arr,num1,num2){
        let arrShow = arr;
        let data = arrShow[num1];
        arrShow[num1] = arrShow[num2];
        arrShow[num2] = data;
        return arrShow;
    }

}

/*工具类*/
var insertTool = {
    /*用来判断是否自动播放中*/
    insertStartName:function(){
        return $("#insertStart").attr("name");
    },

    /*播放暂停切换*/
    insertStartAuto:function(){
        if(insertTool.insertStartName() == 0){
            $("#insertStart").attr("name",1);
        }else if(insertTool.insertStartName() == 1){
            $("#insertStart").attr("name",0);
        }
    },

    /*将用户输入数字，转换成整数型数组*/
    insertDatas:function(data) {
        let datas = data.split(",");
        let list = new Array();
        for(let i=0;i<datas.length;i++){
            list.push(parseInt(datas[i]));
        }
        return list;
    }
}

/*代码高亮类*/
var insertCode = {
    /*显示代码高亮*/
    insertCodeShow:function(bright){
        for(let i=0;i<bright.length;i++){
            $(".insertCode li:eq("+bright[i]+")").css({"background":"red","color":"#fff"})
        }
    },

    /*隐藏所有代码高亮*/
    insertCodeHidden:function(){
        for(let i=0;i<15;i++){
            $(".insertCode li:eq("+i+")").css({"background":"#fff","color":"inherit"})
        }
    },

    /*先隐藏后显示*/
    insertCodeAuto:function(bright){
        insertCode.insertCodeHidden();
        insertCode.insertCodeShow(bright);
    }

}

/*元素动画类*/
var insertSwop = {
    /*交换动画*/
    insertSwopPx:function(arr){
        for(let i=0;i<8;i++){
            $("#insertWrap li:eq("+arr[i]+")").css({"left":i*60+10+"px"});
        }
    },

    /*背景动画*/
    insertSwopBg:function(num,left,right,arr){
        if(num == 1){
            for(let i=0;i<8;i++){
                $("#insertWrap li:eq("+i+")").css({"background":"#00c4ff"});
            }
            $("#insertWrap li:eq("+arr[left]+")").css({"background":"red"});
            $("#insertWrap li:eq("+arr[right]+")").css({"background":"red"});
        }else if(num == 0){
            for(let i=0;i<8;i++){
                $("#insertWrap li:eq("+i+")").css({"background":"#00c4ff"});
            }
        }
    }
}

/*多选框操作类*/
var insertRedio = {
    /*获取多选框对号位置*/
    insertRedioNum:function(name) {
        let objName = document.getElementsByName(name);
        for (let i = 0; i < objName.length; i++) {
            if (objName[i].checked) {
                return i;
            }
        }
    },

    insertRedioSpeed:function(){
        let n = insertRedio.insertRedioNum("speed");
        switch(n){
            case 0:
                speed = 800;
                break;
            case 1:
                speed = 400;
                break;
            case 2:
                speed = 200;
                break;
        }
    },

    insertRedioCode:function(){
        let n = insertRedio.insertRedioNum("code");
        switch(n){
            case 0:
                mark = 0;
                break;
            case 1:
                mark = 1;
                break;
        }
    },
}