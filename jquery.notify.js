(function() {
  $.fn.notify = function(message, options) {
    var delay, position;

    if (options == null) {
      options = {};
    }

    options = options || {};
    position = options['position'] || window.scrollY;
    delay = options['delay'] || 3000;
    return $("<div id='notify'>" + message + "</div>").insertAfter("body").animate({
      top: position
    }).delay(delay).animate({
      top: "-100"
    }, function() {
      return $(this).remove();
    });
  };
}).call(this);
