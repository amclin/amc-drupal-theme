"use strict";

var maxOpacity = 1; // Fully highlighted elements

var minOpacity = 0.5; // Defocused elements

var screenMargin = 0.25; // Top and bottom threshold to trigger transition

var sections = document.querySelectorAll('.region-content .view-content .views-row, .region-content .content .node-teaser');
/**
 * Identifies if the element is within the defined display area
 * @param {Object}
 * @returns {Boolean}
 **/

var isOnScreen = function isOnScreen(el) {
  var elRects = el.getClientRects()[0];
  var winHeight = window.innerHeight; // Top of object is above bottom of viewport margin

  var topIsOnscreen = elRects.top < winHeight * (1 - screenMargin); // Bottom of object is below the top of viewport margin

  var bottomIsOnscreen = elRects.bottom > winHeight * screenMargin;
  return topIsOnscreen && bottomIsOnscreen;
};
/**
 * Sets the correct opacity for all elements and
 * iterates to the next animation frame
 **/


var update = function update() {
  sections.forEach(function (section) {
    var opacity = minOpacity;

    if (isOnScreen(section)) {
      opacity = maxOpacity;
    }

    section.style.opacity = opacity;
  });
  window.requestAnimationFrame(update);
};
/**
 * Starts the sequence
 **/


var init = function init() {
  // Start the effects
  if (sections.length > 0) {
    update();
  }
};

init();
//# sourceMappingURL=list-transparency.js.map
