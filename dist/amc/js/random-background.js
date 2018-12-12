"use strict";

/* eslint-env jquery */

/**
 * Applies a random background image for the page from a source list
 * provided from a REST API.
 */
jQuery(document).ready(function ($) {
  /**
     * Gets the API from where it's defined in the page source
     */
  var getAPI = function getAPI() {
    var api;
    var block = $('#block-views-random-photo-block');

    if (block.length === 1) {
      api = block.data().api;
    }

    return api;
  };
  /**
     * Sets the background image of the page
     * @param {Url} url to the image
     */


  var setBackground = function setBackground(url) {
    $('.region-background').css({
      'background-image': "url(".concat(url, ")")
    });
  };
  /**
     * Extracts a single random image from a list of photo objects
     * @param {list} images Array of photo objects
     * @returns {string} URL of image
     */


  var getRandomImage = function getRandomImage(images) {
    var url;

    if (images.length > 0) {
      url = images[Math.floor(Math.random() * images.length)].photo.field_photo.src;
    }

    return url;
  };

  var api = getAPI();

  if (typeof api === 'string') {
    var imageList = $.get({
      url: api
    });
    imageList.done(function (result) {
      var img = getRandomImage(result.photos);
      setBackground(img);
    }).fail(function (err) {
      console.error('Failed to get list of background images.', err);
    });
  }
});
//# sourceMappingURL=random-background.js.map
