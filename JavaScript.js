
/*using jquery have to make sure document is ready,
when ready will run a function*/
$(document).ready(function () {
    //get next button then add a click event
    $('.next').on('click', function () {
        var currentImg = $('.active');
        var nextImg = currentImg.next();
        //only if there is a next image
        if (nextImg.length) {
            /*access the current image and change the css element: 
            z-index to -10 which makes it go to the bottom*/
            currentImg.removeClass('active').css('z-index,-10');
            nextImg.addClass('active').css('z-index',10)
        }
    });

    $('.prev').on('click', function () {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();
        //only if there is a prev image
        if (prevImg.length) {
            /*access the current image and change the css element: 
            z-index to -10 which makes it go to the bottom*/
            currentImg.removeClass('active').css('z-index,-10');
            prevImg.addClass('active').css('z-index', 10)
        }

    });
});