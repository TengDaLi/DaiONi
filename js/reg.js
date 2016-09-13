/**
 * Created by Administrator on 2016/9/2.
 */
$(function () {
    $("#regBtn").click(function () {
        var strMobieNum=$("#mobieNum").val();
        var strCheckCode=$("#checkCode").val();
        var strUserPassword=$("#userPassword").val();
        var strCheckPassword=$("#checkPassword").val();
        var flag=true;
        $(".min_bto_p1").html("");
        $(".min_bto_p2").html("");
        $(".min_bto_p3").html("");
        $(".min_bto_p4").html("");
        $(".min_bto_p5").html("");
        if(!(/^1[3|4|5|7|8]\d{9}$/.test(strMobieNum))){
            $(".min_bto_p1").html("请输入正确的手机号码").css({"color":"red"});
            flag=false;
        }
        if(strMobieNum==""){
            $(".min_bto_p1").html("手机号码不能为空").css({"color":"red"});
            flag=false;
        }else {
            var strCookie = getCookie("user_" + encodeURIComponent(strMobieNum));
            if (strCookie != "") {
                $(".min_bto_p1").html("用户名已被占用").css({"color": "red"});
                flag = false;
            }
        }
        if(strCheckCode==""){
            $(".min_bto_p2").html("请填写验证码").css({"color":"red"});
            flag=false;
        }
        if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,20}$/.test(strUserPassword))){
            $(".min_bto_p4").html("密码为6-20位必须包含大小写字母和数字").css({"color":"red"});
            flag=false;
        }
        if(strUserPassword==""){
            $(".min_bto_p4").html("密码不能为空").css({"color":"red"});
            flag=false;
        }
        if(strCheckPassword!=strUserPassword){
            $(".min_bto_p5").html("密码不一致").css({"color":"red"});
            flag=false;
        }
        if(!($("#confirm").attr("checked")=="checked")){
            flag=false;
        }
        if(flag){
            setCookie("user_"+encodeURIComponent(strMobieNum), strUserPassword, 10);
            setCookie("userlogin", strMobieNum, 10);
            location.href="../index.html";
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
            console.log($("#denglu").html());

        }

    })
});

