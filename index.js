
function Alert(){
    alert("Tính năng đang phát triển!!");
    
    }
    var btn = document.querySelector('.button');
    $(window).scroll(function() {
      if ($(window).scrollTop() > 1200) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '1200');
    });
    
