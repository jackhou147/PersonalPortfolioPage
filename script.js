$(document).ready(function(){
    
    /*****************REUSABLES***********************/
    function toThisPage(pageClass){
        allPages.forEach(function(page){
            if(page.hasClass(pageClass)){
                page.removeClass("none-display");
            }else {
                page.addClass("none-display");
            }
        })      
    };
    
    
    /***************NAVBAR*************************/
    var $navBar = $(".nav-bar");
    var $navBtn = $(".nav-bar__btn");
    var $navLogo = $(".nav-bar__logo");
    $navBtn.click(function(){
        function showNavPage(){
            $navPage.toggleClass("none-display");
        }
        function disableScrolling(){
            $("body").toggleClass("none-scroll");
        };
        showNavPage();
        disableScrolling();
    })
    
    /****************NAVPAGE************************/
    var $navPage = $(".nav-page");
    var $homeLink = $(".nav-page__home-link");
    var $portfolioLink = $(".nav-page__portfolio-link");
    var $aboutLink = $(".nav-page__about-link");
    var $contactLink = $(".nav-page__contact-link");
    var allPages = [$(".home"),$(".portfolio"),$(".about"),$(".contact")];
    var allNavLinks = [$homeLink,$portfolioLink,$aboutLink,$contactLink];
    var currentPage;
    function setOutline(element){
        element.css("border-color","black");
    }
    function removeOutLine(element){
        element.css("border-color","transparent");
    }
    setOutline($(".outline").first());
    currentPage = "home";
    allNavLinks.forEach(function(link){
        var thisCLass = link.attr("class").replace("nav-page__","").replace("-link","");
        link.parent().click(function(){
            currentPage = thisCLass;
            function closeNavPage(){
                $navPage.addClass("none-display");
            };
            function enableScrolling(){
                $("body").removeClass("none-scroll");
            };
            function outlineThisOnly(){
                var thisLink = link;
                setOutline(link.parent());
                allNavLinks.forEach(function(thatLink){
                    if(thatLink !== thisLink){
                        removeOutLine(thatLink.parent()) ;
                    }
                })
            }
            $navBtn.click(outlineThisOnly);
            toThisPage(thisCLass);
            closeNavPage();
            enableScrolling();
            
        });
        link.parent().hover(function(){
            setOutline(link.parent());
        },function(){
            if(thisCLass !== currentPage){
                removeOutLine(link.parent());
            }
        });
    });
    
    /******************HOME**********************/
    $(".home .action-btn").click(function(){
        toThisPage("portfolio");
    })

    
    
    
    
    
    
    
    
    
    
})