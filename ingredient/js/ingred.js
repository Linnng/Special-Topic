$(document).ready(function(){
    var cust_item_ingred = $('.cust_item_ingred').length;

    for(let i=0; i<cust_item_ingred; i++){
        $('.cust_item_ingred').eq(i).click(function(e){
            
            var ingred_1 = $('.selectIngred_1').children('img').attr('src');    // img/small/000.png
            var ingred_1_name = ingred_1.substring(ingred_1.lastIndexOf('.'),ingred_1.lastIndexOf('/')+1);  // get 000

            var ingred_2 = $('.selectIngred_2').children('img').attr('src');    // img/small/000.png
            var ingred_2_name = ingred_2.substring(ingred_2.lastIndexOf('.'),ingred_2.lastIndexOf('/')+1);  // get 000

            var ingred_src = $('.cust_item_ingred').eq(i).children('img').attr('src');  // img/big/xxx.png
            var ingred_name = ingred_src.substring(ingred_src.lastIndexOf('.'),ingred_src.lastIndexOf('/')+1);  // get xxx
            ingred_src = ingred_src.replace('big','small').replace('000',ingred_name); // big to small, 000 to xxx
            e.stopPropagation();
            if( (ingred_1_name === '000') && (ingred_2_name === '000')){
                $(".selectIngred_1").children('img').attr("src", ingred_src);
            }
            else if( (ingred_1_name != '000') && (ingred_2_name === '000')){
                $(".selectIngred_2").children('img').attr("src", ingred_src);
            }
            else{
                alert('最多只能選兩種配料喔~~');
            }
        })
    }
});