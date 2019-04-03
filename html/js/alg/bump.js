function bump(){
    var a=0,b=0;
    for(var i=0;i<36;i++){
        var u = $(".li"+i).text();
        if(u == ""){
            a++;
        }
    }
    return a;
}