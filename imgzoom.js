(function($){
  function closeOverlay() {
    $("#overlay").remove();
  }

  $.fn.imgZoom = function(src){
    src = src || $(this).attr('src'); //if no src is specified, get the element attr

    //Overlay creation
    $("body").append("<div id='overlay'></div>");
    $("#overlay").css({
      'position' : 'fixed',
      'width' : '100%',
      'height' : '100%',
      'top' : '0',
      'left' : '0',
      'backgroundColor' : 'rgba(0,0,0, 0.8)',
      'display' : 'flex',
      'alignItems' : 'center',
      'justify-content' : 'center;'
    });

    //Close overlay if clicked
    $("#overlay").click(function () {
      closeOverlay();
    });

    //Image creation and positioning
    $("#overlay").append("<img src='"+ src +"' id='zoomed_image'/>");
    $("#zoomed_image").css({
      'maxWidth' : '95%',
      'maxHeight' : '95%',
      'margin' : 'auto'
    });

    //Don't close overlay if click on img
    $("#zoomed_image").click(function (e) {
      return false;
    });

    return this;
  };

  $(document).ready(function () {
    $("#IMG").click(function() {
      $(this).imgZoom();
    });

    $("body").keydown(function(e) {
      if(e.keyCode == 27) { // left
        closeOverlay();
      }
    });
  })

})(jQuery);
