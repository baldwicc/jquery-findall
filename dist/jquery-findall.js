/*! jquery-findall - v0.1.1 - 2015-11-18
* https://github.com/baldwicc/jquery-findall#readme
* Copyright (c) 2015 ; Licensed MIT */
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
}));

