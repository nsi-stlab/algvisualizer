var insertSort,insertNum,insertNum2,speed=500; //初始化
var arr = [6,3,2,5,9,8,4,1];
function init(arr){
    let insertLists = insertList();
    insertLists.insertListDelete(); //删除全部列表元素
    insertLists.insertListCreate(arr); //创建列表元素
    insertAreaWidth(0); //已排序&未排序的背景
    insertArrow(0,1);
    insertSort = insertSorts(arr); //获得排序数据
    insertNum = 0,insertNum2 = 0; //排序标识
}
init(arr);

/*自动排序*/
$("#insertStart").click(async function(){
    if(insertStartName() == 0){
        $("#insertStart").attr("name",1);
    }else if(insertStartName() == 1){
        $("#insertStart").attr("name",0);
    }
    while(true){
        if(insertNum < insertSort.length && insertStartName() == 1){
            await insertAction(insertNum);
            await insertArea(insertNum,0);
            insertNum++;
            await sleep(speed);
        }else{
            $("#insertStart").attr("name",0);
            break;
        }
    }
});

/*上一步*/
$("#insertLast").click(async function(){
    $("#insertStart").attr("name",0);
    if(insertNum > 0){
        insertNum--;
        await insertAction(insertNum);
        await insertArea(insertNum,1);
    }
});

/*下一步*/
$("#insertNext").click(async function(){
    $("#insertStart").attr("name",0);
    if(insertNum < insertSort.length){ //是否还有排序未完成元素
        await insertAction(insertNum);
        await insertArea(insertNum,0);
        insertNum++;
    }
});

/*排序*/
$("#insertDataInput").click(function(){
    $("#insertStart").attr("name",0);
    arr = insertDatas(  $("#insertData").val()  );
    init(arr);
});

/*重置*/
$("#insertReset").click(function(){
    $("#insertStart").attr("name",0);
    init(arr);
})

/*侧边菜单*/
