/*-------------------------------------------------*/
$(function () {
    var userlogin=getCookie("userlogin");
    //console.log(userlogin);
    if(userlogin!="") {
        var a = $("<a></a>");
        a.html("退出");
        a.click(function () {
            setCookie("userlogin", "", -10);
            history.go(0);
            //location.href="index.html";
        });
        $("#user").html("");
        $("#user").html("欢迎您 " + userlogin + " ").append(a);
        //$("#denglu").remove();
        // $("#zhuce").remove();
        $("#denglu").html("");
        $("#zhuce").html("");
    }
    /*-----------------轮播图-----------------------------------------------------------------------*/
    var banner = document.getElementById("banner");
    var banul = banner.getElementsByTagName("ul")[0];
    var banol = banner.getElementsByTagName("ol")[0];
//console.log(banul[0])
    var banul_li = banul.children;
    var banol_li = banol.children;
    banul_li[0].style.opacity = 1;
    banol_li[0].style.backgroundPosition="left 0";
    var now = 0;
    for (var i = 0, l = banol_li.length; i < l; i++) {
        var li = banol_li[i];
        li.index = i;
        li.onclick = function () {
            now = this.index;
            lbt()
        }
    }
    function lbt() {
        for (var i = 0, l = banol_li.length; i < l; i++) {
            var li = banol_li[i];
            li.style.backgroundPosition="right 0";
            startMove(banul_li[i], {opacity: 0})
        }
        startMove(banul_li[now], {opacity: 100});
        banol_li[now].style.backgroundPosition="left 0";
    }

    function next() {
        now++;
        if (now == banol_li.length) {
            now = 0;
        }
        lbt();
    }

    var timer = setInterval(next, 3000);
    banner.onmouseover = function () {
        clearInterval(timer);
    };
    banner.onmouseout = function () {
        timer = setInterval(next, 3000);
    };

});

