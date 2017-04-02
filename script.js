$(document).ready(function(){
    /****************************************
    ***************REUSABLES*****************
    *****************************************/
    var $homeLink = $(".nav-page__home-link");
    var $portfolioLink = $(".nav-page__portfolio-link");
    var $aboutLink = $(".nav-page__about-link");
    var $contactLink = $(".nav-page__contact-link");
    var $navPage = $(".nav-page");
    var $navPageLinks = $(".nav-page__links");
    var $navPageFooter=$(".nav-page__footer");
    var $firstOutline = $(".nav-page__links .outline:nth-child(1)");
    var $secondOutline = $(".nav-page__links .outline:nth-child(2)");
    var $thirdOutline = $(".nav-page__links .outline:nth-child(3)");
    var $fourthOutline = $(".nav-page__links .outline:nth-child(4)");
    var allPages = [$(".home"),$(".portfolio"),$(".about"),$(".contact")];
    var allNavLinks = [$homeLink,$portfolioLink,$aboutLink,$contactLink];
    var currentPage; //string of current page name
    function toThisPage(pageClass){
        allPages.forEach(function(page){
            if(page.hasClass(pageClass)){
                page.removeClass("none-display");
            }else {
                page.addClass("none-display");
            }
        })      
    };
    function setOutline(element){
        element.css("border-color","black");
    }
    function removeOutLine(element){
        element.css("border-color","transparent");
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
    function animateNavPage(){
            $navPage.stop(true,true);
            if($navBtnClicked){
                $navPage.fadeIn();
                setTimeout(function(){
                    tl.timeScale(1).play();
                },200);
            }else {
                tl.timeScale(4).reverse();
                setTimeout(function(){
                    tl.progress(0);
                    $navPage.fadeOut();
                },300)
            }
        };
    function animateHomePage(){
        var $h1 = $(".home h1"),
            $h2 = $(".home h2"),
            $span = $(".home .action-btn");
        var tl = new TimelineLite();
        tl.from($h1,1.5,{
            y:30,
            autoAlpha:0,
            ease: Power2.easeOut
        })
        .from($h2,1.5,{
            y:30,
            autoAlpha:0,
            ease: Power2.easeOut
        },"-=1")
        .from($span,1.5,{
            y:20,
            autoAlpha:0,
            ease: Power2.easeOut
        },"-=1");
        
    };
    
    /****************************************
    ****************NAV BAR******************
    *****************************************/
    var $navBar = $(".nav-bar");
    var $navBtn = $(".nav-bar__btn");
    var $navLogo = $(".nav-bar__logo");
    var $navBtnClicked = false;
    var tl = new TimelineLite();
    tl.from($firstOutline,0.5,{
    y:30,
    autoAlpha:0,
    ease: Power2.easeOut
    })
    .from($secondOutline,0.5,{
    y:30,
    autoAlpha:0,
    ease: Power2.easeOut
    },"-=0.3")
    .from($thirdOutline,0.5,{
    y:30,
    autoAlpha:0,
    ease: Power2.easeOut
    },"-=0.3")
    .from($fourthOutline,0.5,{
    y:30,
    autoAlpha:0,
    ease: Power2.easeOut
    },"-=0.3");
    tl.reversed(true);
    $navBtn.click(function(){
        function highlightCurrentPage(){
            updateCurrentPage();
            allNavLinks.forEach(function(link){
                var thisPage = link.attr("class");
                var match = thisPage.search(currentPage);
                if(match !== -1){
                    setOutline(link.parent());
                }else {
                    removeOutLine(link.parent());
                }
            })
        };
        function disableScrolling(){
            $("body").toggleClass("none-scroll");
        };
        animateNavBtn();
        animateNavPage();
        highlightCurrentPage();
        disableScrolling();
    })
    
    /****************************************
    ****************NAVPAGE********************
    *****************************************/
    
    allNavLinks.forEach(function(link){
        var thisPage = link.attr("class").replace("nav-page__","").replace("-link","");
        link.parent().click(function(){
            function enableScrolling(){
                $("body").removeClass("none-scroll");
            };
            animateNavBtn(); 
            animateNavPage();
            setTimeout(function(){
                toThisPage(thisPage);
                updateCurrentPage();
                enableScrolling();
            },1300);
        });
        link.parent().hover(function(){
            setOutline(link.parent());
        },function(){
            if(thisPage !== currentPage){
                removeOutLine(link.parent());
            }
        });
    });
    
    /****************************************
    ****************HOME*********************
    *****************************************/
    $(".home .action-btn").click(function(){
        toThisPage("portfolio");
    });
    animateHomePage();

    
    
    
    
    
    
    
    
    
    
})