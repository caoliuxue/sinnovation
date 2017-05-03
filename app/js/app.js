/**
 * Created by caoliuxue on 2017/4/16.
 */
$(document).ready(function () {

    function get_device_type() {
        var info = navigator.userAgent;
        var ios = new Array("iPhone", "iPod");
        var android = new Array("Android");
        var winphone = new Array("Windows Phone");

        ios.forEach(function (item) {
            // console.log(info,item);
            if (info.indexOf(item) > 0) {
                return "ios";
            }
        });
        // }

        for (var i = 0; i < android.length; i++) {
            if (info.indexOf(android[i]) > 0) {
                return "android";
            }
        }

        for (var i = 0; i < winphone.length; i++) {
            if (info.indexOf(winphone[i]) > 0) {
                return "winphone";
            }
        }

        return "others";
    }

    console.log(get_device_type());

    $(".header_logo").click(function () {
        window.location.href = "index.html";
    });

    $(".menu-close").click(function () {
        $("#header_nav").modal('toggle');
    });
    var bannerSwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 2000,
        autoplay: true,
        paginationHide: false,
        pagination: '.swiper-pagination',
        paginationBulletRender: function (swiper, index, className) {
            return '<span class="pagination-bullet"></span>';
        },
        onSlideChangeStart: function () {
            $('.pagination-bullet').eq(this.realIndex).addClass('pagination-bullet-active');
        }

    });

    // swiper-pagination-bullet-active

    var sinnovationSwiper = new Swiper('.t05-bottom', {
        // pagination: '.swiper-pagination',
        // direction: 'horizontal',
        slidesPerView: 3,
        slidesPerGroup: 1,
        speed: 5000,
        // spcaeBetween:30,
        autoplay: true,
        loop:true,
        // paginationClickable: true,
        // paginationHide:true
    });

    $(".page-prev").click(function () {
        sinnovationSwiper.stopAutoplay();
        sinnovationSwiper.slidePrev();

    });


    $(".page-next").click(function () {
        sinnovationSwiper.stopAutoplay();
        sinnovationSwiper.slideNext();
    });

    window.onresize(function (a,b,c) {
        console.log(a,b,c);
        bannerSwiper.onResize();
        sinnovationSwiper.onResize();
    });
//>>>>>>>>>>>>>>INVEST BIZ
    $(".invest-b").hide();
    $(".invest-toggle span").click(function () {
        console.log(this);
        $(".invest-toggle span").removeClass("actived");
        $(this).addClass("actived");
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
        $(".gotoBtn").css("top", $(this).prop("offsetTop") + $(this).prop("clientHeight") - 45);
        $(".gotoBtn").css("left", $(this).prop("offsetLeft") + $(this).prop("clientWidth") - 45);
    }).mouseleave(function () {
        $(this).addClass("gray");
        $(".gotoBtn").hide();
    });

    var renderLine = function (lineParent, lineArray) {
        var line = $("<div class=\"team-member-line\"></div>");
        $.each(lineArray, function () {
            // console.log(this.name);
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
        lineParent.append(line);
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
        indicator.find("span").css("left", obj.prop("offsetLeft") + obj.prop("offsetWidth") / 2 - 20);
        obj.parent().after(intro);
        $("html,body").stop(true);
        $("html,body").animate({scrollTop: obj.offset().top - 80}, 500);
    };

    $.get("js/team-member.json", function (data) {
        var lineArray = [];
        var item = {};
        $.each(data, function (index) {
            item = this;
            lineArray.push(this);
            if (lineArray.length === 5) {
                renderLine($(".team-member-list"), lineArray);
                lineArray = [];
            } else if (index === (data.length - 1)) {
                renderLine($(".team-member-list"), lineArray);
            }
        });
    }, "json");


//    ABOUT US
    $("video").click(function () {
        console.log($(this));
        if ($(this).prop("paused")) {
            this.play();
        } else {
            this.pause();
        }
    });

//    ABOUT TEAM

    var selectedTeam = null;

    var renderTeam = function () {
        $.get("js/team-list.json", function (data) {
            // console.log(data);
            var allMember = $("<span class='actived'>全部团队成员</span>");
            $(".team-toggle").append(allMember);
            $.each(data, function (index) {
                if (null === selectedTeam || (null !== selectedTeam && selectedTeam === data[index])) {
                    //add toggle btn
                    var teamInToggle = $("<span>" + data[index] + "</span>");
                    $(".team-toggle").append(teamInToggle);
                    //add team list viewer
                    var teamTitle = $("<div class='team-title font-color-black'>" + data[index] + "成员</div>");
                    var team_member_list = $("<div class='team-member-list'></div>");
                    $(".crazy-team").append(teamTitle, team_member_list);
                    $.get("js/team-member.json", function (data) {
                        var lineArray = [];
                        var item = {};
                        $.each(data, function (index) {
                            item = this;
                            lineArray.push(this);
                            if (lineArray.length === 5) {
                                renderLine(team_member_list, lineArray);
                                lineArray = [];
                            } else if (index === (data.length - 1)) {
                                renderLine(team_member_list, lineArray);
                            }
                        });
                    }, "json");
                }
            });
        }, "json");
    };
    renderTeam();

//JOB-LIST

    $.get("js/jobs.json", function (data) {
        console.log(data);
        $.each(data, function () {
            var job = $("<div class='job-item'></div>");
            job.append("<div>" + this.title + "</div>");
            job.append("<div>" + this.office + "</div>");
            job.click(function () {
                window.open("job-detail.html");
            });
            $(".job-list").append(job);
        });
    }, "json");

//    创业服务

    $(".detail-close").click(function () {
        $("#myModal").modal('toggle');
    });


//    联系我们


    try {
        var initBMap = function initialize(id) {
            var map = new BMap.Map(id);    // 创建Map实例
            var point = new BMap.Point(116.320831, 39.990322);
            var myIcon = new BMap.Icon("img/contact/coordinate.png", new BMap.Size(45, 45), {
                offset: new BMap.Size(10, 25)
            });
            var marker = new BMap.Marker(point, {icon: myIcon});        // 创建标注
            map.centerAndZoom(point, 19);  // 初始化地图,设置中心点坐标和地图级别
            map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
            // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            map.addOverlay(marker);
        };

        initBMap("bdmap1");
        initBMap("bdmap2");
        initBMap("bdmap3");
        initBMap("bdmap4");
    } catch (e) {
        console.log();
    }
    // (function loadScript() {
    //     var script = document.createElement("script");
    //     script.src = "http://api.map.baidu.com/api?v=2.0&ak=hYAc1ZakYTmbRDXzhbtwb5jC&callback=initialize";//此为v2.0版本的引用方式
    //     http://api.map.baidu.com/api?v=1.4&ak=您的密钥&callback=initialize"; //此为v1.4版本及以前版本的引用方式
    // document.body.appendChild(script);
    // })();

//    最新动态

    $(".news-list > .news >div").click(function () {
        window.open("news-detail.html");
    });

    $(".gotop").click(function () {
        $("html,body").stop(true);
        $("html,body").animate({scrollTop: 0}, 500);
    });
});