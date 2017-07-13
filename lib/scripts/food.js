const $ = require('jquery')
const localHost = require('./config').localHost
const checkbox = document.createElement("INPUT");
checkbox.setAttribute("type", "checkbox");


class Food {
  constructor(food) {
    this.id = food.id
    this.name = food.name
    this.calories = food.calories
    this.created_at = food.created_at
    this.updated_at = food.updated_at
  }

  static foodsToHTML() {
    return this.getFoods()
      .then((foods) => {
        return foods.map((food) => {
          return new Food(food)
        })
      })
      .then((foods) => {
        return foods.map((food) => {
          return food.toHTML()
        })
      })
  }

  static foodsToHTMLIndex() {
    return this.getFoods()
      .then((foods) => {
        return foods.map((food) => {
          return new Food(food)
        })
      })
      .then((foods) => {
        return foods.map((food) => {
          return food.toHTMLIndex()
        })
      })
  }

  static getFoods() {
    return $.getJSON(localHost + '/foods')
  }

  toHTMLIndex(data) {
    return (
      `<tr class="${this.name}" data-id=${this.id}>
        <td type="checkbox"></td>
        <td>${this.name}</td>
        <td align="left">${this.calories}</td>
      </tr>`
    )
  }

  toHTML() {
    return (
      `<tr class="${this.name}" data-id=${this.id}>
        <td contenteditable="true">${this.name}</td>
        <td align="left" contenteditable="true">${this.calories}</td>
        <td align="center"><button class="delete-food"><i class="fa fa-trash"></button></i></td>
      </tr>`
    )
  }

  static deleteFood(id) {
    let url = (localHost + '/foods/' + id)

    fetch(url, {
        method: 'DELETE',
        headers: {
          "Content-type": "application/json"
        }
      })
      .then(res => res.json())
      .then((data) => {
        $(`tr[data-id="${id}"]`).remove()
      })
      .catch(function (error) {
        console.log('Request failed', error)
      })
  }

  static update(id, payload) {
    let url = (localHost + '/foods/' + id)
    let key = isNaN(parseInt(payload)) ? "name" : "calories"
    if(key === 'calories') { payload = parseInt(payload) }
    let options = {}
    options[key] = payload

    fetch(url, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(options)
    })
  }

  static filterFood(event) {
    let filter = event.target.value.toLowerCase()
    let table = $('.foods-table')
    let rows = table.find('tr').not(':first')

    rows = Array.from(rows)

    rows.map(row => {
      let name = row.getElementsByTagName('td')[0].innerText.toLowerCase()
      if(name.indexOf(filter) > -1) {
        row.style.display = ""
      } else {
        row.style.display = "none"
      }
    })
  }
}


module.exports = Food
