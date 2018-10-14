
window.onload = function(){
    // 鼠标跟随
    var followMouse = document.getElementById("follow_mouse");
    bindEventFunc(document, "mousemove", function(e){
        e = e || window.event;
        
        // 鼠标相当于文档的 x , y 坐标
        var x = e.clientX + document.body.scrollLeft || document.documentElement.scrollLeft;
        var y = e.clientY + document.body.scrollTop || document.documentElement.scrollTop;
        
        followMouse.style.left = x + 7 + "px";
        followMouse.style.top = y + 7 + "px";
    });
    
    var theBody = document.body;
    var moveInfo = document.getElementById("move_info");
    theBody.onmousemove = function(e){
        e = e || window.event;

        var x = e.clientX + document.body.scrollLeft || document.documentElement.scrollLeft;
        var y = e.clientY + document.body.scrollTop || document.documentElement.scrollTop;
        moveInfo.innerHTML = "<span>client( "+e.clientX+" , "+e.clientY+" )</span>"+
                             "body( "+x+" , "+y+" )";
        moveInfo.getElementsByTagName("span")[0].style.marginRight = "20px";
    };
};
