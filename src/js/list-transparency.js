const maxOpacity = 1 // Fully highlighted elements
const minOpacity = 0.5 // Defocused elements
const screenMargin = 0.25 // Top and bottom threshold to trigger transition
const sections = document.querySelectorAll('.region-content .view-content .views-row')

/**
 * Identifies if the element is within the defined display area
 * @param {Object}
 * @returns {Boolean}
 **/
const isOnScreen = (el) => {
  const elRects = el.getClientRects()[0]
  const winHeight = window.innerHeight
  // Top of object is above bottom of viewport margin
  const topIsOnscreen = (elRects.top < (winHeight * (1 - screenMargin)))
  // Bottom of object is below the top of viewport margin
  const bottomIsOnscreen = (elRects.bottom > (winHeight * screenMargin))

  return (topIsOnscreen && bottomIsOnscreen)
}

/**
 * Sets the correct opacity for all elements and
 * iterates to the next animation frame
 **/
const update = () => {
  sections.forEach((section) => {
    let opacity = minOpacity
    if (isOnScreen(section)) {
      opacity = maxOpacity
    }
    section.style.opacity = opacity
  })

  window.requestAnimationFrame(update)
}

/**
 * Starts the sequence
 **/
const init = () => {
  // Start the effects
  if (sections.length > 0) {
    update()
  }
}

init()
