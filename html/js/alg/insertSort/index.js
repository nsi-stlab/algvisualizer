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

var arr=[3,44,38,5,47,15,36,26,27,2,14,16];
insertCreate(arr.length);

for(let i=0;i<arr.length;i++){
    $(".li"+i).css({"left":(i*60)+"px"});
    $(".li"+i).text(arr[i]);
}

async function insertionSort(array) {
    console.time('插入排序耗时');
    for (let i = 0; i < array.length; i++) {
        let j = i;
        while(arr[j+1] < arr[j]){
            let da = arr[j+1];

            let result = await sleep(500);
            arr[j+1] = arr[j];
            arr[j] = da;
            j--;
            dv(arr);
            $(".li"+j).css({"background":"#000"});
            $(".li"+(j+1)).css({"background":"#000"});
        }
    }
    console.timeEnd('插入排序耗时');
    return array;
}
insertionSort(arr);