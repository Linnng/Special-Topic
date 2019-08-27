$(document).ready(function(){
    let divWidth = $('.msgContent').width();
    let divHeight = $('.msgContent').height();
    
    // default
    moveSize();

    // calculeting widow size
    $(window).resize(function(){
        moveSize();
    });

    function moveSize(){
        $('.msgContent').height() = divWidth * 0.5;
    }

});