// 单纯这么写没用
// module.exports = 2;
define(['module', 'exports'], function (module, exports) {
    // exports.声明的属性会被挂载到module上
    exports.cc = {
        a: 1
    };
    console.log('module2', module, exports);
});