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
async function dv(j,jj){
    console.log(j,j+1,jj);
    $("#insertWrap .p1").css({"left":((j+0)*40+(j*20))+7+"px"});
    $("#insertWrap .p2").css({"left":((j+1)*40+((j+1)*20))+24+"px"});
    await sleep(speed*1000);
    $(".li"+(j+1)).css({"background":"red"});
    $(".li"+(j)).css({"background":"red"});

    await sleep(speed*2000);
    if(jj == 1) {
        /*两个div交换left位置*/
        $(".li" + (j + 1)).css({"left": $(".li" + j).css("left")});
        $(".li" + (j)).css({"left": $(".li" + (j + 1)).css("left")});

        /*两个div交换class*/
        $(".li" + j).addClass("lix").removeClass("li" + j);
        $(".li" + (j + 1)).addClass("li" + j).removeClass("li" + (j + 1));
        $(".lix").addClass("li" + (j + 1)).removeClass("lix");
    }
    $(".li"+(j+1)).css({"background":"#00c4ff"});
    $(".li"+(j)).css({"background":"#00c4ff"});


}