const $ = require('jquery')
const localHost = require('./config').localHost
const Food = require('./food')


class Meal {
  constructor(meal) {
    this.id = meal.id
    this.name = meal.name
    this.goal_calories = meal.goal_calories
    this.created_at = meal.created_at
  }

  static getFoods(foods) {
    let allFoods = foods.map((food) => {
      return new Food(food)
    })
    return allFoods.map((mealFood) => {
      return mealFood.toMealHTML()
    })
  }

}

module.exports = Meal
