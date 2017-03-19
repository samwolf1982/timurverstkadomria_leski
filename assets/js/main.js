  // cooler
    $(document).ready(function(){

var ci=$("#center_image");
// console.log("ready");




$('.border_wrap').on('click',function(event) {
 // var center=false;
 if ( $(this).hasClass('border_wrap_center')) {
      console.log("center");
     var img= $(this).children('.thumbnail').children('img');
        console.log(img.attr('id'));
     // $.fancybox.open('<div class="message"><h2>Hello!</h2><p>You are awesome!</p></div>'); 
     // $.fancybox.open(img.innerHTML); 

      event.preventDefault();
      return true;
 }



//----------
  var gate=false;
 if ( $(this).hasClass('border_wrap_down')) {
 gate=true;
 }

//  event.preventDefault();
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
 
 th.addClass('border_wrap_center');  
curent.removeClass('border_wrap_center');






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

 // <a href="/assets/img/allimage/l4.jpg" data-fancybox data-caption="">
 //     <img hidden="true" id="rc-3" src="/assets/img/allimage/4.jpg" width="360" height="240" alt="">


  var img_inner=th.find('img');
  var full_img_path=th.find('img').attr('src');
  var fileNameIndex = th.find('img').attr('src').lastIndexOf("/") + 1;
var filename = th.find('img').attr('src').substr(fileNameIndex);

 var new_name=full_img_path.replace(filename,'l'+filename);
  console.log(new_name);
  var c_image=curent.find('img');
  curent.find('a').remove();
  curent.children('.thumbnail').append(c_image);

 var a_inner= '<a id="dodo" href="'+new_name+'" data-fancybox data-caption=""></a>';
 // var a_inner = document.createElement('a');
 // a_inner.append(img_inner);
  th.children('.thumbnail').html(a_inner);
  $('#dodo').append(img_inner);
  // ркбочи код !!!!!!!!!!! вствка только ид
  // curent.children('.thumbnail').append( $('<a/>')
  //   .attr("id", "newDiv2")
  //   .addClass("newDiv purple bloated")
  //   .append(img_inner)
  //     );


 // curent.children('.thumbnail a').append(img_inner);



 
});


  //$("#center_image img").toggleClass('img-thumbnail');;
});

});
// end  kooler


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






