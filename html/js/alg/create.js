function create(){
    var div = document.createElement('li'); //创建li标签
    div.className = "li"+i; //为标签创建唯一class
    var bo = document.getElementById("x");//获取body对象
    bo.insertBefore(div,bo.lastChild); //动态插入到body中
}