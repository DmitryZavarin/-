$('.menu-button').click(function () {

    let styleAttr = $('.options').attr('style');
    
    if ( styleAttr == undefined) {
        $('.options').css('right', '0');
       

    } else  {
        $('.options').removeAttr('style');

    }
    
});