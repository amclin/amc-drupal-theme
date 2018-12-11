/* eslint-env jquery */

/**
 * Applies a random background image for the page from a source list
 * provided from a REST API.
 */
jQuery(document).ready(function ($) {
  /**
     * Gets the API from where it's defined in the page source
     */
  const getAPI = function () {
    let api
    let block = $('#block-views-random-photo-block')
    if (block.length === 1) {
      api = block.data().api
    }
    return api
  }

  /**
     * Sets the background image of the page
     * @param {Url} url to the image
     */
  const setBackground = function (url) {
    $('.region-background').css({
      'background-image': `url(${url})`
    })
  }

  /**
     * Extracts a single random image from a list of photo objects
     * @param {list} images Array of photo objects
     * @returns {string} URL of image
     */
  const getRandomImage = function (images) {
    var url
    if (images.length > 0) {
      url = images[Math.floor(Math.random() * images.length)].photo.field_photo.src
    }
    return url
  }

  const api = getAPI()

  if (typeof api === 'string') {
    var imageList = $.get({ url: api })

    imageList.done((result) => {
      var img = getRandomImage(result.photos)
      setBackground(img)
    }).fail((err) => {
      console.error('Failed to get list of background images.', err)
    })
  }
})
