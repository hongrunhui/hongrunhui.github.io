define(["require", "exports", "module","js/js5"], function (require, exports, module,js5) {
    exports = "啊"; // 导出失败，不会被挂载到module上
    // 导出成功
    // 必须这么写才能导出值
    module.exports = "天幽";
    // requirejs里的私有依赖
    console.log('require', require);
    console.log('exports', exports);
    console.log('module', module);
});