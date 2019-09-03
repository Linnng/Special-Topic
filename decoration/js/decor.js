$(document).ready(function(){
    var cust_item_decor = $('.cust_item_decor').length;

    for(let i=0; i<cust_item_decor; i++){
        $('.cust_item_decor').eq(i).click(function(e){
            
            var decor_1 = $('.selectDecor_1').children('img').attr('src');    // img/small/000.png
            var decor_1_name = decor_1.substring(decor_1.lastIndexOf('.'),decor_1.lastIndexOf('/')+1);  // get 000

            var decor_2 = $('.selectDecor_2').children('img').attr('src');    // img/small/000.png
            var decor_2_name = decor_2.substring(decor_2.lastIndexOf('.'),decor_2.lastIndexOf('/')+1);  // get 000

            var decor_3 = $('.selectDecor_3').children('img').attr('src');    // img/small/000.png
            var decor_3_name = decor_3.substring(decor_3.lastIndexOf('.'),decor_3.lastIndexOf('/')+1);  // get 000

            var decor_src = $('.cust_item_decor').eq(i).children('img').attr('src');  // img/big/xxx.png
            
            if( (decor_1_name === '000') && (decor_2_name === '000')){
                $(".selectDecor_1").children('img').attr("src", decor_src);
            }
            else if( (decor_1_name != '000') && (decor_2_name === '000')){
                $(".selectDecor_2").children('img').attr("src", decor_src);
            }
            else if( (decor_1_name != '000') && (decor_2_name != '000') && (decor_3_name === '000')){
                $(".selectDecor_3").children('img').attr("src", decor_src);
            }
            else{
                alert('最多只能選三種裝飾品喔~~');
            }
        })
    }


    $(".selectDecor_1").draggable({
        containment: ".selectDecor_box",
        cursor: 'move'
    });
    $(".selectDecor_2").draggable({
        containment: ".selectDecor_box",
        cursor: 'move'
    });
    $(".selectDecor_3").draggable({
        containment: ".selectDecor_box",
        cursor: 'move'
    });
});