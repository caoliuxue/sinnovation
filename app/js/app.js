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
//     $(".invest-a").hide();
    $(".invest-toggle span").click(function () {
        console.log(this);
        $(".invest-toggle span").removeClass("active");
        $(this).addClass("active");
        if ($(this).hasClass("invest_team")) {
            $(".invest-a").hide();
            $(".invest-b").show();
        } else if ($(this).hasClass("introduce")) {
            $(".invest-b").hide();
            $(".invest-a").show();
        }
    });

    $(".app").mouseenter(function () {
        console.log($(this));
        $(this).removeClass("gray");
        $(".gotoBtn").show();
        $(".gotoBtn").css("top", $(this).prop("offsetTop") + $(this).prop("clientHeight") - 60);
        $(".gotoBtn").css("left", $(this).prop("offsetLeft") + $(this).prop("clientWidth") - 60);
    }).mouseleave(function () {
        $(this).addClass("gray");
        $(".gotoBtn").hide();
    });

    var renderLine = function (lineArray) {
        var line = $("<div class=\"team-member-line\"></div>");
        $.each(lineArray, function () {
            console.log(this.name);
            var that = this;
            var member = $("<div class=\"team-member\"></div>");
            member.append("<img src='" + this.img + "'/>");
            member.append("<div>" + this.name + "</div>");
            member.append("<div>" + this.title + "</div>");
            member.click(function () {
                $(".team-member-intro").remove();
                console.log($(this), that);
                renderIntro($(this), that);
                // $(this).unbind();
            });
            line.append(member);
        });
        $(".team-member-list").append(line);
    };

    var renderIntro = function (obj, item) {
        var intro = $("<div class=\"team-member-intro\"></div>");
        var indicator = $("<div class=\"width-100 indicator\"><span></span></div>");
        var close = $("<div class='right-close width-100'><span>+</span></div>");
        var intro_txt = $("<div class='width-100 intro-txt'>" + item.intro + "</div>");
        close.find("span").click(function () {
            intro.remove();
        });
        intro.append(indicator, close, intro_txt);
        indicator.find("span").css("left", obj.prop("offsetLeft") + obj.prop("offsetWidth") / 2 -20);
        obj.parent().after(intro);
        $("html,body").stop(true);
        $("html,body").animate({scrollTop: obj.offset().top-80}, 1000);
    };

    $.get("js/team-member.json", function (data) {
        var lineArray = [];
        var item = {};
        $.each(data, function (index) {
            item = this;
            lineArray.push(this);
            if (lineArray.length === 5) {
                renderLine(lineArray);
                lineArray = [];
            } else if (index === (data.length - 1)) {
                renderLine(lineArray);
            }
        });
    });


});