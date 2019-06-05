// function insertionSort(array) {
//     console.time('插入排序耗时：');
//     for (let i = 1; i < array.length; i++) {
//         let key = array[i];
//         let j = i - 1;
//         while ( array[j] > key) {
//             array[j + 1] = array[j];
//             j--;
//         }
//         array[j + 1] = key;
//     }
//     console.timeEnd('插入排序耗时：');
//     return array;
// }

var speed = 0.5;
var next = 0;
var arr=[3,44,38,5];
insertCreate(arr.length);

for(let i=0;i<arr.length;i++){
    $(".li"+i).css({"left":(i*60)+"px"});
    $(".li"+i).text(arr[i]);
}

async function insertionSort(array) {
    console.time('插入排序耗时');
    for (let i = 0; i < array.length-1; i++) {
        let j = i;
        while (arr[j] > arr[j+1]) {
            let stop = $("#insertStop").val();
            if(stop == "已暂停" && next == 0 || speed == 0) {
                console.log("暂停", next, speed);
                let result = await sleep(200);
            } else {
                if (next > 0) {
                    next--;
                }
                let da = arr[j + 1];
                arr[j + 1] = arr[j];
                await dv(j,1);
                arr[j] = da;
                j--;
                let result = await sleep(speed * 1000);
                //dv(arr);
                // $(".li"+j).css({"background":"#000"});
                // $(".li"+(j+1)).css({"background":"#000"});
            }
        }
        while (arr[j] <= arr[j+1]) {
            let stop = $("#insertStop").val();
            if(stop == "已暂停" && next == 0 || speed == 0) {
                console.log("暂停", next, speed);
                let result = await sleep(200);
            } else {
                if (next > 0) {
                    next--;
                }

                await dv(j,0);
                j--;
                let result = await sleep(speed * 1000);
                //dv(arr);
                // $(".li"+j).css({"background":"#000"});
                // $(".li"+(j+1)).css({"background":"#000"});
            }
        }
        $("#insertWrap .p3").css({"width":(i+1)*60+"px"});
        $("#xx").append("<li>第"+(i+1)+"次排序结果"+arr+"</li>")
    }
    $("#insertWrap .p3").css({"width":(arr.length)*60+"px"});
    console.timeEnd('插入排序耗时');
    $(".insertText").text("排序结束");
    return array;
}

insertionSort(arr);

$("#insertStop").click(function() {
    if($("#insertStop").val() == "运行中"){
        $("#insertStop").val("已暂停");
        $("#insertStop").css({"background":"red"});
        //$(".insertText").text("已暂停...");
    }else if($("#insertStop").val() == "已暂停"){
        $("#insertStop").val("运行中");
        $("#insertStop").css({"background":"#4cae4c"});
        //$(".insertText").text("运行中...");
    }
})
$("#insertNext").click(function() {
    next++;
})
