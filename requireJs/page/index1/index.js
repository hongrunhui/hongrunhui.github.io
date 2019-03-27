if (typeof define === "function" && define.amd) {
    console.log("define来自require.js", define)
}

require(['js/js1', 'js/js2', 'js/js3'], function(num1, num2, num3){
    console.log('js1 js2 js3 loaded', arguments)
    var total = num1 + num2 + num3
    console.log(total)
});

requirejs(["js/js4"],function (js4) {
    console.log("导出的是：", js4)
});

require.config({
    //  baseUrl:"libs/"  //相对默认位置
    baseUrl:"libs/",
    paths:{//相对位置
        "jquery":"libs/jquery"
    },
    shim:{//依赖关系
        "jquery.zyslide":["jquery"]
        //zyslide依赖jquery
    }
    //有依赖关系后可以省略导入jquery


// 向服务端传递额外的参数，通常用来起到禁用缓存的效果

    urlArgs: "time=" +  new Date().getTime()
})

requirejs.config({
    baseUrl: 'js',
    paths: {
        app: './js/app'
    }
});
requirejs(['jquery', 'app/sub'], function ($, sub) {

});