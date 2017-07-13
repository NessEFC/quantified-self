const $ = require('jquery')
const localHost = require('./config').localHost


class Meal {
  constructor(meal) {
    this.id = meal.id
    this.name = meal.name
    this.goal_calories = meal.goal_calories
    this.created_at = meal.created_at
  }

  toHTML() {
    return (
      `<tr class="${this.name}" data-id=${this.id}>
        <td contenteditable="true">${this.name}</td>
        <td align="left" contenteditable="true">${this.calories}</td>
        <td align="center"><button class="remove-food-from-meal"><i class="fa fa-trash"></button></i></td>
      </tr>`
    )
  }

}

module.exports = Meal
