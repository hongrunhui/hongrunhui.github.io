window.__DATA__  = [];
String.prototype._replace = function(re, cb) {
    var start = new Date().getTime();
    var result = this.replace(re, cb);
    var end = new Date().getTime();
    var info = {
        string: this.toString(),
        result: result,
        re: re.toString(),
        cb: cb,
        time: end - start,
        type: 'replace',
        change: this.toString() !== result.toString()
    };
    __DATA__.push(info);
    return result;
}
Array.prototype._join = function(str) {
    var result = this.join(str);
    var info = {
        string: this,
        result: result,
        re: str,
        type: 'join',
        change: this.toString() !== result.toString()
    };
    __DATA__.push(info);
    return result;
};
String.prototype._split = function(re) {
    var result = this.split(re);
    var info = {
        string: this.toString(),
        result: result,
        re: re,
        type: 'split',
        change: this.toString() !== result.toString()
    };
    __DATA__.push(info);
    return result;
};
function string(obj){
    if (obj && obj.toString) {
        return obj.toString();
    }
    else {
        return obj;
    }
}
String.prototype._match = function(re) {
    var result = this.match(re);
    var info = {
        string: string(this),
        result: result,
        re: re,
        type: 'match',
        change: string(this) !== string(result)
    };
    __DATA__.push(info);
    return result;
};
RegExp.prototype._exec = function(str) {
    var result = this.exec(str);
    var info = {
        string: string(str),
        result: result,
        re: string(this),
        type: 'exec',
        change: string(this) !== string(result)
    };
    __DATA__.push(info);
    return result;
};
function _Function() {
    var args = arguments;
    var body = args[args.length - 1];
    var result;
    if (args.length === 1) {
        result = new Function(body);
    }
    else if (args.length === 2) {
        result = new Function(args[0], body);
    }
    else if (args.length === 3) {
        result = new Function(args[0], args[1], body);
    }
    else {
        result = new Function(args[0], body);
    }
    var info = {
        args: args,
        body: body,
        result: result,
        type: 'Function'
    };
    __DATA__.push(info);
    return result;
}