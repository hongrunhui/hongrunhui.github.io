function otsu (histogram, total) {
    var sum = 0;
    for (var i = 1; i < 256; ++i)
        sum += i * histogram[i];
        //console.log(sum);
    var sumB = 0;
    var wB = 0;
    var wF = 0;
    var mB;
    var mF;
    var max = 0.0;
    var between = 0.0;
    var threshold1 = 0.0;
    var threshold2 = 0.0;
    for (var i = 0; i < 256; ++i) {
        wB += histogram[i];
        if (wB == 0)
            continue;
        wF = total - wB;
        //	console.log(total);
        if (wF == 0)
            break;
        sumB += i * histogram[i];
        //console.log(sumB);
        mB = sumB / wB;
        mF = (sum - sumB) / wF;
        between = wB * wF * (mB - mF) * (mB - mF);
        //	console.log(wB+" "+wF+" "+mB+" "+mF);
        if ( between >= max ) {
            threshold1 = i;
            if ( between > max ) {
                threshold2 = i;
            }
            max = between;
        }
    }
    return ( threshold1 + threshold2 ) / 2.0;
}
window.onload = function () {
    var fileEl = document.getElementById("file");
    fileEl.onchange = function () {
        var files = fileEl.files;
        for (var i = 0; i < files; i++) {
            console.log(files[i]);
        }
    };
};
// return;
// window.onload = function () {
//     /*html中dom元素--img*/
//     var img=document.getElementById('Img');
//     var canvas = document.getElementById("canvas");
//     var nextBtn=document.getElementById("nextBtn");
//     var prevBtn=document.getElementById("prevBtn");
//     var txt=document.getElementById("txt");
//     var curIndex=1;
//     /*用于保存最大阈值*/
//     var thresholdMax;
//     nextBtn.onclick=function(){
//     curIndex++;
//     if(curIndex>20){
//     curIndex=1;
//     }
//     img.crossOrigin = 'anonymous'; 
//     img.src="./img/"+curIndex+".jpg";
//     //	console.log(img.src);
//     //	txt.innerHTML="第"+curIndex+"张 "+"最大阈值："+thresholdMax;
//     setTimeout(drawBinImg,1000);

//     //	drawBinImg();
//     };
//     prevBtn.onclick=function(){
//     curIndex--;
//     if(curIndex<1){
//     curIndex=20;
//     }
//     img.crossOrigin = 'anonymous'; 
//     img.src="./img/"+curIndex+".jpg";
//     //	console.log(img.src);
//     //	txt.innerHTML="第"+curIndex+"张 "+"最大阈值："+thresholdMax;
//     setTimeout(drawBinImg,1000);
//     };
//     var ctxt = canvas.getContext('2d'); 
//     /*大津阈值法中运用到的变量*/
//     var gray, r, g, b, f,sum, t,w0=0,G0=0,w1=0,G1=0, N,GY,tempG= 0,index,wb,wf;
//     /*函数返回直方图数组，用于存放每一个灰度值的数量*/
//     //	ctxt.drawImage(img,0,0);
//     function imgData(){
//     var histogram=new Array(256);
//     for(var i=0;i<histogram.length;++i)
//     {
//     histogram[i]=0;
//     }	
//     //	ctxt.clearRect(0,0,canvas.width,canvas.height);
//     ctxt.drawImage(img,0,0,img.width,img.height);
//     //	console.log(img.width);
//     var data = ctxt.getImageData(0,0,img.width,img.height).data;
//     //	console.log(data);
//     for(var i=0;i<data.length;i+=4)
//     {
//     r = data[i];
//     b = data[i+1];
//     g = data[i+2];
//     f = data[i+3];
//     histogram[Math.floor((r+b+g)/3)]++;
//     }
//     //	console.log(histogram);
//     return histogram;
//     }
//     function otsu(histogram, total) {
//     var sum = 0;
//     for (var i = 1; i < 256; ++i)
//     sum += i * histogram[i];
//     //console.log(sum);
//     var sumB = 0;
//     var wB = 0;
//     var wF = 0;
//     var mB;
//     var mF;
//     var max = 0.0;
//     var between = 0.0;
//     var threshold1 = 0.0;
//     var threshold2 = 0.0;
//     for (var i = 0; i < 256; ++i) {
//     wB += histogram[i];
//     if (wB == 0)
//     continue;
//     wF = total - wB;
//     //	console.log(total);
//     if (wF == 0)
//     break;
//     sumB += i * histogram[i];
//     //console.log(sumB);
//     mB = sumB / wB;
//     mF = (sum - sumB) / wF;
//     between = wB * wF * (mB - mF) * (mB - mF);
//     //	console.log(wB+" "+wF+" "+mB+" "+mF);
//     if ( between >= max ) {
//     threshold1 = i;
//     if ( between > max ) {
//     threshold2 = i;
//     }
//     max = between;
//     }
//     }
//     return ( threshold1 + threshold2 ) / 2.0;
//     }
//     function drawBinImg(){	

//     canvas.width=img.width;
//     canvas.height=img.height;
//     N=img.width*img.height;
//     //	debugger;
//     var res=otsu(imgData(),N);

//     console.log("最大阈值："+res);
//     var Image = ctxt.getImageData(0,0,img.width,img.height);
//     for(var i=0;i<Image.data.length;i+=4)
//     {
//     r = Image.data[i];
//     b = Image.data[i+1];
//     g = Image.data[i+2];
//     f = Image.data[i+3];
//     if(Math.floor((r+b+g)/3)<=res){
//     Image.data[i]=0;
//     Image.data[i+1]=0;
//     Image.data[i+2]=0;
//     }else{
//     Image.data[i]=255;
//     Image.data[i+1]=255;
//     Image.data[i+2]=255;
//     }
//     } 
//     ctxt.clearRect(0,0,img.width,img.height);
//     ctxt.putImageData(Image,0,0,0,0,img.width,img.height);
//     //	console.log("done");
//     thresholdMax=res;
//     txt.innerHTML="第"+curIndex+"张 "+"最大阈值："+thresholdMax;

//     }
//     drawBinImg();
//     };