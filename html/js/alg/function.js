function getId(id) {
    return document.getElementById(id);
}

function getClass(css) {
    return document.getElementsByClassName(css);
}

//创建栈列块
function create(num){
    for(let i=0;i<num;i++) {
        let div = document.createElement('li'); //创建li标签
        div.className = "li" + i; //为标签创建唯一class
        let bo = getId("x");//获取body对象
        bo.insertBefore(div, bo.lastChild); //动态插入到body中
        // var t = 0.314;
        // var p = (i+1)*t-1;
        // $(".li"+i).css({"left":Math.sin(p)*160+185,"top":Math.cos(p)*160+185});
    }
}

//返回字符串中数字
function numberInt(string) {
    return string.replace(/[^0-9]/ig,"");
}

function getPointTop(obj) { //获取某元素以浏览器左上角为原点的坐标
    let t = obj.offsetTop; //获取该元素对应父容器的上边距
    //判断是否有父容器，如果存在则累加其边距
    while (obj = obj.offsetParent) {//等效 obj = obj.offsetParent;while (obj != undefined)
        t += obj.offsetTop; //叠加父容器的上边距
    }
    return t;
}

function getPointLeft(obj) { //获取某元素以浏览器左上角为原点的坐标
    let l = obj.offsetLeft; //对应父容器的上边距
    //判断是否有父容器，如果存在则累加其边距
    while (obj = obj.offsetParent) {//等效 obj = obj.offsetParent;while (obj != undefined)
        l += obj.offsetLeft; //叠加父容器的左边距
    }
    return l;
}

function mask(params) {

    localStorage.setItem('name',1);

    let mask = getId('mask');

    if (params.length === 0) {
        mask.style.display = 'none';
        return;
    }

    let {id, desc} = params[0];

    /****************   获取要cover的元素基本信息   ****************/
    let ele = getId(id);
    let offsetWidth = ele.offsetWidth;
    let offsetHeight = ele.offsetHeight;
    let offsetLeft = getPointLeft(ele);
    let offsetTop = getPointTop(ele);
    // var offsetLeft = ele.offsetLeft ;
    // var offsetTop = ele.offsetTop;

    console.log(offsetWidth, offsetHeight, offsetLeft, offsetTop);
    console.log(offsetWidth, offsetHeight, getPointTop(ele), getPointLeft(ele));

    /****************   获取屏幕大小，包含滚动区域   ****************/
    let scrollWidth = document.body.scrollWidth;
    let scrollHeight = document.body.scrollHeight;

    console.log(scrollWidth, scrollHeight);

    /****************   为Mask设置css   ****************/
    mask.style.zIndex = 99999;
    mask.style.width = scrollWidth + 'px';
    mask.style.height = scrollHeight + 'px';
    mask.style.borderColor = "rgba(0, 0, 0, 0.75)";
    mask.style.borderStyle = 'solid';
    mask.style.borderLeftWidth = offsetLeft - 5 + 'px';
    mask.style.borderRightWidth = (scrollWidth - offsetWidth - offsetLeft - 5) + 'px';
    mask.style.borderTopWidth = offsetTop - 5 + 'px';
    mask.style.borderBottomWidth = (scrollHeight - offsetHeight - offsetTop - 5) + 'px';
    mask.style.position = 'absolute';
    mask.style.left = 0;
    mask.style.top = 0;

    /****************   为Mask设置desc   ****************/
    let maskDesc = getId('mask-desc');
    maskDesc.innerHTML = desc;

    /****************   绑定next事件   ****************/
    let nextBtn = getId('mask-next');
    (function(mask) {
        nextBtn.onclick = function() {
            params.shift();
            mask(params);
        };
    })(arguments.callee);
}