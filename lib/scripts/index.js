require('../stylesheets/main')
const $ = require('jquery')
const Food = require('./food')


$(() => {
  Food.foodsToHTML()
  .then((foodsHTML) => {
    foodsHTML.forEach((food) => {
      $(food).insertAfter('.table-headers')
    })
  })
})
