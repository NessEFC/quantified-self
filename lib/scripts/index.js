require('../stylesheets/main')
const $ = require('jquery')
const localHost = require('./config').localHost
const Food = require('./food')
const Meal = require('./meal')
const insertRow = function(data) {
  $('#newFood').trigger("reset")
  // i think we could use Food.findLastFoodCreated here (from backend) and/or Food.toHTML to populate?
  var newRow = `<tr data-id=${data.id}><td contenteditable="true">${data.name}</td><td contenteditable="true">${data.calories}</td><td align="center"><button class="delete-food"><i class="fa fa-trash"></button></i></td></tr>`
  $(newRow).insertAfter('.table-headers')
}

$(() => {
  Food.foodsToHTML()
    .then((foodsHTML) => {
      foodsHTML.forEach((food) => {
        $(food).insertAfter('.table-headers')
      })
      $('.foods-table').on('click', '.delete-food', function(event) {
        event.preventDefault()
        let id = this.closest('tr').dataset.id
        Food.deleteFood(id)
      })
  })

  Food.foodsToHTMLIndex()
    .then((foodsHTML) => {
      foodsHTML.forEach((food) => {
        $(food).insertAfter('.diary-table-headers')
      })
      $('.diary-table').on('click', '.delete-food', function(event) {
        event.preventDefault()
        let id = this.closest('tr').dataset.id
        Food.deleteFood(id)
      })
  })

  Meal.mealsToHTML()
    .then((mealsHTML) => {
      mealsHTML.forEach((meal) => {
        $(meal).insertAfter('.diary-headers')
      })
      $('.breakfast-table').on('click', '.delete-meal', function(event) {
        event.preventDefault()
        let id = this.closest('tr').dataset.id
        Meal.deleteMeal(id)
      })
  })

  // $.ajax({url: localHost + '/meals/1'}).done(function (data) {
  //   console.log(data[0].name)
  //   console.log(data[0].calories)
  // })

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
>>>>>>> master
})
