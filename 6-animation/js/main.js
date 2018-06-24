$(function(){
    var output = $("div");
    var btnShow = $("#show");
    var btnHide = $("#hide");
    
    btnHide.on({
       'click' : function(){
           /*output.hide(2500, function(){
               console.log("Schowamy div");
           });*/
           //---------------------------
           
          /* output.fadeOut(2500, function(){
               console.log("Schowamy div");
           });*/
           //------------------------------
           
           output.slideUp(2500, function(){
               console.log("Schowamy div");
           });
       } 
    });
    
    btnShow.on({
       'click' : function(){
         
           /* output.show('slow', function(){
               console.log("Widoczny div");
           });*/
           //--------------------------
      
           /*output.fadeIn('slow', function(){
               console.log("Widoczny div");
           }); */
           //--------------------------
          
           output.slideDown('slow', function(){
               console.log("Widoczny div");
           }); 
        
    }
});
    
    
    
    //--------------------------------------------------------------------------
    
    
    var animBtn = $("#anim");
    
    animBtn.on({
       'click' : function(){
           /*output.animate({
               'left' : '+=10px',
               'top' : '+=100px',
               'width' : '600px',
           },1500,function(){
               alert("Koniec animacji")
           });*/
           
           $('html, body').animate({scrollTop: 400},600);
       } 
    });
    
    
});