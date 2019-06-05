function insertCreate(num){
    for(let i=0;i<num.length;i++) {
        $("#x").append("<li class='li"+i+"'></li>");
        $(".li"+i).css({"left":(i*60+10)+"px"}).text(num[i]);
    }
}

function insertDelete(){
    for(let i=0;i<100;i++) {
        $("#insertWrap .li"+i).remove();
    }
}

function sleep(second) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("时间到");
        }, second);
    })
}

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

    /*两个div变成红色*/
    swopClass.swopColor1 = function (color) {
        $(".li" + left).css({"background":color});
        $(".li" + right).css({"background":color});
    }

    /*两个div变回蓝色*/
    swopClass.swopColor2 = function (color) {
        $(".li" + left).css({"background":color});
        $(".li" + right).css({"background":color});
    }

    return swopClass;
}

function insertStartName(){
    return $("#insertStart").attr("name");
}

function insertAreaWidth(num) {
    $("#insertWrap .p3").css({"width":(num*60+60)+"px"});
    $("#insertWrap .p4").css({"width":((arr.length-1-num)*60)+"px","left":(num+1)*60+"px"});
}

function insertDatas(data) {
    let datas = data.split(",");
    let list = new Array();
    for(let i=0;i<datas.length;i++){
        list.push(parseInt(datas[i]));
    }
    return list;
}

function insertArrow(left,right){
    // let leftWidth = $("#insertWrap .p1").css("width");
    // let rightWidth = $("#insertWrap .p2").css("width");
    $("#insertWrap .p1").css({"left":(left+1)*60-37.5+"px"})
    $("#insertWrap .p2").css({"left":(right+1)*60-37.5+"px"})
}