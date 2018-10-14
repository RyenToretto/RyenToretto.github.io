/*
 *    模拟 2 的整除运算       5 >> 1    // 相当于 5 / 2 = 2
 * 
 *    任意值 = 任意值 + "";    // 就能转换成字符串
 *    任意值 = +任意值;        // 就能转换成 Number，更简洁
 *    任意值 = !!任意值;       // 即可将 任意值 转换成布尔类型的值
 * 
 *    toString方法 将十进制的数，转为其他进制的字符串
 *    parseInt方法 将其他进制的数，转回十进制
 * 
 *    '\r\nabc \t'.trim() // 'abc'
 */

// 最优冒泡排序
function bubbleSort(arr){
    var i = 0;
    var j = 0;
    var temp = 0;
    var isOkay = true;
    
    for(i=0; i<arr.length; i++){
        isOkay = true;
        for(j=0; j<arr.length-1-i; j++){
            if(arr[j+1] > arr[j]){
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                isOkay = false;
            }
        }
        if(isOkay == true){
            break;
        }
    }
}

// 自定义反转数组
function revArr(arr){
    var i=0,temp=0;
    for(i=0; i<(arr.length>>1); i++){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
}

// 自定义 转为32位整数（不管是整数或小数）
function toInt32(x) {
    return x | 0;
}

// 判断变量是否为对象的函数
function isObject(value) {
    return value === Object(value);
}

// 自定义 将颜色的 RGB 值转为 HEX 值
function rgb2hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b)    // (1 << 24)的作用为保证结果是6位数
        .toString(16)    // 先转成十六进制，然后返回字符串
        .substr(1);    // 去除字符串的最高位，返回后面六个字符串
}

// 自定义 获取元素当前样式
function getCurrentStyle(obj, name){
    if(window.getComputedStyle){
        // 大多浏览器支持, IE8 及以下不支持
        return window.getComputedStyle(obj, null)[name];
    }else{
        // 只有 IE 浏览器支持
        return obj.currentStyle[name];    // 当获取 left 这样的属性时，可能返回 auto
    }
}

// 自定义 绑定响应函数
function bindEventFunc(obj, eventStr, func){
    // console.log(!!obj.addEventListener == true);    // true
    // console.log(!!obj.attachEvent == true );    // false
    if(obj.addEventListener){
        // 大多数浏览器支持, IE8 及以下不支持
        obj.addEventListener(eventStr, func, false);
    }else{
        // IE5 - IE10 支持
        obj.attachEvent("on"+eventStr, function(){
            func().call(obj);
        });
    }
}

// 自定义 解除响应函数
function removeEventFunc(obj, eventStr, func){
    // console.log(!!obj.removeEventListener == true);    // true
    // console.log(!!obj.detachEvent == true );    // false
    if(obj.removeEventListener){
        // 大多数浏览器支持, IE8 及以下不支持
        obj.removeEventListener(eventStr, func, false);
    }else if(obj.detachEvent){
        // IE5 - IE10 支持
        obj.detachEvent("on"+eventStr, func);
    }
}

// 自定义 获取元素 在整个页面中的 坐标
function posInHTML(obj){
    var rect = obj.getBoundingClientRect();
    
    // 在IE中，默认坐标从(2,2)开始计算，导致最终距离比其他浏览器多出两个像素，需要做以下兼容
    var top = document.documentElement.clientTop;
    var left = document.documentElement.clientLeft;
    
    return {
        top: rect.top - top,
        right: rect.right - left,
        bottom: rect.bottom - top,
        left: rect.left - left
    };
}

// 自定义 获取鼠标 在目标元素中的 坐标
function posInElement(obj,e){
    var mouseX = e.clientX+(document.body.scrollLeft || document.documentElement.scrollLeft);
    var mouseY = e.clientY+(document.body.scrollTop || document.documentElement.scrollTop);
    
    var objX = obj.getBoundingClientRect().left - document.documentElement.clientLeft;
    var objY = obj.getBoundingClientRect().top - document.documentElement.clientTop;
    
    return {
        top: mouseY - objY,
        left: mouseX - objX,
        right: obj.style.width - mouseX - objX,
        bottom: obj.style.height - mouseY - objY
    };
}
