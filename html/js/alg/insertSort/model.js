/*停时等待*/
function sleep(second) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("时间到");
        }, second);
    })
}

/*生成排序数据*/
function insertSorts(arrays){
    let array = $.extend(true,[],arrays);
    let list = [];
    let data = 0;
    let on = 0;
    for(let i=0;i<array.length-1;i++){
        for(let j=i;j>=0;j--){
            if(array[j] > array[j+1]){
                list[on] = [j,j+1,true];
                data = array[j];
                array[j] = array[j+1];
                array[j+1] = data;
            }else{
                list[on] = [j,j+1,false];
            }
            on++;
        }
    }
    return list;
}

/*用来判断是否自动播放中*/
function insertStartName(){
    return $("#insertStart").attr("name");
}

/*将用户输入数字，转换成整数型数组*/
function insertDatas(data) {
    let datas = data.split(",");
    let list = new Array();
    for(let i=0;i<datas.length;i++){
        list.push(parseInt(datas[i]));
    }
    return list;
}

/*交换元素*/
function swop(left,right){
    let swopClass = new Object;

    /*两个div交换left位置*/
    swopClass.swopSite = function () {
        $(".li" + left).css({"left": $(".li" + right).css("left")});
        $(".li" + right).css({"left": $(".li" + left).css("left")});
    }

    /*两个div交换class*/
    swopClass.swopStyle = function () {
        $(".li" + left).addClass("lix").removeClass("li" + left);
        $(".li" + right).addClass("li" + left).removeClass("li" + right);
        $(".lix").addClass("li" + right).removeClass("lix");
    }

    /*两个div变换颜色*/
    swopClass.swopColor = function (color) {
        $(".li" + left).css({"background":color});
        $(".li" + right).css({"background":color});
    }

    return swopClass;
}

/*已排序&未排序背景*/
function insertAreaWidth(num) { //num=0代表第0位元素已排序
    $("#insertWrap ul").css({"width":(arr.length)*60+"px"}) //排序区域宽度
    $("#insertWrap .p3").css({"width":(num*60+60)+"px"}); //p3=已排序区域
    $("#insertWrap .p4").css({ //p4=未排序区域
        "width":((arr.length-1-num)*60)+"px",
        "left":(num+1)*60+"px"
    });
}


/*左右元素箭头*/
function insertArrow(left,right){
    // let leftWidth = $("#insertWrap .p1").css("width");
    // let rightWidth = $("#insertWrap .p2").css("width");
    $("#insertWrap .p1").css({"left":(left+1)*60-37.5+"px"})
    $("#insertWrap .p2").css({"left":(right+1)*60-37.5+"px"})
}

/*代码显示类*/
function insertCode(){
    let insertCodes = new Object;
    /*显示代码高亮*/
    insertCodes.insertCodeShow = function(first,last){
        for(let i=first;i<last+1;i++){
            $(".insertCode li:eq("+i+")").css({"background":"red","color":"#fff"})
        }
    }

    /*隐藏代码高亮*/
    insertCodes.insertCodeHidden = function(first,last){
        for(let i=first;i<last+1;i++){
            $(".insertCode li:eq("+i+")").css({"background":"#fff","color":"inherit"})
        }
    }

    /*代码高亮闪烁*/
    insertCodes.insertCodeAuto = async function(first,last) {
        let insertCodes = insertCode();
        for(let i=first;i<last+1;i++){
            insertCodes.insertCodeShow(i,i);
            await sleep(speed);
            insertCodes.insertCodeHidden(i,i);
        }
    }
    return insertCodes;
}

/*交换元素显示类*/
function insertSwopShow(left,right){
    let insertSwopShow = new Object();
    let insertCodes = insertCode();
    let swops = swop(left,right);

    /*交换元素&高亮代码*/
    insertSwopShow.swopOkCodeOk = async function (){
        insertArrow(left,right);
        swops.swopColor("red");
        await insertCodes.insertCodeAuto(4,6);
        insertCodes.insertCodeShow(7,7);
        await sleep(speed);
        swops.swopSite(); //交换位置
        swops.swopStyle(); //交换class
        await sleep(speed);
        swops.swopColor("#00c4ff");
        await sleep(speed);
        insertCodes.insertCodeHidden(7,7);
        await insertCodes.insertCodeAuto(11,11);
    }

    /*交换元素&不高亮代码*/
    insertSwopShow.swopOkCodeNo = async function (){
        insertArrow(left,right);
        swops.swopColor("red");
        await sleep(speed);
        swops.swopSite(); //交换位置
        swops.swopStyle(); //交换class
        await sleep(speed);
        swops.swopColor("#00c4ff");
        await sleep(speed);
    }

    /*不交换元素&高亮代码*/
    insertSwopShow.swopNoCodeOk = async function (){
        insertArrow(left, right);
        swops.swopColor("red");
        await insertCodes.insertCodeAuto(4,5);
        await insertCodes.insertCodeAuto(8,8);
        insertCodes.insertCodeShow(9,9);
        await sleep(speed);
        swops.swopColor("#00c4ff");
        await sleep(speed);
        insertCodes.insertCodeHidden(9,9);
        await insertCodes.insertCodeAuto(11,11);
        await sleep(speed);
    }

    /*不交换元素&不高亮代码*/
    insertSwopShow.swopNoCodeNo = async function (){
        insertArrow(left, right);
        swops.swopColor("red");
        await sleep(speed);
        swops.swopColor("#00c4ff");
        await sleep(speed);
    }
    return insertSwopShow;
}

function insertList(){
    let insertList = new Object();
    /*创建列表元素*/
    insertList.insertListCreate = function(num){
        for(let i=0;i<num.length;i++) {
            $("#x").append("<li class='li"+i+"'></li>");
            $(".li"+i).css({"left":(i*60+10)+"px"}).text(num[i]);
        }
    }

    /*删除全部列表元素*/
    insertList.insertListDelete = function(){
        let insertLength = $("#insertWrap li").length;
        for(let i=0;i<insertLength;i++) {
            $("#insertWrap .li"+i).remove();
        }
    }

    return insertList;
}