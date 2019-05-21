function insertionSort(array) {
    console.time('插入排序耗时：');
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while ( array[j] > key) {
            array[j + 1] = array[j];
            j--;

            for(let i=0;i<array.length;i++) {
                console.log(array)
                let div = document.createElement('li'); //创建li标签
                let ul = document.createElement('ul'); //创建li标签
                div.className = "li" + i; //为标签创建唯一class
                ul.className = ""
                let bo = getId("insertWrap");//获取body对象
                if(i==0){
                    bo.insertBefore(ul, bo.lastChild); //动态插入到body中
                }else {
                    bo.insertBefore(div, bo.lastChild); //动态插入到body中
                    $(".li"+i).css({"height":arr[i]*4});
                }
            }
            console.log(arr)

        }
        array[j + 1] = key;
    }
    console.timeEnd('插入排序耗时：');
    return array;
}

var arr=[3,44,38,5,47,15,36,26,27,2,14,16];


insertionSort(arr);