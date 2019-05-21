function ins(size,x,y,time,color) {
    let timer = setInterval(function () {
        let a = y[0] - x[0];
        let b = y[1] - x[1];

        if(a == 0 && b == 0){
            div(x[0],x[1],size[0],size[1],color);
            //clearInterval(timer);
        }else{
            if(a > 0) {
                div(x[0]++,x[1],size[0],size[1],color);
            }else if(a < 0){
                div(x[0]--,x[1],size[0],size[1],color);
            }
            if(b > 0){
                div(x[0],x[1]++,size[0],size[1],color);
            }else if(b < 0){
                div(x[0],x[1]--,size[0],size[1],color);
            }
        }
    },time)
}

function div(x,y,width,height,color){
    context.clearRect(x-2,y-2,width+4,height+4);//清空画布
    let grd=context.createLinearGradient(0,0,30,150);
    grd.addColorStop(0,color);
    //grd.addColorStop(1,"#00FF00");
    context.fillStyle=grd;
    context.fillRect(x, y, width, height);
}

