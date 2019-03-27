define(function(require, exports, module) {
        var a = require('a');
        console.log(require, exports, module);
        return {
            a: a
        }
    }
);