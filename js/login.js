/**
 * Created by Administrator on 2016/9/2.
 */
$(function () {
   // var strMobieLogin=$("#mobieLogin").val();
   // var strUserPasswordLogin=$("#userPasswordLogin").val();
    $("#mobieLogin").val(getCookie("x"));
    //console.log(strMobieLogin)
    $("#userPasswordLogin").val(getCookie("y"));
    $("#loginBtn").click(function () {
        var strMobieLogin=$("#mobieLogin").val();
        var strUserPasswordLogin=$("#userPasswordLogin").val();
        var flag=true;
        $(".tishi1").html("");
        $(".tishi2").html("");
        if(strMobieLogin==""){
            $(".tishi1").html("用户名不能为空").css({"color":"red"});
            flag=false;
        }
        if(strUserPasswordLogin==""){
            $(".tishi2").html("密码不能为空").css({"color":"red"});
            flag=false;
        }
        if(flag){
            var strCookie=getCookie("user_"+encodeURIComponent(strMobieLogin));
            if(strCookie!="" && strUserPasswordLogin==strCookie){
                setCookie("userlogin",strMobieLogin,10);
                location.href="../index.html"
            }else if(strCookie==""){
                $(".tishi1").html("用户不存在").css({"color":"red"});
            }
            else{
                $(".tishi2").html("密码不正确").css({"color":"red"});
            }
        }
        var userlogin=getCookie("userlogin");
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
    });
    $("#confirm").click(function () {
        $("#loginBtn").click(function () {
            var strMobieLogin=$("#mobieLogin").val();
            var strUserPasswordLogin=$("#userPasswordLogin").val();
            setCookie("x", strMobieLogin, 10);
            setCookie("y", strUserPasswordLogin, 10);
        });
    })
});

