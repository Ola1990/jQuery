$(function(){
    $("body").find('p:eq(1)').css({
        'color':'blue',
        'font-style': 'italic',
        
    }).after("<strong>Drugi paragaf namierzony!!</strong>")
    
    
    $("p").each(function(index, value){
        //console.log("index: " + index + " | Value: "+ value);
        console.log($(this));
        $(this).addClass('paragraf-' +index).append("<strong>index = " + index + "</strong>");
    });
    
});
