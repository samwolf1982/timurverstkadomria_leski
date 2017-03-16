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
