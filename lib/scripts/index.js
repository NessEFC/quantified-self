require('../stylesheets/main')
const $ = require('jquery')
const localHost = require('./config').localHost
const Food = require('./food')
const Meal = require('./meal')
const insertRow = function(data) {
  $('#newFood').trigger("reset")
  var newRow = `<tr data-id=${data.id}><td contenteditable="true">${data.name}</td><td contenteditable="true">${data.calories}</td><td align="center"><button class="delete-food"><i class="fa fa-trash"></button></i></td></tr>`
  $(newRow).insertAfter('.table-headers')
}
const insertIndexRow = function(data) {
  var id = data[0].id
  var name = data[0].name
  var calories = data[0].calories
  var newRow = `<tr data-id=${id}><td contenteditable="true">${name}</td><td contenteditable="true">${calories}</td><td align="center"><button class="delete-food"><i class="fa fa-trash"></button></i></td></tr>`
  $(newRow).insertAfter('.diary-headers')
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

  // Meal.mealToHTML()
  //   .then((mealHTML) => {
  //     mealHTML.forEach((meal) => {
  //       $(meal).insertAfter('.diary-headers')
  //     })
  //     // $('.breakfast-table').on('click', '.delete-meal', function(event) {
  //     //   event.preventDefault()
  //     //   let id = this.closest('tr').dataset.id
  //     //   Meal.deleteMeal(id)
  //     // })
  // })

  for (var i = 1; i < 5; i++) {
    $.ajax({url: `${localHost}/meals/${i}`}).done(function (data) {
    }).done(insertIndexRow)
    .fail(function(error) {
      console.log(error)
    })
  }

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
