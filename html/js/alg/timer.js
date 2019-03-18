//控制器
var timer = function (fn, num, block) {
    for (var i = block; i < num; i++) {
        fn(i);
    }
}