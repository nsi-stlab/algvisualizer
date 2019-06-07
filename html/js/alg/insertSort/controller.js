/*交换元素动画*/
async function insertAction(num) {
    let objSpeed = document.getElementsByName("speed");
    let objCode = document.getElementsByName("code");

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

    let insertCodes = insertCode();
    let insertSwopShows = insertSwopShow(left,right);

    if(boolean){ //交换元素
        if(objCode[0].checked){ //代码开启
            if(num == 0){
                await insertCodes.insertCodeAuto(0,3);
            }
            await insertSwopShows.swopOkCodeOk();
        }else{
            await insertSwopShows.swopOkCodeNo();
        }
    }else{
        if(objCode[0].checked) { //开启
            if(num == 0){
                await insertCodes.insertCodeAuto(0,3);
            }
            await insertSwopShows.swopNoCodeOk();
        }else{
            await insertSwopShows.swopNoCodeNo();
        }
    }
}

/*排序指示区宽度*/
async function insertArea(num,dir){
    let left = insertSort[num][0],
        right = insertSort[num][1];
    if(left == 0 && right == 1 && dir == 0){
        insertNum2++;
        insertAreaWidth(insertNum2);
    }else if(left == 0 && right == 1 && dir == 1){
        insertNum2--;
        insertAreaWidth(insertNum2);
    }
}