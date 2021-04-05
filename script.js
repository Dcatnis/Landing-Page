$(function(){
    $(".burger_icon").click(function(){
    $(".burger_icon").css("display","none")
    $(".close_btn").css("display","block")
    $(".mobmenu").slideToggle(1000)
    })


    $(".close_btn").click(function(){
        $(".close_btn").css("display","none")
        $(".burger_icon").css("display","block")
        $(".mobmenu").slideToggle(1000)

    })
   
}) 