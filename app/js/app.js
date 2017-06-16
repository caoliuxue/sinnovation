/**
 * Created by caoliuxue on 2017/4/16.
 */
 $(document).ready(function () {


    var name = 'tab';
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    


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

    function dashangToggle(){
        $(".hide_box").fadeToggle();
        $(".shang_box").fadeToggle();
    }

    console.log(get_device_type());

    $(".head-menu img").click(function () {
        $("#header_nav").modal();
    });

    $(".pay_item").click(function(){
        $(this).addClass('checked').siblings('.pay_item').removeClass('checked');
        var dataid=$(this).attr('data-id');
        $(".shang_payimg img").attr("src","img/"+dataid+"img.jpg");
        $("#shang_pay_txt").text(dataid=="alipay"?"支付宝":"微信");
    });

    $('.about_team_lkf_left').click(function(){
    // alert(1);
    if($('.about_team_lkf_left').height() > 550)
    {
        $('.about_team_lkf_left').css('max-height',550);
        $('.about_team_lkf_left').css('background-image','url("./img/about/expand.png")');
        $('.about_team_lkf_left').css('background-size','20px');
        $('.about_team_lkf_left').hover(function() {
            $(this).css('background-image','url("./img/about/expand_hover.png")');
            $(this).css('background-size','20px');
        }, function() {
            $(this).css('background-image','url("./img/about/expand.png")');
            $(this).css('background-size','20px');
        });
    }
    else
    {
        $('.about_team_lkf_left').css('max-height','none');
        $('.about_team_lkf_left').css('background-image','url("./img/about/collapse.png")');
        $('.about_team_lkf_left').css('background-size','20px');
        $('.about_team_lkf_left').hover(function() {
            $(this).css('background-image','url("./img/about/collapse_hover.png")');
            $(this).css('background-size','20px');
        }, function() {
            // $(this).css('background','url("../img/about/collapse.png") no-repeat 100% 95%');
            $(this).css('background-image','url("./img/about/collapse.png")');
            $(this).css('background-size','20px');
        });
    }
    // $('.about_team_lkf_left :last-child').css('max-height','none');
    // $('.about_team_lkf_left :last-child').css('overflow','none');
});

//     $('.about_team_lkf_left > :last-child').click(function(){
//     // alert(1);
//     // $('.about_team_lkf').height(1500);
//     $('.about_team_lkf_left > :last-child').css('max-height','none');
// });

$(".header_logo").click(function () {
    window.location.href = "index.html";
});

$(".menu-close").click(function () {
    $("#header_nav").modal('toggle');
});

$("#header_nav ul li a").click(function () {
    $("#header_nav").modal('toggle');
});

var bannerSwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 3000,
        autoplay: 3000,
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
        loop: true,
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

    //INVEST BIZ

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

    $(".startup-b").hide();
    $(".startup-toggle span").click(function () {
        console.log(this);
        $(".startup-toggle span").removeClass("actived");
        $(this).addClass("actived");
        if ($(this).hasClass("operation-team")) {
            $(".startup-service").hide();
            $(".startup-b").show();
        } else if ($(this).hasClass("startup-servicetab")) {
            $(".startup-b").hide();
            $(".startup-service").show();
        }
    });

    $(".ai-content2-b").hide();
    $(".aiteamslider").hide();
    $(".ai-toggle span").click(function () {
        console.log(this);
        $(".ai-toggle span").removeClass("actived");
        $(this).addClass("actived");
        if ($(this).hasClass("aiintroduce")) {
            $(".ai-content2-b").hide();
            $(".ai-content2").show();
            $(".aiteamslider").hide();
        } else if ($(this).hasClass("aiteam")) {
            $(".ai-content2").hide();
            $(".ai-content2-b").show();
            $(".aiteamslider").show();

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
            member.append("<div style='overflow: hidden;'><img src='" + this.img + "'/><div class='mask'></div></div>");
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
                    var teamInToggle = $("<a href='#"+data[index]+"'><span>" + data[index] + "</span></a>");
                    $(".team-toggle").append(teamInToggle);
                    //add team list viewer
                    var teamTitle = $("<div class='team-title font-color-black' id='"+data[index]+"'>" + data[index] + "</div>");
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

var renderAboutTeam = function () {
    $.get("js/about-team-list.json", function (data) {
            // console.log(data);
            var allMember = $("<span class='actived'>全部团队成员</span>");
            $(".about-team-toggle").append(allMember);
            var i = 0;
            $.each(data, function (index) {
                if (null === selectedTeam || (null !== selectedTeam && selectedTeam === data[index])) {
                    //add toggle btn
                    var teamInToggle = $("<a href='#"+data[index]+"'><span>" + data[index] + "</span></a>");
                    $(".about-team-toggle").append(teamInToggle);
                    //add team list viewer
                    var teamTitle = $("<div class='team-title font-color-black' id='"+data[index]+"'>" + data[index] + "</div>");
                    var team_member_list = $("<div class='team-member-list'></div>");
                    $(".about-crazy-team").append(teamTitle, team_member_list);
                    $.get("js/about-team-member.json", function (data) {
                        var lineArray = [];
                        var item = {};
                        $.each(data[index], function (index1) {
                            item = this;
                            lineArray.push(this);
                            if(document.body.clientWidth > 768)
                            {
                                if (lineArray.length === 5) {
                                    renderLine(team_member_list, lineArray);
                                    lineArray = [];
                                } else if (index1 === (data[index].length - 1)) {
                                    renderLine(team_member_list, lineArray);
                                }
                            }
                            else
                            {
                                if (lineArray.length === 2) {
                                    renderLine(team_member_list, lineArray);
                                    lineArray = [];
                                } else if (index1 === (data[index].length - 1)) {
                                    renderLine(team_member_list, lineArray);
                                }
                            }

                        });
                    }, "json");

                    i++;
                }
            });
        }, "json");
};
renderAboutTeam();


var renderInvestTeam = function () {
    $.get("js/about-team-list.json", function (data) {
            // console.log(data);
            // var allMember = $("<span class='actived'>全部团队成员</span>");
            // $(".invest-team-toggle").append(allMember);
            var i = 0;
            $.each(data, function (index) {
                index = 0;
                if (null === selectedTeam || (null !== selectedTeam && selectedTeam === data[index])) {
                    //add toggle btn
                    var teamInToggle = $("<a href='#"+data[index]+"'><span>" + data[index] + "</span></a>");
                    $(".invest-team-toggle").append(teamInToggle);
                    //add team list viewer
                    var teamTitle = $("<div class='team-title font-color-black' id='"+data[index]+"'>" + data[index] + "</div>");
                    var team_member_list = $("<div class='team-member-list'></div>");
                    $(".invest-crazy-team").append(teamTitle, team_member_list);
                    $.get("js/about-team-member.json", function (data) {
                        var lineArray = [];
                        var item = {};
                        $.each(data[index], function (index1) {
                            item = this;
                            lineArray.push(this);
                            if(document.body.clientWidth > 768)
                            {
                                if (lineArray.length === 5) {
                                    renderLine(team_member_list, lineArray);
                                    lineArray = [];
                                } else if (index1 === (data[index].length - 1)) {
                                    renderLine(team_member_list, lineArray);
                                }
                            }
                            else
                            {
                                if (lineArray.length === 2) {
                                    renderLine(team_member_list, lineArray);
                                    lineArray = [];
                                } else if (index1 === (data[index].length - 1)) {
                                    renderLine(team_member_list, lineArray);
                                }
                            }
                            
                        });
                    }, "json");

                    i++;
                }
                return false;
            });
        }, "json");
};

renderInvestTeam();



var renderStartupTeam = function () {
    $.get("js/about-team-list.json", function (data) {
            // console.log(data);
            // var allMember = $("<span class='actived'>全部团队成员</span>");
            // $(".invest-team-toggle").append(allMember);
            var i = 0;
            $.each(data, function (index) {
                index = 1;
                if (null === selectedTeam || (null !== selectedTeam && selectedTeam === data[index])) {
                    //add toggle btn
                    var teamInToggle = $("<a href='#"+data[index]+"'><span>" + data[index] + "</span></a>");
                    $(".startup-team-toggle").append(teamInToggle);
                    //add team list viewer
                    var teamTitle = $("<div class='team-title font-color-black' id='"+data[index]+"'>" + data[index] + "</div>");
                    var team_member_list = $("<div class='team-member-list'></div>");
                    $(".startup-crazy-team").append(teamTitle, team_member_list);
                    $.get("js/about-team-member.json", function (data) {
                        var lineArray = [];
                        var item = {};
                        $.each(data[index], function (index1) {
                            item = this;
                            lineArray.push(this);
                            if(document.body.clientWidth > 768)
                            {
                                if (lineArray.length === 5) {
                                    renderLine(team_member_list, lineArray);
                                    lineArray = [];
                                } else if (index1 === (data[index].length - 1)) {
                                    renderLine(team_member_list, lineArray);
                                }
                            }
                            else
                            {
                                if (lineArray.length === 2) {
                                    renderLine(team_member_list, lineArray);
                                    lineArray = [];
                                } else if (index1 === (data[index].length - 1)) {
                                    renderLine(team_member_list, lineArray);
                                }
                            }
                            
                        });
                    }, "json");

                    i++;
                }
                return false;
            });
        }, "json");
};

renderStartupTeam();



var renderAITeam = function () {
    $.get("js/about-team-list.json", function (data) {
            // console.log(data);
            // var allMember = $("<span class='actived'>全部团队成员</span>");
            // $(".invest-team-toggle").append(allMember);
            var i = 0;
            $.each(data, function (index) {
                index = 3;
                if (null === selectedTeam || (null !== selectedTeam && selectedTeam === data[index])) {
                    //add toggle btn
                    var teamInToggle = $("<a href='#"+data[index]+"'><span>" + data[index] + "</span></a>");
                    $(".ai-team-toggle").append(teamInToggle);
                    //add team list viewer
                    var teamTitle = $("<div class='team-title font-color-black' id='"+data[index]+"'>" + data[index] + "</div>");
                    var team_member_list = $("<div class='team-member-list'></div>");
                    $(".ai-crazy-team").append(teamTitle, team_member_list);
                    $.get("js/about-team-member.json", function (data) {
                        var lineArray = [];
                        var item = {};
                        $.each(data[index], function (index1) {
                            item = this;
                            lineArray.push(this);
                            if(document.body.clientWidth > 768)
                            {
                                if (lineArray.length === 5) {
                                    renderLine(team_member_list, lineArray);
                                    lineArray = [];
                                } else if (index1 === (data[index].length - 1)) {
                                    renderLine(team_member_list, lineArray);
                                }
                            }
                            else
                            {
                                if (lineArray.length === 2) {
                                    renderLine(team_member_list, lineArray);
                                    lineArray = [];
                                } else if (index1 === (data[index].length - 1)) {
                                    renderLine(team_member_list, lineArray);
                                }
                            }
                            
                        });
                    }, "json");

                    i++;
                }
                return false;
            });
        }, "json");
};
renderAITeam();


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
    } catch (e) {
        console.log();
    }
    // (function loadScript() {
    //     var script = document.createElement("script");
    //     script.src = "http://api.map.baidu.com/api?v=2.0&ak=hYAc1ZakYTmbRDXzhbtwb5jC&callback=initialize";//此为v2.0版本的引用方式
    //     http://api.map.baidu.com/api?v=1.4&ak=您的密钥&callback=initialize"; //此为v1.4版本及以前版本的引用方式
    // document.body.appendChild(script);
    // })();

try {
    var initBMap2 = function initialize(id) {
            var map = new BMap.Map(id);    // 创建Map实例
            var point = new BMap.Point(121.526042,31.304821);
            var myIcon = new BMap.Icon("img/contact/coordinate.png", new BMap.Size(45, 45), {
                offset: new BMap.Size(10, 25)
            });
            var marker = new BMap.Marker(point, {icon: myIcon});        // 创建标注
            map.centerAndZoom(point, 19);  // 初始化地图,设置中心点坐标和地图级别
            map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
            // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            map.addOverlay(marker);
        };

        initBMap2("bdmap2");
    } catch (e) {
        console.log();
    }

try {
    var initBMap3 = function initialize(id) {
            var map = new BMap.Map(id);    // 创建Map实例
            var point = new BMap.Point(113.943154,22.529166);
            var myIcon = new BMap.Icon("img/contact/coordinate.png", new BMap.Size(45, 45), {
                offset: new BMap.Size(10, 25)
            });
            var marker = new BMap.Marker(point, {icon: myIcon});        // 创建标注
            map.centerAndZoom(point, 19);  // 初始化地图,设置中心点坐标和地图级别
            map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
            // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            map.addOverlay(marker);
        };

        initBMap3("bdmap3");
    } catch (e) {
        console.log();
    }

try {
    var initBMap4 = function initialize(id) {
            var map = new BMap.Map(id);    // 创建Map实例
            var point = new BMap.Point(37.411522, -122.125611);
            var myIcon = new BMap.Icon("img/contact/coordinate.png", new BMap.Size(45, 45), {
                offset: new BMap.Size(10, 25)
            });
            var marker = new BMap.Marker(point, {icon: myIcon});        // 创建标注
            map.centerAndZoom(point, 19);  // 初始化地图,设置中心点坐标和地图级别
            map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
            // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            map.addOverlay(marker);
        };

        initBMap4("bdmap4");
    } catch (e) {
        console.log();
    }


//    最新动态

$(".news-list > .news >div").click(function () {
    window.open("news-detail.html");
});

$(".gotop").click(function () {
    $("html,body").stop(true);
    $("html,body").animate({scrollTop: 0}, 500);
});

$(".about_team_lkf_left > :last-child").click(function () {
    $(".about_team_lkf_left > :last-child")
});


    
    function dashangToggle(){
        $(".hide_box").fadeToggle();
        $(".shang_box").fadeToggle();
    }


    // alert(r[2]);
    if ("team"==r[2]) {
        $(".operation-team").addClass("actived");
        $(".startup-servicetab").removeClass("actived");
        $(".startup-service").hide();
        $(".startup-b").show();
    // renderStartupTeam();
}


if ("team"==r[2]) {
    $('.invest_team').addClass("actived");
    $(".introduce").removeClass("actived");
    $(".invest-a").hide();
    $(".invest-b").show();
    // renderInvestTeam();
}

if ("team"==r[2]) {
    $('.aiteam').addClass("actived");
    $(".aiintroduce").removeClass("actived");
    $(".ai-content2").hide();
    $(".ai-content2-b").show();
    $(".aiteamslider").show();
    // renderAITeam();
}

if(screen.width <= 2000)
{
        // document.write("<style>body{zoom:80%;}</style>");
    }
    if(screen.width <= 1500)
    {
        // document.write("<style>body{zoom:60%;}</style>");
        document.getElementById('html').style.zoom = '50%';
    }

});


