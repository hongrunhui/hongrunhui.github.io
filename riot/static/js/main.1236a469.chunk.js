(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(_,e,t){_.exports=t(22)},16:function(_,e,t){},19:function(_,e,t){_.exports=t.p+"static/media/logo.5d5d9eef.svg"},20:function(_,e,t){},22:function(_,e,t){"use strict";t.r(e);var n=t(1),r=t.n(n),a=t(5),s=t.n(a),i=(t(16),t(3));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));console.log(i.a),s.a.render(r.a.createElement(i.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(_){_.unregister()})},3:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_hongrunhui_Documents_mydoc_fork_code_analysis_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),_Users_hongrunhui_Documents_mydoc_fork_code_analysis_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),_Users_hongrunhui_Documents_mydoc_fork_code_analysis_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),_Users_hongrunhui_Documents_mydoc_fork_code_analysis_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),_Users_hongrunhui_Documents_mydoc_fork_code_analysis_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),react_hyperscript__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react_hyperscript__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_hyperscript__WEBPACK_IMPORTED_MODULE_6__),_logo_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(19),_logo_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_7__),react_json_view__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(2),react_json_view__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_json_view__WEBPACK_IMPORTED_MODULE_8__),_App_scss__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(20),_App_scss__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_9__),App=function(_Component){function App(){return Object(_Users_hongrunhui_Documents_mydoc_fork_code_analysis_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),Object(_Users_hongrunhui_Documents_mydoc_fork_code_analysis_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_Users_hongrunhui_Documents_mydoc_fork_code_analysis_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).apply(this,arguments))}return Object(_Users_hongrunhui_Documents_mydoc_fork_code_analysis_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_Component),Object(_Users_hongrunhui_Documents_mydoc_fork_code_analysis_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"componentDidMount",value:function(){this.indexI=this.indexJ=0,this.initWebsocket(),this.renderTree(),this.selectText(this.preCode)}},{key:"addClass",value:function(){var _=document.getElementsByClassName("pre");[].forEach.call(_,function(_,e){_.classList.add("prettyprint","linenums")}),window.prettyPrint()}},{key:"initWebsocket",value:function(){var _=this,e=this,t=new WebSocket("ws://localhost:3000/");t.onopen=function(){t.send("getOriginData")},t.onmessage=function(t){var n=t.data;n=JSON.parse(n),console.log("originData",n,JSON.parse),"originData"===n.name&&(e.__DATA__=JSON.parse(n.data),e.oldVariable=e.__DATA__[0][0].oldVariable,e.newVariable=e.__DATA__[0][0].newVariable,e.args=e.__DATA__[0][0].args,e.preCode.textContent=e.__DATA__[0][0].func.replace(/function __GETVAR__\(name\) {return eval\(name\);} var __VAR__ = SAVE\(arguments, __GETVAR__\)\;/g,""),_.setState({a:1}),_.preCode.className="pre",console.log("=====",e.__DATA__,e.my_json_object),e.addClass())}}},{key:"nextStep",value:function(){this.indexI<this.__DATA__[this.indexJ].length?this.indexI++:(this.indexJ++,this.indexI=0),this.preCode.textContent=this.__DATA__[this.indexJ][this.indexI].func.replace(/function __GETVAR__\(name\) {return eval\(name\);} var __VAR__ = SAVE\(arguments, __GETVAR__\)\;/g,""),this.oldVariable=this.__DATA__[this.indexJ][this.indexI].oldVariable,this.newVariable=this.__DATA__[this.indexJ][this.indexI].newVariable,this.args=this.__DATA__[this.indexJ][this.indexI].args,this.setState({a:1}),this.preCode.className="pre",this.addClass()}},{key:"prevStep",value:function(){this.indexI>0?this.indexI--:this.indexJ>0&&(this.indexJ--,this.indexI=this.__DATA__[this.indexJ]&&this.__DATA__[this.indexJ].length||0),this.preCode.textContent=this.__DATA__[this.indexJ][this.indexI].func.replace(/function __GETVAR__\(name\) {return eval\(name\);} var __VAR__ = SAVE\(arguments, __GETVAR__\)\;/g,""),this.oldVariable=this.__DATA__[this.indexJ][this.indexI].oldVariable,this.newVariable=this.__DATA__[this.indexJ][this.indexI].newVariable,this.args=this.__DATA__[this.indexJ][this.indexI].args,this.setState({a:2}),this.preCode.className="pre",console.log(this.indexJ,this.indexJ),this.addClass()}},{key:"selectText",value:function(_){return window.getSelection?window.getSelection().toString():document.selection.createRange().text}},{key:"renderTree",value:function(){var _,e=this,t=window.d3,n={top:30,right:20,bottom:30,left:20},r=20,a=.2*(960-n.left-n.right),s=0,i=400,o=t.linkHorizontal().x(function(_){return _.y}).y(function(_){return _.x}),l=t.select(".tree-box").append("svg").attr("width",960).append("g").attr("transform","translate("+n.left+","+n.top+")");function c(h){var E=_.descendants(),f=Math.max(500,E.length*r+n.top+n.bottom);t.select("svg").transition().duration(i).attr("height",f);var D=-1;_.eachBefore(function(_){_.x=++D*r,_.y=20*_.depth});var A=l.selectAll(".node").data(E,function(_){return _.id||(_.id=++s)}),m=A.enter().append("g").attr("class","node").attr("transform",function(_){return"translate("+h.y0+","+h.x0+")"}).style("opacity",0);m.append("rect").attr("y",-r/2).attr("height",r).attr("width",a).style("fill",p).on("click",d),m.append("text").attr("dy",3.5).attr("dx",5.5).text(function(_){return _.data.name});var y=m.append("rect").attr("y",-r/2).attr("x",a-30).attr("height",r).attr("width","30").style("fill","green").on("click",function(_){var n=_.data.index;if(console.log("ddddd",_,y),y._groups.forEach(function(_){_.forEach(function(_){_.__data__.isClick=!1})}),_.isClick=!0,y.style("fill",u),n){e.preCode.textContent=e.__DATA__[0][n].func.replace(/function __GETVAR__\(name\) {return eval\(name\);} var __VAR__ = SAVE\(arguments, __GETVAR__\)\;/g,""),e.oldVariable=e.__DATA__[0][n].oldVariable,e.newVariable=e.__DATA__[0][n].newVariable,e.args=e.__DATA__[0][n].args,e.preCode.className="pre",e.addClass(),console.log(t.select(".source-box"),_);var r=t.select(".source-box");r.style("position","absolute"),r.style("left",_.y+a+100+"px"),r.style("top",_.x+"px"),e.setState({a:1})}c(_)});m.append("text").attr("dy",r/2-10).attr("dx",a-20).text(function(_){return _.data.index}),m.transition().duration(i).attr("transform",function(_){return"translate("+_.y+","+_.x+")"}).style("opacity",1),A.transition().duration(i).attr("transform",function(_){return"translate("+_.y+","+_.x+")"}).style("opacity",1).select("rect").style("fill",p),A.exit().transition().duration(i).attr("transform",function(_){return"translate("+h.y+","+h.x+")"}).style("opacity",0).remove();var x=l.selectAll(".link").data(_.links(),function(_){return _.target.id});x.enter().insert("path","g").attr("class","link").attr("d",function(_){var e={x:h.x0,y:h.y0};return o({source:e,target:e})}).transition().duration(i).attr("d",o),x.transition().duration(i).attr("d",o),x.exit().transition().duration(i).attr("d",function(_){var e={x:h.x,y:h.y};return o({source:e,target:e})}).remove(),_.each(function(_){_.x0=_.x,_.y0=_.y})}function d(_){console.log(_),_.children?(_._children=_.children,_.children=null):(_.children=_._children,_._children=null),c(_)}function u(_){return _.isClick?"red":"green"}function p(_){return _._children?"#3182bd":_.children?"#c6dbef":"#fd8d3c"}t.json("treeData.json",function(e,n){if(e)throw e;(_=t.hierarchy(n)).x0=0,_.y0=0,c(_)})}},{key:"render",value:function render(){console.log("ss",react_hyperscript__WEBPACK_IMPORTED_MODULE_6___default()("div#App","aa").outerHTML);var self=this;return console.log("00",self.my_json_object),react_hyperscript__WEBPACK_IMPORTED_MODULE_6___default()("div#App",[react_hyperscript__WEBPACK_IMPORTED_MODULE_6___default()("div.pop-code-box",{ref:function(_){self.popCodeBox=_}},[react_hyperscript__WEBPACK_IMPORTED_MODULE_6___default()("pre",{className:"pop-code",onMouseUp:function(_){},ref:function(_){self.popCode=_}},"")]),react_hyperscript__WEBPACK_IMPORTED_MODULE_6___default()("div.code-box",[react_hyperscript__WEBPACK_IMPORTED_MODULE_6___default()("div.tree-box"),react_hyperscript__WEBPACK_IMPORTED_MODULE_6___default()("div.source-box",[react_hyperscript__WEBPACK_IMPORTED_MODULE_6___default()("div.source-code",[react_hyperscript__WEBPACK_IMPORTED_MODULE_6___default()(react_json_view__WEBPACK_IMPORTED_MODULE_8___default.a,{displayDataTypes:!1,theme:"twilight",src:{arguments:self.args}}),react_hyperscript__WEBPACK_IMPORTED_MODULE_6___default()("pre",{className:"pre code",onMouseDown:function(){},onMouseUp:function onMouseUp(e){e.stopPropagation();var text=self.selectText(self.preCode);console.log(text);var x=e.pageX,y=e.pageY;self.popCodeBox.setAttribute("style","left:"+(+x+30)+"px;top:"+y+"px;display: block");var value=self.newVariable[text]||self.oldVariable[text];if(value)self.popCode.textContent=value;else try{console.log(value,eval(value));var result=eval(text);self.popCode.textContent=eval(text)}catch(e){console.log(e)}console.log(self.popCode.textContent),self.popCode.className="pre",self.addClass()},ref:function(_){self.preCode=_}},"")]),react_hyperscript__WEBPACK_IMPORTED_MODULE_6___default()("div.json-view",[react_hyperscript__WEBPACK_IMPORTED_MODULE_6___default()(react_json_view__WEBPACK_IMPORTED_MODULE_8___default.a,{displayDataTypes:!1,theme:"twilight",src:{oldVariable:self.oldVariable}}),react_hyperscript__WEBPACK_IMPORTED_MODULE_6___default()(react_json_view__WEBPACK_IMPORTED_MODULE_8___default.a,{displayDataTypes:!1,theme:"twilight",src:{newVariable:self.newVariable}})])])])])}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=App}},[[11,2,1]]]);
//# sourceMappingURL=main.1236a469.chunk.js.map