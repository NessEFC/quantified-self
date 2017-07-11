const $ = require('jquery')

$(document).ready(function () {

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
