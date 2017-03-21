  // cooler
    $(document).ready(function(){


// //console.log("ready");


var start_change=true;

$('.border_wrap').on('click',function(event) {
 // var center=false;


 if ( $(this).hasClass('border_wrap_center')) {
      //console.log("center");
     var img= $(this).children('.thumbnail').children('img');
        //console.log(img.attr('id'));
     // $.fancybox.open('<div class="message"><h2>Hello!</h2><p>You are awesome!</p></div>'); 
     // $.fancybox.open(img.innerHTML); 

      event.preventDefault();
      return true;
 }
 if (start_change!=true) return true;; 
start_change=false;
$("#center_image .border_wrap_center .thumbnail .galerybox_u").empty();
var ci=$("#center_image");
//----------
  var gate=false;
 // if ( $(this).hasClass('border_wrap_down')) {
  console.log(this);
   if ( $(this).hasClass('border_wrap_up')) {
 gate=true;
 }

//  event.preventDefault();
  /* Act on the event */

  var parent=$(this).parent();

var curent=ci.children();
var th=$(this);

// curent.fadeIn('400', function() {
  
// });
curent.fadeOut('400', function() {
 ci.hide();
 ci.append(th);
 parent.append(curent); 
curent.show();
 ci.fadeIn('400', function() {
   
 });
 
 th.addClass('border_wrap_center');  
curent.removeClass('border_wrap_center');





   console.log('clik '+gate);
 if (gate) {
   console.log('upp '+ th.attr('class'));
      //console.log('bottoom2 '+ curent.attr('class'));
       th.removeClass('border_wrap_up');     
       curent.addClass('border_wrap_up');   

    
   //curent.children('.caption').remove();      
    curent.prepend(curent.children('.caption').remove()); // back
//th.children('.caption').remove();
    // th.append(th.children('.caption').remove());
   
 }
// return;
 // <a href="/assets/img/allimage/l4.jpg" data-fancybox data-caption="">
 //     <img hidden="true" id="rc-3" src="/assets/img/allimage/4.jpg" width="360" height="240" alt="">


  var img_inner=th.find('img');
  var full_img_path=th.find('img').attr('src');
  var fileNameIndex = th.find('img').attr('src').lastIndexOf("/") + 1;
var filename = th.find('img').attr('src').substr(fileNameIndex);

 var new_name=full_img_path.replace(filename,'l'+filename);
  //console.log(new_name);
  var c_image=curent.find('img');

  // var galerybox_u=curent.children('.galerybox_u').clone();
  curent.find('a').remove();
  
  curent.children('.thumbnail').append(c_image);
   th.append(th.children('.caption').remove());//from gate

 var a_inner= '<a id="dodo" href="'+new_name+'" data-fancybox="gallery" data-caption=""></a>';

  th.children('.thumbnail').html(a_inner);
  $('#dodo').prepend(img_inner);



//     <a  data-fancybox="gallery" href="/assets/img/allimage/cooler/3/1.jpg"></a>
//     <a  data-fancybox="gallery" href="/assets/img/allimage/cooler/3/2.jpg"></a>
//     <a  data-fancybox="gallery" href="/assets/img/allimage/cooler/3/3.jpg"></a>
// </div>



//var id_folder=1;
if (img_inner.attr('id')=='rc-1') {
id_folder=1;
}
if (img_inner.attr('id')=='rc-2') {
id_folder=2;
}
if (img_inner.attr('id')=='rc-3') {
id_folder=3;
}
if (img_inner.attr('id')=='rc-4') {
id_folder=4;
}
if (img_inner.attr('id')=='rc-5') {
id_folder=5;
}
// //console.log(galerybox_u);
jQuery('<div/>', {
    class:'hidden galerybox_u',
}).appendTo('.border_wrap_center .thumbnail');

//     for (var i =1 ; i < 6; i++) {
//    $('.border_wrap_center .thumbnail .hidden.galerybox_u').append('<a  data-fancybox="gallery" href="/assets/img/allimage/cooler/'+id_folder+'/'+i+'.jpg"></a>');     
// }

  for (var i =1 ; i < 6; i++) {
if (id_folder==i) continue;
   $('.border_wrap_center .thumbnail .hidden.galerybox_u').append(' <a  data-fancybox="gallery" href="/assets/img/allimage/l'+i+'.jpg"></a>');     
}


  $("[data-fancybox]").fancybox({
    // Options will go here
  beforeClose: function(instance, current, e ){
     $('.navbar-opacity').show();  

  },
  beforeLoad: function(instance, current, e ){
     $('.navbar-opacity').hide();  
  },
  });




 // curent.children('.thumbnail a').append(img_inner);



 
});


  //$("#center_image img").toggleClass('img-thumbnail');;
start_change=true;

});

});
// end  kooler


// molbert

 // image
      $(document).ready(function(){
     // $('.wrap-stand').append($('#ri-1'));
      $('#r-1').fadeIn('400', function() {        
      });

var arr_image=$('.wrap-stand img');
     $('.rotatebutton').on('click', function(event) {
        if ( $(this).hasClass('r-1') ) idkey='#r-1'; 
         if ( $(this).hasClass('r-2') ) idkey='#r-2'; 
          if ( $(this).hasClass('r-3') ) idkey='#r-3'; 
           if ( $(this).hasClass('r-4') ) idkey='#r-4';  

         arr_image.each(function(index, el) {
                 if ($(this).is(':visible')) {
                  $(this).fadeOut('400', function() {
                        $(idkey).fadeIn('400', function() {
                          
                        }); 
                  });
                 }
              
      
         });

     });

});

      // text


            $(document).ready(function(){
      $('#tr-1').fadeIn('400', function() {        
      });

var arr_text=$('.wrap-stand_text');
     $('.rotatebutton').on('click', function(event) {
        if ( $(this).hasClass('r-1') ) idkey_t='#tr-1'; 
         if ( $(this).hasClass('r-2') ) idkey_t='#tr-2'; 
          if ( $(this).hasClass('r-3') ) idkey_t='#tr-3'; 
           if ( $(this).hasClass('r-4') ) idkey_t='#tr-4';  

         arr_text.each(function(index, el) {
                 if ($(this).is(':visible')) {
                  $(this).fadeOut('400', function() {
                        $(idkey_t).fadeIn('400', function() {
                          
                        }); 
                  });
                 }
              
      
         });

     });

});






