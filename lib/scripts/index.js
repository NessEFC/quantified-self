require('../stylesheets/main')
const $ = require('jquery')
const host = require('./config').host
const Food = require('./food')
const Meal = require('./meal')
const insertRow = function(data) {
  $('#newFood').trigger("reset")
  var newRow = `<tr data-id=${data.id}><td contenteditable="true">${data.name}</td><td contenteditable="true">${data.calories}</td><td align="center"><button class="delete-food"><i class="fa fa-trash"></button></i></td></tr>`
  $(newRow).insertAfter('.table-headers')
}

$(() => {
  Food.foodsToHTML()
    .then((foodsHTML) => {
      foodsHTML.forEach((food) => {
        $(food).insertAfter('.table-headers')
        $(food).insertAfter('.diary-table-headers')
      })
      $('.foods-table').on('click', '.delete-food', function(event) {
          event.preventDefault()
          let id = this.closest('tr').dataset.id
          Food.deleteFood(id)
      })
    })

  $.ajax({url: `${host}/meals/1`})
    .done(function (data) {
      let meal = Meal.getFoods(data)
      meal.map(function(meal) {
        $(meal).insertAfter(`.1-headers`)
      })
    })

  $.ajax({url: `${host}/meals/2`})
    .done(function (data) {
      let meal = Meal.getFoods(data)
      meal.map(function(meal) {
        $(meal).insertAfter(`.2-headers`)
      })
    })

  $.ajax({url: `${host}/meals/3`})
    .done(function (data) {
      let meal = Meal.getFoods(data)
      meal.map(function(meal) {
        $(meal).insertAfter(`.3-headers`)
      })
    })

  $.ajax({url: `${host}/meals/4`})
    .done(function (data) {
      let meal = Meal.getFoods(data)
      meal.map(function(meal) {
        $(meal).insertAfter(`.4-headers`)
      })
    })

  $("#newFood").submit(function(event) {
    event.preventDefault()
    var $form = $( this ),
    url = $form.attr( 'action' )
    var posting = $.post( url, { name: $('#newFoodName').val(), calories: $('#newFoodCalories').val() })
      posting.done(insertRow)
      .fail(function(error) {
        console.log(error)
    })
  })

  $('.foods-table').on('blur', 'tr td:not(:last-child)', function(event) {
    let id = parseInt(event.target.parentElement.dataset.id)
    let payload = event.target.innerText

    Food.update(id, payload)
  })

  $('#foods-filter').on('keyup', function(event) {
    Food.filterFood(event)
  })
})
