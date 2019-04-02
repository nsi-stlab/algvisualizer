function bump(){
    var a=0,b=0;
    for(var i=0;i<36;i++){
        var u = $(".li"+i).css("background-color");
        if(u == "rgba(0, 0, 0, 0)"){
            a++;
        }
    }
    return a;
}