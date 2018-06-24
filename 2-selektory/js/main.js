$(function(){
   
    //selektory po tagu
    var akapity = $("p");
    
    //slektor konkretnego paragrafu na stronie - :eq(index)
    var akapity = $("p:eq(1)");
    console.log(akapity);
    
    //selektory po id
    var paragraf = $("#paragraf");
    console.log(paragraf);
    
    //selektory po klasie
    var paragrafKlasa = $(".paragraf");
    console.log(paragrafKlasa);
    
    //pobiera wszystkie classy zaczynające się na paragraf (^-zaczynające się, znak $- to kończące się)
    //selektory po atrybutach
    var p = $("[class^='paragraf']");  
    console.log(p);
    
});
