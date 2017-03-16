    $(document).ready(function(){

var ci=$("#center_image");
// console.log("ready");




$('.border_wrap').on('click',function(event) {
  var gate=false;
 if ( $(this).hasClass('border_wrap_down')) {
 gate=true;
 }

  event.preventDefault();
  /* Act on the event */

  var parent=$(this).parent();
var curent=ci.children();
var th=$(this);
// curent.fadeIn('slow', function() {
  
// });
curent.fadeOut('slow', function() {
 ci.hide();
 ci.append(th);
 parent.append(curent); 
curent.show();
 ci.fadeIn('slow', function() {
   
 });
 
 if (gate) {
   console.log('bottoom '+ th.attr('class'));
      console.log('bottoom2 '+ curent.attr('class'));
      th.removeClass('border_wrap_down');
     
   curent.addClass('border_wrap_down');   
       //curent.first().remove();;
      
  // curent.children('.caption').remove();
   curent.append(curent.children('.caption').remove());
    th.prepend(th.children('.caption').remove());
   // console.dir();
 }


 
});


  //$("#center_image img").toggleClass('img-thumbnail');;
});

});



// molbert

 // image
      $(document).ready(function(){
     // $('.wrap-stand').append($('#ri-1'));
      $('#r-1').fadeIn('slow', function() {        
      });

var arr_image=$('.wrap-stand img');
     $('.rotatebutton').on('click', function(event) {
        if ( $(this).hasClass('r-1') ) idkey='#r-1'; 
         if ( $(this).hasClass('r-2') ) idkey='#r-2'; 
          if ( $(this).hasClass('r-3') ) idkey='#r-3'; 
           if ( $(this).hasClass('r-4') ) idkey='#r-4';  

         arr_image.each(function(index, el) {
                 if ($(this).is(':visible')) {
                  $(this).fadeOut('slow', function() {
                        $(idkey).fadeIn('slow', function() {
                          
                        }); 
                  });
                 }
              
      
         });

     });

});

      // text


            $(document).ready(function(){
      $('#tr-1').fadeIn('slow', function() {        
      });

var arr_text=$('.wrap-stand_text');
     $('.rotatebutton').on('click', function(event) {
        if ( $(this).hasClass('r-1') ) idkey_t='#tr-1'; 
         if ( $(this).hasClass('r-2') ) idkey_t='#tr-2'; 
          if ( $(this).hasClass('r-3') ) idkey_t='#tr-3'; 
           if ( $(this).hasClass('r-4') ) idkey_t='#tr-4';  

         arr_text.each(function(index, el) {
                 if ($(this).is(':visible')) {
                  $(this).fadeOut('slow', function() {
                        $(idkey_t).fadeIn('slow', function() {
                          
                        }); 
                  });
                 }
              
      
         });

     });

});
