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
    var $homeLink = $(".nav-page__home-link");
    var $portfolioLink = $(".nav-page__portfolio-link");
    var $aboutLink = $(".nav-page__about-link");
    var $contactLink = $(".nav-page__contact-link");
    var allPages = [$(".home"),$(".portfolio"),$(".about"),$(".contact")];
    var allNavLinks = [$homeLink,$portfolioLink,$aboutLink,$contactLink];
    var currentPage; //string of current page name
    function setOutline(element){
        element.css("border-color","black");
    }
    function removeOutLine(element){
        element.css("border-color","transparent");
    }
    function updateCurrentPage(){
        allPages.forEach(function(page){
            if(!page.hasClass("none-display")){
            currentPage = page.attr("class");
            }
        })
    }
    
    
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
        }
        showNavPage();
        highlightCurrentPage();
        disableScrolling();
    })
    
    /****************NAVPAGE************************/
    var $navPage = $(".nav-page");
    allNavLinks.forEach(function(link){
        var thisPage = link.attr("class").replace("nav-page__","").replace("-link","");
        link.parent().click(function(){
            function closeNavPage(){
                $navPage.addClass("none-display");
            };
            function enableScrolling(){
                $("body").removeClass("none-scroll");
            };
            closeNavPage();
            toThisPage(thisPage);
            updateCurrentPage();
            enableScrolling();
        });
        link.parent().hover(function(){
            setOutline(link.parent());
        },function(){
            if(thisPage !== currentPage){
                removeOutLine(link.parent());
            }
        });
    });
    
    /******************HOME**********************/
    $(".home .action-btn").click(function(){
        toThisPage("portfolio");
    })

    
    
    
    
    
    
    
    
    
    
})