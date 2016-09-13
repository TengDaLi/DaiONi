/*-------------------------------------------------*/
$(function () {

    $.get("js/content.json", function (obj) {
        if(typeof obj == "string")obj=eval("("+obj+")");
        var arr=obj.list;
        console.log($("<p>"+arr[0].p[0]+"</p>"));
        $("#content1>.left>a>img").attr("src","images/content_img/"+arr[0].img[0]);
        $("#content1>.center>a>img").attr("src","images/content_img/"+arr[0].img[1]);
        $("#content1>.right>a>img").attr("src","images/content_img/"+arr[0].img[2]);
        $("#content1>.left>a").append($("<p>"+arr[0].p[0]+"</p>"));
        $("#content1>.center>a").append($("<p>"+arr[0].p[1]+"</p>"));
        $("#content1>.right>a").append($("<p>"+arr[0].p[2]+"</p>"));
        $("#content3>.center>a>img").attr("src","images/content_img/"+arr[1].imgcenter[0])
        $("#content3>.right .right_top_left>a>img").attr("src","images/content_img/"+arr[1].imgright[0])
        $("#content3>.right .right_top_right>a>img").attr("src","images/content_img/"+arr[1].imgright[1])
        $("#content3>.right .right_bottom_left>a>img").attr("src","images/content_img/"+arr[1].imgright[2])
        $("#content3>.right .right_bottom_center>a>img").attr("src","images/content_img/"+arr[1].imgright[3])
        $("#content3>.right .right_bottom_right>a>img").attr("src","images/content_img/"+arr[1].imgright[4])
        $("#content4 img:eq(0)").attr("src","images/content_img/"+arr[2].img[0]);
        $("#content4 img:eq(1)").attr("src","images/content_img/"+arr[2].img[1]);
        $("#content4 img:eq(2)").attr("src","images/content_img/"+arr[2].img[2]);
        $("#content4 img:eq(3)").attr("src","images/content_img/"+arr[2].img[3]);
    })
});

