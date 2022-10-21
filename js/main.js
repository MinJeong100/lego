$("document").ready(function () {

    $(".product .toggles-btn-wrap li").eq(0).addClass("on")

    // 서브 메뉴 영역
    $(".header .nav ul li").click(function(e){
        e.preventDefault();
        let i = $(this).index();

        
        $(".window").show().css({"z-index":"98", "background-color":"rgba(0,0,0,0.4)"});
        $(".header .nav ul li").removeClass("on").eq(i).addClass("on");
        $(".depth2").addClass("on")
        $(".depth2 .depth2-area").hide().eq(i).show();
        $(".depth2 .depth3").removeClass("on")
        $("html, body").css("overflow", "hidden")
    })
    $(".m-btn").click(function(){
        let i = $(this).index();
        
        $(".depth1").addClass("on")
        $(".window").show().css({"z-index":"98", "background-color":"rgba(0,0,0,0.4)"});
        $(".header .nav ul li").removeClass("on").eq(i).addClass("on");
        $(".depth2 .depth2-area").hide().eq(i).show();
        $(".depth2").removeClass("on")
        $(".depth2 .depth3").removeClass("on")
        $("html, body").css("overflow", "hidden")
        $("go-top").hide()
    })

    $(".depth1 ul li").click(function (){
        let thisnum = $(".depth1 ul li .d1").index(this);
        let i = $(this).index();

        $(".depth2").css("z-index", "2").addClass("on")
        $(".depth2 .depth2-area").hide().eq(i).show()
    })

    $(".depth2 .depth2-area ul li").click(function (){
        let thisnum = $(".depth2 .depth2-area ul li").index(this);
        $(".depth2 .depth2-area ul li").removeClass("on").eq(thisnum).addClass("on")
    })
    $(".depth2 .depth2-area ul .d2").click(function(){
        let thisnum = $(".depth2 .depth2-area ul .d2").index(this);

        $(".depth3").addClass("on")
        $(".depth2 .depth3 ul").hide().eq(thisnum).show()
    })

    $(".btn-wrap .menu-close").click(function(){
        $(".depth1 , .depth2").removeClass("on")
        $(".header .nav ul li").removeClass("on");
        $(".window").hide()
        $("html, body").css("overflow", "visible")
    })
    $(".header .depth2 > .btn-wrap .back").click(function(){
        $(".depth2").removeClass("on").css("z-index", "0")
    })
    $(".header .depth3 .btn-wrap .back").click(function(){
        $(".depth3").removeClass("on")
    })



    // 비디오 버튼 play 아이콘 색상 변경
    $(".main .main-content .video-btn").mouseover(function(){
        $(this).addClass("on");
    }).mouseout(function(){
        $(this).removeClass("on")
    })
    // 모달창
    $(".video-btn").click(function(){
        $(".window").show().css({"z-index":"99", "background-color":"rgba(0,0,0,0.8)" });
        $(".window-content").show();
        $(".window-content").find("video").attr("src", "videos/lego-banner01.mp4")
        $("html, body").css("overflow", "hidden")
    })
    $(".window, .modal-close").click(function(e){
        e.preventDefault();
        $(".window").hide();
        $(".window-content").hide();
        $("html, body").css("overflow", "visible")
    })

    $(".go-top").click(function(e){
        e.preventDefault();
        $("html, body").stop().animate({
            scrollTop: 0
        }, 2000)
    })
    // 제품 영역 
    $(".product .prod-content .prod-area").eq(0).show();
    $(".product .toggles-wrap .toggles-btn-wrap li").click(function(e){
        e.preventDefault();
        let i = $(this).index();
        $(".product .toggles-wrap .toggle-btn").css({
            "left": 'calc( (98% / 3) * '+ i +')' ,
        })
        $(".product .toggles-btn-wrap li").removeClass("on").eq(i).addClass("on")
        // 슬라이드를 화면에서 모두 지우고 현재의 인덱스 값에 슬라이드를 보여준다.
        $(".product .prod-content .prod-area").hide().eq(i).show();
    })

    $(".wishlist").click(function(){
        if($(this).find("img").attr("src") == "images/hart.svg"){
            $(this).find("img").attr("src", "images/hart-active.svg");
        }else{
            $(this).find("img").attr("src", "images/hart.svg");
        }
    })

    let prod_swiper = new Swiper(".prod-swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            1024:{slidesPerView: 4},
            640:{slidesPerView: 3, spaceBetween: 20},
            360:{slidesPerView: 2, spaceBetween: 20,}
        }
    });

    //  인기 시리즈 영역

    $(".series .swiper-slide").append("<a class='btn see-detail'>자세히 보기</a>")
    $(".series .swiper-slide").append("<a class='btn see-prod'>제품</a>")
    let series_swiper = new Swiper(".series-swiper", {
        slidesPerView: 4,
        spaceBetween: 70,
        slidesOffsetAfter: 220,
        navigation: {
            nextEl: ".series-next",
            prevEl: ".series-prev",
        },
        breakpoints: {
            1400:{slidesPerView: 4},
            1024:{slidesPerView: 3},
            640:{slidesPerView: 2},
            360:{spaceBetween: 50, slidesPerView: 2,slidesOffsetAfter: 150}
        }
    });
    // 신제품 홍보영역
    // 궁금한 이야기 영역
    let story_swiper = new Swiper(".story-swiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".story-next",
            prevEl: ".story-prev",
        },
        breakpoints: {
            1024:{slidesPerView: 2, spaceBetween: 30},
            360:{spaceBetween: 0,slidesPerView: 1}
        }
    });
    $(window).scroll(function(e){
        e.preventDefault();
        let pos = $(window).scrollTop();
        if(pos > $(".main").offset().top){
            $(".go-top").fadeIn();
        }else{
            $(".go-top").fadeOut();
        }
    })


    // 푸터 태블릿 모바일 메뉴
    $(".m1").click(function(){
        let i = $(this).index();

        $(".m2").slideUp();
        if ($(this).children(".m2").is(":visible")) {
            $(this).children(".m2").slideUp();
            $(".m1").eq(i).removeClass("on");
        }else {
            $(this).children(".m2").slideDown();
            $(".m1").removeClass("on").eq(i).addClass("on");
        }
    })
    

});