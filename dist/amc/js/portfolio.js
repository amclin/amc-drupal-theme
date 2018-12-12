"use strict";

/* eslint-env jquery */

/**
 * Build the portfolio gallery
 */
jQuery(document).ready(function ($) {
  if ($('.view-id-photo_gallery').length === 1) {
    /**
     * Sets the background image of the page
     * @param {Url} url to the image
     */
    var setBackground = function setBackground(url) {
      $('.region-background').css({
        'background-image': "url(".concat(url, ")")
      });
    }; // Setup buttons


    var $photos = $('.view-id-photo_gallery img');
    var $buttonList = $('<ul>');
    $photos.each(function (idx, el) {
      var $el = $(el);
      $buttonList.append("\n        <li>\n          <a href=\"".concat($el.attr('src'), "\"\n            title=\"").concat($el.attr('alt'), "\">").concat(idx + 1, "</a>\n        </li>\n      "));
    });
    $('#filler').after($('<div class="slide-buttons">').append($buttonList)); // Handle image swap on click

    var slideCounters = $('.slide-buttons li');
    slideCounters.on('click', 'a', function (ev) {
      ev.preventDefault(); // Block clicking on anchors

      var $a = $(ev.target);
      var $li = $a.parent();
      slideCounters.removeClass('active');
      $li.addClass('active');
      setBackground($a.attr('href'));
    }); // Trigger first slide

    $('a', slideCounters[0]).click();
  }
});
//# sourceMappingURL=portfolio.js.map
