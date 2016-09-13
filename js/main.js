/**
 * Created by Administrator on 2016/9/2.
 */
window.onload= function () {
    /*---------所有分类----------------------------------------------------------------------------*/
    var meau = document.getElementsByClassName("down_meau")[0];
    var classify = document.getElementById("classify");
    classify.onmouseover = function () {
        meau.style.display = "block";
        classify.style.backgroundPosition="160px -40px"
    };
    classify.onmouseout = meau.onmouseout = function () {
        meau.style.display = "none";
        classify.style.backgroundPosition="160px 0"
    };
    /*------------右侧导航----------------------------------------------------------------------*/
    var ul_rsb = document.getElementById("rsbar");
    var ul_rsb_li = ul_rsb.getElementsByTagName("li");
    //console.log(li[0])
    /*============回到顶部============================================================================*/
    window.onscroll = function (event) {
        event = event || window.event;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 100) {
            ul_rsb_li[5].style.display = "block"
        } else {
            ul_rsb_li[5].style.display = "none"
        }
    };
    ul_rsb_li[5].onclick = function () {
        document.documentElement.scrollTop = document.body.scrollTop = 0
    };
    /*==================二维码显示================================================================================*/
    var vm = document.getElementById("vm");
    ul_rsb_li[4].onmouseover = function () {
        vm.style.display = "block";
    };
    ul_rsb_li[4].onmouseout = vm.onmouseout = function () {
        vm.style.display = "none"
    };
    /*================联系客服拖动==========================================================*/
    var consult = document.getElementById("consult");
    var consult_div = consult.getElementsByTagName("div");
    var con_header = consult_div[1];
    //console.log(consult.getElementsByTagName("div")[1])
    con_header.onmousedown = function (event) {
        event = event || window.event;
        var x = event.clientX - consult.offsetLeft;
        var y = event.clientY - consult.offsetTop;
        document.onmousemove = function (event) {
            event = event || window.event;
            consult.style.left = event.clientX - x + "px";
            consult.style.top = event.clientY - y + "px";
        };
        con_header.onmouseup = function () {
            document.onmousemove = null;
            con_header.onmouseup = null;
        };
        return false
    };
    /*===================点击客服框显现===!!!!===========================================================*/
    var li = ul_rsb.getElementsByTagName("li");
    var consult_down = document.getElementById("consult_down");
    li[0].onclick = function () {
        consult.style.display = "block";
        consult_down.style.display = "none"
    };
    var consult_span = consult_div[1].getElementsByTagName("span");
    //console.log(consult_div[1].getElementsByTagName('span')[0])
    consult_span[1].onclick = function () {
        consult.style.display = "none"
    };
    /*consult_span[2].onclick= function () {
     startMove(consult,{height:593});
     consult.style.backgroundPosition="-20px 0"
     }*/
    consult_span[3].onclick = function () {
        consult.style.display = "none";
        consult_down.style.display = "block"
    };
    consult_down.onclick = function () {
        consult.style.display = "block";
        consult_down.style.display = "none"
    };
    /*----------------------切换地区-!!!!!--------------------------------------------------------------------*/
    var change = document.getElementById("change");
    var city = document.getElementById("city");

    var dionlg_filed = document.getElementById("dionlg_filed");
    var area = document.getElementById("area");//要选择的地区
    change.onclick = function () {
        dionlg_filed.style.display = "block";
        area.style.display = "block"
    };
    //初始化地区？？？？？？？？？？？？？？？？？？bug
    var allA = area.getElementsByTagName("a");
    for (var i = 1, l = allA.length; i < l; i++) {
        var num = i;
        var as = allA[i];
        as.index = i;
        as.onclick = function () {
            city.innerHTML = this.innerHTML;
            num = this.index
        };
        city.innerHTML = allA[num].innerHTML;

    };

    /*------------footer----------------------------------------*/
    var city_ul=document.getElementById("city_ul");
    var allLi=city_ul.getElementsByTagName("li");
    var url1="js/tab.json?t="+new Date().getTime();
    var arr;
    ajax.get(url1, function (str) {
        var obj=eval("("+str+")");
        arr=obj.list;
    });

    for(var i=0; i<allLi.length; i++) {
        allLi[i].index=i;
        allLi[i].onmouseover= function () {
            var a1=document.getElementById("a1");
            var p_con=document.getElementsByClassName("p_con")[0];
            var arrP=p_con.getElementsByTagName("p");
            var city_shop=document.getElementsByClassName("city_shop")[0];
            var shop_img=city_shop.getElementsByTagName("img")[0];
            a1.innerHTML=arr[this.index].p1;
            arrP[0].innerHTML=arr[this.index].p2;
            arrP[1].innerHTML=arr[this.index].p3;
            arrP[2].innerHTML=arr[this.index].p4;
            shop_img.src="images/reg_img/"+arr[this.index].img;
            for(var i=0; i<allLi.length; i++){
                allLi[i].className="";
                allLi[this.index].className="selected"
            }
        }
    }
};


