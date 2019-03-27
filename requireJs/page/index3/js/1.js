// @todo 分析一下三种定义的流程和区别，以及依赖的加载时机
// define谁在前谁的导出有效
// 无依赖函数定义
// 如果一个模块没有任何依赖，但需要一个做setup工作的函数，则在define()中定义该函数，并将其传给define()：
// define(function () {
//     return {
//         c: '2'
//     }
// });
// // 无依赖对象定义
// define({
//     a: '1'
// });
// 有依赖函数定义
define(["./cart"], function(cart) {
        //return an object to define the "my/shirt" module.
        return {
            color: "blue",
            size: "large",
            addToCart: function() {
                console.log(cart);
            }
        }
    }
);