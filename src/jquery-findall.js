/* global define:false */

/*
 *
 * Copyright (c) 2015 baldwicc
 * Licensed under the MIT license.
 */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    factory(jQuery);
  }
}(function($) {
  $.fn.findAll = function(selector) {
    return $(this).find(selector).addBack(selector);
  };

  return $;
}));

