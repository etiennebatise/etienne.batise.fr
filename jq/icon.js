$(function() {
  $('#dev').click(function() {
    $('section, footer').fadeOut(function(){
      $('#content').load('home/developer.php', function(){
        $('#content, section, footer').fadeIn();
      });
    });
  });

  $('#note').click(function() {
    $('section, footer').fadeOut(function(){
     $('#content').load('home/musician.php', function(){
      $('#content, section, footer').fadeIn();
    });
   });
  });

 $('#pen').click(function() {
    $('section, footer').fadeOut(function(){
     $('#content').load('home/student.php', function(){
      $('#content, section, footer').fadeIn();
    });
   });
  });

});