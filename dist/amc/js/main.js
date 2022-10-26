"use strict";

/* eslint-env jquery */
jQuery(document).ready(function ($) {
  /**
   * Force the superfish menu to align top instead of drop down
   */
  $('#menu .menu li > ul').each(function () {
    var position = $(this).parent().position();
    $(this).css('top', 4 - position.top);
  });

  /**
     * Trigger an initial resize
     */
  $(window).resize();
});
//# sourceMappingURL=main.js.map
