var insertSort,
    insertNum,
    speed = 200,
    mark = 0,
    arr = [6,3,2,5,9,8,4,1]; //初始化

function init(arr){
    initFun.insertListDelete(); //删除全部列表元素
    initFun.insertListCreate(arr); //创建列表元素
    initFun.insertAreaWidth(0); //已排序&未排序的背景
    initFun.insertArrow(0,1); //左右元素箭头
    insertSort = initFun.insertSorts(arr,initFun.insertMark(arr)); //获得排序数据
    insertNum = -1; //排序标识
    console.log(insertSort);
    $(".easyui-slider").slider({
        mode:"h",
        min :0,
        max :insertSort[0].length-1,
        rule:[0+'%','|',25+'%','|',50+'%','|',75+'%','|',100+'%'],
        showTip:true,
        value:0
    })
}
init(arr)

/*自动排序*/
$("#insertStart").click(async function(){
    insertTool.insertStartAuto();
    while(true){
        if(insertNum < insertSort[mark].length-1 && insertTool.insertStartName() == 1){
            insertNum++;
            insertAction();
            await sleep(speed);
        }else{
            $("#insertStart").attr("name",0);
            break;
        }
    }
})


/*上一步*/
$("#insertLast").click(function(){
    $("#insertStart").attr("name",0);
    if(insertNum > 0){
        insertNum--;
        insertAction();
    }
});

/*下一步*/
$("#insertNext").click(function(){
    $("#insertStart").attr("name",0);
    if(insertNum < insertSort[mark].length-1){ //是否还有排序未完成元素
        insertNum++;
        insertAction();
    }
});

/*排序*/
$("#insertDataInput").click(function(){
    $("#insertStart").attr("name",0);
    arr = insertTool.insertDatas(  $("#insertData").val()  );
    init(arr);
});

/*重置*/
$("#insertReset").click(function(){
    $("#insertStart").attr("name",0);
    init(arr);
})