const $ = require('jquery')
const localHost = require('./config').localHost


class Meal {
  constructor(meal) {
    this.id = meal.id
    this.name = meal.name
    this.goal_calories = meal.goal_calories
    this.created_at = meal.created_at
  }

  static mealsToHTML() {
    return this.getMeals()
      .then((meals) => {
        return meals.map((meal) => {
          return new Meal(meal)
        })
      })
      .then((meals) => {
        return meals.map((meal) => {
          return meal.toHTML()
        })
      })
  }

  static getMeals() {
    return $.getJSON(`localHost + '/meal' + ${this.id}`)
  }
}

module.exports = Meal
