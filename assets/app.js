/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css'

// start the Stimulus application
import './bootstrap'

import 'bootstrap' //Le bootstrap CSS de Twitter
import $ from 'jquery'

$(document).ready(() => {
  let refresh = $('body').data('refresh')
  let url = $('body').data('url')
  let zone = $('body').data('id')

  if (refresh == true) {
    setInterval(() => {
      $(zone).empty().load(url)
    }, 3000);
  }
})
