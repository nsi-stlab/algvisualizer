/*交换元素动画*/
function insertAction() {
    $('.easyui-slider').slider('setValue',insertNum);
    insertRedio.insertRedioSpeed();
    insertRedio.insertRedioCode();
    let insertSortArr = insertSort[mark][insertNum];
    console.log(insertSortArr);
    insertCode.insertCodeAuto(insertSortArr[0]);
    insertSwop.insertSwopPx(insertSortArr[1]);
    insertSwop.insertSwopBg(
        insertSortArr[2][0],
        insertSortArr[2][1],
        insertSortArr[2][2],
        insertSortArr[1]
    );
    console.log(insertSortArr[3]);
    initFun.insertAreaWidth(insertSortArr[3]);
}

$(".easyui-slider").slider({
    onChange: function (newValue) {
        insertNum = newValue;
        //$("#insertStart").attr("name",0);
        insertAction();
    }
})

// mask([
//     {
//         id: 'top2P',
//         desc: '上一步<br/>播放<br/>下一步'
//     },{
//         id: 'top1Speed',
//         desc: '上一步<br/>播放<br/>下一步'
//     }
// ]);