/**
 * Created by caoliuxue on 2017/4/16.
 */
$(document).ready(function () {

    $(".header_logo").click(function () {
        window.location.href = "index.html";
    });

    var bannerSwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 2000,
        autoplay: true,
        paginationHide: false,
        pagination: '.swiper-pagination'
    });

    // var sinnovationSwiper = new Swiper('.t05-bottom', {
    //     // pagination: '.swiper-pagination',
    //     // direction: 'horizontal',
    //     slidesPerView: 3,
    //     speed: 5000,
    //     spcaeBetween:30,
    //     autoplay: true,
    //     loop:true,
    //     paginationClickable: true,
    //     prevButton: '.page-prev',
    //     nextButton: '.page-next',
    //     paginationHide:true
    // });


//>>>>>>>>>>>>>>INVEST BIZ

    $(".invest-toggle span").click(function () {
        console.log(this);
        $(".invest-toggle span").removeClass("active");
        $(this).addClass("active");
    });

    $(".app").mouseenter(function () {
        console.log($(this));
        $(this).removeClass("gray");
        $(".gotoBtn").show();
        $(".gotoBtn").css("top", $(this).prop("offsetTop") + $(this).prop("clientHeight") -60);
        $(".gotoBtn").css("left", $(this).prop("offsetLeft") + $(this).prop("clientWidth") -60);
    }).mouseleave(function () {
        $(this).addClass("gray");
        $(".gotoBtn").hide();
    });


});