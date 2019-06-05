/*初始化*/
var insertSort,insertNum,insertNum2,speed=500;
var arr = [4,3,2,1];
function init(arr){
    insertAreaWidth(0);
    insertDelete(); //删除div
    insertCreate(arr); //创建div
    insertSort = insertSorts(arr); //排序数据
    insertNum = 0,insertNum2 = 0; //排序指示区标识
}
init(arr);

/*交换div动画*/
async function insertAction(num) {

    let objSpeed = document.getElementsByName("speed");
    if(objSpeed[0].checked){
        speed = 800;
    }else if(objSpeed[1].checked){
        speed = 400;
    }else if(objSpeed[2].checked){
        speed = 200;
    }else {
        speed = 500;
    }

    let left = insertSort[num][0],
        right = insertSort[num][1],
        boolean = insertSort[num][2];
    let swops = swop(left,right);
    if(boolean){
        insertArrow(left,right);
        swops.swopColor1("red");
        await sleep(speed);
        swops.swopSite(); //交换位置
        swops.swopStyle(); //交换class
        await sleep(speed);
        swops.swopColor2("#00c4ff");
    }else{
        insertArrow(left,right);
        swops.swopColor1("red");
        await sleep(speed);
        swops.swopColor2("#00c4ff");
    }
}

/*排序指示区宽度*/
async function insertArea(num,dir){
    let left = insertSort[num][0],
        right = insertSort[num][1];
    if(left == 0 && right == 1 && dir == 0){
        await sleep(speed*2.5);
        insertNum2++;
        insertAreaWidth(insertNum2);
    }else if(left == 0 && right == 1 && dir == 1){
        await sleep(speed*2.5);
        insertNum2--;
        insertAreaWidth(insertNum2);
    }
}

/*下一步*/
$("#insertNext").click(function(){
    if(insertNum < insertSort.length){
        insertAction(insertNum);
        insertArea(insertNum,0);
        insertNum++;
    }
});

/*上一步*/
$("#insertLast").click(function(){
    if(insertNum > 0){
        insertNum--;
        insertAction(insertNum);
        insertArea(insertNum,1);
    }
});

/*自动排序*/
$("#insertStart").click(async function(){
    if(insertStartName() == 0){
        $("#insertStart").attr("name",1);
    }else if(insertStartName() == 1){
        $("#insertStart").attr("name",0);
    }
    while(true){
        if(insertNum < insertSort.length && insertStartName() == 1){
            insertAction(insertNum);
            insertArea(insertNum,0);
            insertNum++;
            await sleep(speed*3);
        }else{
            $("#insertStart").attr("name",0);
            break;
        }
    }
});

$("#insertDataInput").click(function(){
    $("#insertStart").attr("name",0);
    arr = insertDatas(  $("#insertData").val()  );
    init(arr);
});

$("#insertReset").click(function(){
    $("#insertStart").attr("name",0);
    init(arr);
})