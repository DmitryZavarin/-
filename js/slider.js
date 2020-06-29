let counter = 0;
let len = $('.slider-item').length;
let isPositive = true;

let id = setInterval(function(){
    $('.slider-item').eq(0).click();   
}, 3000);


$('.slider-item').click(function() {
    
    if( counter == 0){
        isPositive = true;
    }else if( counter == len - 1 ){
        isPositive = false;
    }

    if ( isPositive == true ){
        counter++;
    }else {
        counter--;
    }

    let left = (counter * -100) + '%';
    $('.slider').css('left', left);

    $(".bullets-item").removeClass('active');
    $(".bullets-item").eq(counter).addClass('active');

});

// setInterval(function(){
//     $('.slider-item').eq(0).click();
// }, 3000);

$(".bullets-item").click(function(){
    //А на какой по номеру буллет я кликнул?

    clearInterval(id);

    let num = $(".bullets-item").index( $(this) );

    $(".bullets-item").removeClass('active');
    $(".bullets-item").eq(num).addClass('active');
    
    counter = num;

    let left = (counter * -100) + '%';
    $('.slider').css('left', left);
    
    id = setInterval(function(){
        $('.slider-item').eq(0).click();   
    }, 3000);
});