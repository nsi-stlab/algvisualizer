function insertCreate(num){
    for(let i=0;i<num;i++) {
        let div = document.createElement('li'); //创建li标签
        div.className = "li" + i; //为标签创建唯一class
        let bo = getId("x");//获取body对象
        bo.insertBefore(div, bo.lastChild); //动态插入到body中
    }
}
function sleep(second) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(' enough sleep~');
        }, second);
    })
}
function dv(arr){
    for(let i=0;i<arr.length;i++){
        $(".li"+i).css({"background":"#00c4ff"});
        $(".li"+i).text(arr[i]);
    }
}