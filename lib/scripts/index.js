require('../stylesheets/main')
const $ = require('jquery')
const Food = require('./food')


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

  $("#newFood").submit(function(event) {
    event.preventDefault()
    var $form = $( this ),
      url = $form.attr( 'action' )
      var posting = $.post( url, { name: $('#newFoodName').val(), calories: $('#newFoodCalories').val() })
      posting.done(function(data) {
        console.log(data)
        $('#newFood').trigger("reset")
      }).done(function(data) {
        var newRow = `<tr data-id=${data.id}><td>${data.name}</td><td>${data.calories}</td><td align="center"><button class="delete-food"><i class="fa fa-trash"></button></i></td></tr>`
        $(newRow).insertAfter('.table-headers')
      }).fail(function(error) {
        console.log(error)
      })
  })
})
