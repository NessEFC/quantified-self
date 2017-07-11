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

  $("#newFood").submit(function(event) {
    event.preventDefault()
    var $form = $( this ),
      url = $form.attr( 'action' )
      var posting = $.post( url, { name: $('#newFoodName').val(), calories: $('#newFoodCalories').val() })
      posting.done(function(data) {
        alert('success')
        console.log(data)
      }).done(function(data) {
        var newRow = `<tr id=${data.id}><td>${data.name}</td><td>${data.calories}</td></tr>`
        $(newRow).insertAfter('.table-headers')
      }).fail(function(error) {
        console.log(error)
      })
  })
})
