var out = function out(num){
    $(".li" + num).animate({marginLeft: '-100px'}, 300);
    $(".li" + num).animate({top: '200px', opacity: 0}, 500, function () {
        $(".li" + num).remove();
    });
    document.getElementById("h4").innerHTML = "此时方块"+num+"出栈";
    console.log("此时方块"+num+"出栈");
}