function disableScroll(){

    scrollY = document.documentElement.scrollTop;
    scrollX = document.documentElement.scrollLeft;

    window.onscroll = function(){
        window.scrollTo(scrollX, scrollY);
    };
}

function enableScroll() {
    window.onscroll = function() {};
}