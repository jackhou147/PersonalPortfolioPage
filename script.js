$(document).ready(function(){
    (function fadeOutLoaderPage(){
        $(".loader-page").delay(800).fadeOut();
    })();
    setTimeout(function(){
        homePageTimeLine();
        toggleBodyScrollingY().noScr();
        /****************************************
        ***************REUSABLES*****************
        *****************************************/
        var $social1 = $(".social-media .logo-btn:nth-child(1)"),
            $social2 = $(".social-media .logo-btn:nth-child(2)"),
            $social3 = $(".social-media .logo-btn:nth-child(3)"),
            $social4 = $(".social-media .logo-btn:nth-child(4)");
        var $homeLink = $(".nav-page__home-link");
        var $portfolioLink = $(".nav-page__portfolio-link");
        var $aboutLink = $(".nav-page__about-link");
        var $contactLink = $(".nav-page__contact-link");
        var $navPage = $(".nav-page");
        var $navPageLinks = $(".nav-page__links");
        var $navPageFooter=$(".nav-page__footer");
        var $navLink1 = $(".nav-page__links .outline:nth-child(1)");
        var $navLink2 = $(".nav-page__links .outline:nth-child(2)");
        var $navLink3 = $(".nav-page__links .outline:nth-child(3)");
        var $navLink4 = $(".nav-page__links .outline:nth-child(4)");
        var $navHr = $(".nav-page hr");
        var $navFooter = $(".nav-page__footer");
        var allPages = [
            $(".home"),$(".portfolio"),$(".about"),$(".contact")
        ];
        var allNavLinks = [
            $homeLink,$portfolioLink,$aboutLink,$contactLink
        ];
        var currentPage; 
        function toThisPage(pageClass){
            TweenLite.to(window,0.3,{
                scrollTo:0
            });
            allPages.forEach(function(page){
                if(page.hasClass(pageClass)){
                    //show this page
                    page.removeClass("none-display");
                    if(pageClass == "home"){
                        toggleBodyScrollingY().noScr();
                        homePageTimeLine();
                    }else{
                        toggleBodyScrollingY().scr();
                        if(pageClass == "portfolio"){
                            portPageTimeLine();
                        }
                        else if(pageClass == "about"){
                            aboutPageTimeLine();
                        }
                        else if(pageClass == "contact"){
                            contactPageTimeLine();
                        }
                    }
                }else {
                    //hide this page
                    page.addClass("none-display");
                }
            })      
        };
        function setOutline(element){
            element.css("background-color","#9097A4");
            element.find("span").css("color","black");
        }
        function removeOutLine(element){
            element.css("background-color","transparent");
            element.find("span").css("color","black");
        };
        function updateCurrentPage(){
            allPages.forEach(function(page){
                if(!page.hasClass("none-display")){
                currentPage = page.attr("class");
                }
            })
        };
        function animateNavBtn(){
                var $line1 = $(".nav-bar__btn hr:nth-child(1)");
                var $line2 = $(".nav-bar__btn hr:nth-child(2)");
                var $line3 = $(".nav-bar__btn hr:nth-child(3)");
                function animate(){
                    TweenLite.to($line1,0.2,{
                        rotation:45,
                        transformOrigin:"50% 50%",
                        y:12
                    });
                    TweenLite.to($line2,0.25,{
                        opacity: 0,
                        x: 10
                    })
                    TweenLite.to($line3,0.2,{
                        rotation: -45,
                        transformOrigin:"50% 50%",
                        y:-8
                    })
                };
                function reverse(){
                    TweenLite.to($line1,0.2,{
                        rotation: 0,
                        transformOrigin:"50% 50%",
                        y:0
                    });
                    TweenLite.to($line2,0.25,{
                        opacity: 1,
                        x: 0
                    })
                    TweenLite.to($line3,0.2,{
                        rotation: 0,
                        transformOrigin:"50% 50%",
                        y:0
                    })
                };
                $navBtnClicked ? reverse() : animate();
                $navBtnClicked = !$navBtnClicked;

            };
        function toggleBodyScrollingX(){
            $("body").toggleClass("none-scroll-x");
        };
        function toggleBodyScrollingY(){
            return {
                scr: function(){
                    $("body").removeClass("none-scroll-y");
                },
                noScr: function(){
                    $("body").addClass("none-scroll-y");
                }
            }
            
        };
        /*****timelines****/
        var navPageTimeLine = new TimelineLite({reversed:true});
        navPageTimeLine.from($navLink1,0.5,{
            y:30,
            autoAlpha:0,
            ease: Power2.easeOut            
        })
            .from($navLink2,0.5,{
                y:30,
                autoAlpha:0,
                ease: Power2.easeOut
            },"-=0.2")
            .from($navLink3,0.5,{
                y:30,
                autoAlpha:0,
                ease: Power2.easeOut
            },"-=0.25")
            .from($navLink4,0.5,{
                y:30,
                autoAlpha:0,
                ease: Power2.easeOut
            },"-=0.3")
            .from([$navFooter,$navHr],0.5,{
                autoAlpha:0
            },"-=0.3");
        function toggleNavPageTimeLine(){
            navPageTimeLine.reversed()?navPageTimeLine.timeScale(1.5).play():
            navPageTimeLine.timeScale(4).reverse();
        };
        function homePageTimeLine(){
            var $h1 = $(".home h1"),
                $h2 = $(".home h2"),
                $span = $(".home .action-btn"),
                tl = new TimelineLite();
            tl.from($h1,1,{
                y:30,
                autoAlpha:0,
                ease: Power2.easeOut
            })
            .from($h2,1,{
                y:30,
                autoAlpha:0,
                ease: Power2.easeOut
            },"-=0.7")
            .from($span,1,{
                y:20,
                autoAlpha:0,
                ease: Power2.easeOut
            },"-=0.7");

        };
        function homePageReverseTimeLine(){
            var $h1 = $(".home h1"),
                $h2 = $(".home h2"),
                $btn = $(".home .action-btn"),
                $btnText = $(".home .action-btn__text"),
                tl = new TimelineLite();
            tl.to($h1,0.35,{
                y:-150,
                autoAlpha:0,
                ease:Power4.easeOut
            })
            .to($h2,0.35,{
                y:-150,
                autoAlpha:0,
                ease:Power4.easeOut
            },"-=0.25")
            .to($btnText,0.35,{
                autoAlpha:0
            },"-=0.35")
            .to($btn,0.3,{
                rotation: 90,
                width: 40
            },"-=0.2")
            .to($btn,0.2,{
                y:200,
                autoAlpha:0,
                ease: Power4.easeOut
            });
            tl.duration(1.5).play();
            $navBtn.click(function(){
                tl.set(
                    [$h1,$h2,$btn,$btnText],{clearProps:"all"}
                );
            })
        };
        function portPageTimeLine(){
            var $project1 = 
                $(".project:nth-child(1) .project__pic"),
                $project2 = 
                $(".project:nth-child(2) .project__pic"),
                $project3 = 
                $(".project:nth-child(3) .project__pic"),
                $project4 = 
                $(".project:nth-child(4) .project__pic"),
                $project5 = 
                $(".project:nth-child(5) .project__pic"),
                $project6 = 
                $(".project:nth-child(6) .project__pic"),
                $project7 = 
                $(".project:nth-child(7) .project__pic"),
                $text1 = $(".project:nth-child(1) .project__description"),
                $text2 = $(".project:nth-child(2) .project__description"),
                $text3 = $(".project:nth-child(3) .project__description"),
                $text4 = $(".project:nth-child(4) .project__description"),
                $text5 = $(".project:nth-child(5) .project__description"),
                $text6 = $(".project:nth-child(6) .project__description"),
                $text7 = $(".project:nth-child(7) .project__description"),
                tl = new TimelineLite();
            if(checkWindowSize()["768"]){
                tl.fromTo($project1,0.8,{
                    css: {
                        width: "5px",
                        height:"5px",
                        opacity: "0",
                        top: "40vw",
                        right: "20vw"
                    },
                    ease:Power2.easeOut
                },{
                    css: {
                        width: "35vw",
                        height:"35vw",
                        opacity: "1",
                        top: "0"
                    },
                    ease:Power2.easeOut
                })
                .to($project1,0.4,{
                    css: {
                        right: "0"
                    }
                },"+=0.2")
                .from($text1,0.4,{
                    css: {
                        left:"20vw",
                        opacity:"0"
                    }
                },1.35)
                /*////////////////////
                 ////////////////////
                 */////////////////////
                .fromTo($project2,0.8,{
                    css: {
                        width: "5px",
                        height:"5px",
                        opacity: "0",
                        top: "40vw",
                        left: "20vw"
                    },
                    ease:Power2.easeOut
                },{
                    css: {
                        width: "35vw",
                        height:"35vw",
                        opacity: "1",
                        top: "0"
                    },
                    ease:Power2.easeOut
                })
                .to($project2,0.4,{
                    css: {
                        left: "0"
                    }
                },"+=0.2")
                .from($text2,0.4,{
                    css: {
                        right:"20vw",
                        opacity:"0"
                    }
                },3)
                /*////////////////////
                 ////////////////////
                 */////////////////////
                .fromTo($project3,0.8,{
                    css: {
                        width: "5px",
                        height:"5px",
                        opacity: "0",
                        top: "40vw",
                        right: "20vw"
                    },
                    ease:Power2.easeOut
                },{
                    css: {
                        width: "35vw",
                        height:"35vw",
                        opacity: "1",
                        top: "0"
                    },
                    ease:Power2.easeOut
                })
                .to($project3,0.4,{
                    css: {
                        right: "0"
                    }
                },"+=0.2")
                .from($text3,0.4,{
                    css: {
                        left:"20vw",
                        opacity:"0"
                    }
                },5)
                /*////////////////////
                 ////////////////////
                 */////////////////////
                .fromTo($project4,0.8,{
                    css: {
                        width: "5px",
                        height:"5px",
                        opacity: "0",
                        top: "40vw",
                        left: "20vw"
                    },
                    ease:Power2.easeOut
                },{
                    css: {
                        width: "35vw",
                        height:"35vw",
                        opacity: "1",
                        top: "0"
                    },
                    ease:Power2.easeOut
                })
                .to($project4,0.4,{
                    css: {
                        left: "0"
                    }
                },"+=0.2")
                .from($text4,0.4,{
                    css: {
                        right:"20vw",
                        opacity:"0"
                    }
                },7)
                /*////////////////////
                 ////////////////////
                 */////////////////////
                .fromTo($project5,0.8,{
                    css: {
                        width: "5px",
                        height:"5px",
                        opacity: "0",
                        top: "40vw",
                        right: "20vw"
                    },
                    ease:Power2.easeOut
                },{
                    css: {
                        width: "35vw",
                        height:"35vw",
                        opacity: "1",
                        top: "0"
                    },
                    ease:Power2.easeOut
                })
                .to($project5,0.4,{
                    css: {
                        right: "0"
                    }
                },"+=0.2")
                .from($text5,0.4,{
                    css: {
                        left:"20vw",
                        opacity:"0"
                    }
                },9)
                /*////////////////////
                 ////////////////////
                 */////////////////////
                .fromTo($project6,0.8,{
                    css: {
                        width: "5px",
                        height:"5px",
                        opacity: "0",
                        top: "40vw",
                        left: "20vw"
                    },
                    ease:Power2.easeOut
                },{
                    css: {
                        width: "35vw",
                        height:"35vw",
                        opacity: "1",
                        top: "0"
                    },
                    ease:Power2.easeOut
                })
                .to($project6,0.4,{
                    css: {
                        left: "0"
                    }
                },"+=0.2")
                .from($text6,0.4,{
                    css: {
                        right:"20vw",
                        opacity:"0"
                    }
                },11)
                /*////////////////////
                 ////////////////////
                 */////////////////////
                .fromTo($project7,0.8,{
                    css: {
                        width: "5px",
                        height:"5px",
                        opacity: "0",
                        top: "40vw",
                        right: "20vw"
                    },
                    ease:Power2.easeOut
                },{
                    css: {
                        width: "35vw",
                        height:"35vw",
                        opacity: "1",
                        top: "0"
                    },
                    ease:Power2.easeOut
                })
                .to($project7,0.4,{
                    css: {
                        right: "0"
                    }
                },"+=0.2")
                .from($text7,0.4,{
                    css: {
                        left:"20vw",
                        opacity:"0"
                    }
                },13)
            }else {
                tl.from($project1,1,{
                    y:500,
                    width: 5,
                    height:5,
                    autoAlpha:0,
                    ease: Power4.easeOut
                })
                .from($text1,0.8,{
                        y:-200,
                        autoAlpha:0,
                        ease: Power4.easeOut
                    },"-=0.5")
                    //////
                .from($project2,1,{
                        y:500,
                        width: 5,
                        height:5,
                        autoAlpha:0,
                        ease: Power2.easeOut
                    },"-=0.5")
                .from($text2,0.8,{
                        y:-200,
                        autoAlpha:0,
                        ease: Power4.easeOut
                    },"-=0.5")
                    //////
                .from($project3,1,{
                        y:500,
                        width: 5,
                        height:5,
                        autoAlpha:0,
                        ease: Power2.easeOut
                    },"-=0.5")
                .from($text3,0.8,{
                        y:-200,
                        autoAlpha:0,
                        ease: Power4.easeOut
                    },"-=0.5")
                //////
                .from($project4,1,{
                        y:500,
                        width: 5,
                        height:5,
                        autoAlpha:0,
                        ease: Power2.easeOut
                    },"-=0.5")
                .from($text4,0.8,{
                        y:-200,
                        autoAlpha:0,
                        ease: Power4.easeOut
                    },"-=0.5")
                    //////
                .from($project5,1,{
                        y:500,
                        width: 5,
                        height:5,
                        autoAlpha:0,
                        ease: Power2.easeOut
                    },"-=0.5")
                .from($text5,0.8,{
                        y:-200,
                        autoAlpha:0,
                        ease: Power4.easeOut
                    },"-=0.5")
                    //////
                .from($project6,1,{
                        y:500,
                        width: 5,
                        height:5,
                        autoAlpha:0,
                        ease: Power2.easeOut
                    },"-=0.5")
                .from($text6,0.8,{
                        y:-200,
                        autoAlpha:0,
                        ease: Power4.easeOut
                    },"-=0.5")
                    //////
                .from($project7,1,{
                        y:500,
                        width: 5,
                        height:5,
                        autoAlpha:0,
                        ease: Power2.easeOut
                    },"-=0.5")
                .from($text7,0.8,{
                        y:-200,
                        autoAlpha:0,
                        ease: Power4.easeOut
                    },"-=0.5");

            }
            






        };
        function aboutPageTimeLine(){
            var $photo = $(".about .photo"),
                $h1 = $(".about__intro h1"),
                $h2 = $(".about__intro h2"),
                $intro = $(".about__intro"),
                $intro__p = $(".about__intro p"),
                $skills = $(".about__skills"),
                $aboutThisSite = $(".about__about-this-site"),
                tl = new TimelineLite();
            function hideIntro(){
                $intro.css("visibility","hidden");
            };
            function showIntro(){
                $intro.css("visibility","visible");
            };
            function introTimeLine(scrollTop){
                function timeLine(){
                    showIntro();
                    var tl = new TimelineLite();
                    tl.from($h1,0.5,{
                        x:50,
                        autoAlpha:0,
                    })
                    .from($h2,0.3, {
                        y:80,
                        autoAlpha:0,
                        ease: Power2.easeout
                    },"-=0.2")
                    .from($intro__p,0.3,{
                        y:80,
                        autoAlpha:0,
                        ease: Power2.easeout
                    },"-=0.1")
                }
                if(typeof scrollTop !== "undefined"){
                    if(scrollTop >= 160){
                        $(window).off("scroll");
                        timeLine();
                    }
                }else {
                    timeLine();
                }
            };
            function restOfTimeLine(delay){
                tl.from($social1,1.5,{
                    x:-200,
                    rotation: 1080,
                    ease: Power3.easeOut
                },0)
                .from($social2,1.5,{
                    x:-100,
                    rotation: 1080,
                    ease: Power3.easeOut
                },0)
                .from($social3,1.5,{
                    x:100,
                    rotation: 1080,
                    ease: Power3.easeOut
                },0)
                .from($social4,1.5,{
                    x:200,
                    rotation:1080,
                    ease: Power3.easeOut
                },0)
                .from($photo,1,{
                   y:-50,
                   autoAlpha:0,
                   ease: Power2.easeOut
                },"-=0.55")
                .from($skills,0.5,{
                    y:80,
                    autoAlpha:0,
                    ease: Power2.easeout
                },"-=0.1")
                .from($aboutThisSite,0.5,{
                    y:80,
                    autoAlpha:0,
                    ease: Power2.easeout
                },"-=0.1");
            }

            hideIntro();
            if(checkWindowSize()["480"]){
                introTimeLine();
                restOfTimeLine(500);
            }else {
                restOfTimeLine();
                $(window).scroll(function(){
                    introTimeLine($(window).scrollTop());
                });
            }
        };
        function contactPageTimeLine(){
            var $h1 = $(".contact h1"),
                $p = $(".contact p"),
                $location = $(".contact__location"),
                $form = $(".contact .form"),
                tl = new TimelineLite();
            tl.from($h1,0.5,{
                x: 50,
                autoAlpha:0,
                ease: Power2.easeout
            })
            .from($p,0.5,{
                y:80,
                autoAlpha:0,
                ease: Power2.easeout
            })
            .from($location,0.5,{
                y:40,
                autoAlpha:0,
                ease: Power2.easeout
            })
            .from($social1,1.5,{
                x:-250,
                rotation: 1080,
                autoAlpha:0,
                ease: Power3.easeOut
            },1.2)
            .from($social2,1.5,{
                x:-200,
                rotation: 1080,
                autoAlpha:0,
                ease: Power3.easeOut
            },1.2)
            .from($social3,1.5,{
                x:200,
                rotation: 1080,
                autoAlpha:0,
                ease: Power3.easeOut
            },1.2)
            .from($social4,1.5,{
                x:250,
                rotation:1080,
                autoAlpha:0,
                ease: Power3.easeOut
            },1.2)
            .from($form,0.5,{
                y:80,
                autoAlpha:0,
                ease: Power3.easeOut
            },"-=0.6")  
        };

        /****************************************
        ****************NAV BAR******************
        *****************************************/
        var $navBar = $(".nav-bar");
        var $navBtn = $(".nav-bar__btn");
        var $navLogo = $(".nav-bar__logo");
        var $navBtnClicked = false;
        $navBtn.click(
            function(){
                function highlightCurrentPage(){
                    updateCurrentPage(); allNavLinks.forEach(function(link){
                        var thisPage = link.attr("class");
                        var match = thisPage.search(currentPage);
                        if(match !== -1){
                            setOutline(link.parent());
                        }else {
                            removeOutLine(link.parent());
                        }
                    })
                };
                animateNavBtn(); 
                $navPage.stop(true,true).fadeToggle();
                toggleNavPageTimeLine();
                highlightCurrentPage();
                toggleBodyScrollingX();
            }
        )
        
        /*$navBar.hover(function(){
            $(this).css("background-color","#404040");
            $("hr").css("border-color","black");
        },function(){
            $(this).css("background-color","rgba(0,0,0,0.96)");
            $("hr").css("border-color","white");
        })*/

        /****************************************
        ****************NAVPAGE********************
        *****************************************/

        allNavLinks.forEach(function(link){
            var thisPage;
            function getThisPage(){
                 thisPage = link.attr("class").replace("nav-page__","").replace("-link","");
            };
            getThisPage();
            link.parent().click(function(){
                function next(){
                    toThisPage(thisPage);
                    updateCurrentPage();
                    toggleBodyScrollingX();
                };
                animateNavBtn(); 
                toggleNavPageTimeLine();
                $navPage.stop(true,true).fadeOut();
                if(
                    currentPage == "home" && 
                    thisPage !== "home"
                ){
                    setTimeout(function(){
                        homePageReverseTimeLine();
                        setTimeout(next,1500);
                    },400)
                }
                else {
                    setTimeout(next,300);
                }
            });
            link.parent().hover(
                function(){
                    setOutline(link.parent());
                },
                function(){
                    if(thisPage !== currentPage){
                    removeOutLine(link.parent());
                }
                });
            });

        /****************************************
        ****************HOME*********************
        *****************************************/
        $(".home .action-btn").click(
            function(){
                homePageReverseTimeLine();
                setTimeout(function(){
                    toThisPage("portfolio");
                },1500);
            }
        );

        /****************************************
        ***************ABOUT*********************
        *****************************************/
        var $social = $(".social-media .logo-btn");
        $social.hover(
            function(){
                TweenLite.to($(this),0.15,{
                    rotation: 360
                })
            },
            function(){
                TweenLite.to($(this),0.15,{
                rotation:0
            })
            }
        );
        
        /****************************************
        ****************CONTACT********************
        *****************************************/
        function locationIconTimeLine(){
            var $locationIcon = $(".location img");
            var tl = new TimelineLite;
            return {
                play: function(){
                    tl.to($locationIcon,0.1,{
                        y:3
                    })
                    .to($locationIcon,0.2,{
                        y:-8
                    })
                },
                reverse: function(){
                    tl.to($locationIcon,0.1,{
                        y:-10
                    })
                    .to($locationIcon,0.2,{
                        y:0
                    })
                }
            }
        }
        
        var $locationIconParent = $(".location");
        $locationIconParent.hover(function(){
            locationIconTimeLine().play();
        },function(){
            locationIconTimeLine().reverse();
        })
        
        
        
        /****************************************
        *************MEDIA QURIES****************
        *****************************************/
        function checkWindowSize(){
            var min480 = window.matchMedia('(min-width: 480px)');
            var min768 = window.matchMedia('(min-width: 768px)');
            var windowSize = {
                "480": false,
                "768":false
            };
            if(min480.matches){
                windowSize["480"] = true;
                if(min768.matches){
                    windowSize["768"] = true;
                }
            };
            return windowSize
        }
        
        
        
    },850);
})