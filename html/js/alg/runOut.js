function runOut(block,ii){
    for(var j=0;j<ii;j++){
        setTimeout(function () {
            out(block++); //指定几号方块入栈
        },100*j)
    }
    return ii;
}