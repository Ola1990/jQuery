$(function(){
   var textParagrafu = $("#paragraf").text();
    console.log(textParagrafu);
    
    $("h1").text("Dowolna zawartość");  //nowy teks w h1
    
    var body = $("body").html();
    console.log(body);
    
    //$("body").html("<div class='nowy-div'><h5>Tytuł H5</h5></div>");- usuwa zawartaść całego body i wstawia tylko diva z h5
    $("body").append("<div class='nowy-div'><h5>Tytuł H5</h5></div>");  //dodaje na końcu body diva z h5
    $("body").prepend("<div class='nowy-div'><h5>Tytuł H5</h5></div>");  //dodaje na początku body diva z h5
    
    
    $("p").prepend("<div class='nowy-div'><h5>Tytuł H5</h5></div>");  //dodaje przed każdym paragrafem diva z h5
    
    $(".color-div").after("<img src='https://picsum.photos/458/354' class='img'>"); //wstawiamy obrazek po divie
    $(".color-div").before("<img src='https://picsum.photos/458/354' class='img-transform'>"); //wstawiamy obrazek przed divie
    
    
    
    $("p").remove(); //usuwa paragrafy
    
    $("h1").empty();//usuwa zawartość h1
    
    
    /*
    $("#second").css({
        'font-size': '4rem',
        'color': 'green',
        'text-decoration': 'underline',
    });*/
    
    
    setTimeout( function(){
       $("#second").addClass('ladny-naglowek'); 
        $("input").val("Start akcji");
    }, 3500 );  //setTimeout wykonuje po 3,5 sekundy środkową linijke, czyli dodaje do id second clase ladny-naglowek
    
    setTimeout( function(){
       $("#second").removeClass('ladny-naglowek'); 
       $("input").val("Powrót akcji do stanu początkowego");
    }, 6500 ); //setTimeout wykonuje po 6,5 sekundy środkową linijke, czyli usunie w id second clase ladny-naglowek
    
    
    var inputValue = $("#input").val();
    console.log(inputValue);
});