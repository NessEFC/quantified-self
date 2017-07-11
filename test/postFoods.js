// const assert = require('chai').assert
// const webdriver = require('selenium-webdriver')
// const until = webdriver.until
// const test = requre('selenium-webdriver/testing')
// const frontEndLocation = "http://localhost:8080"
//
// describe('Filling in food fields', function() {
//   var driver
//   this.timeout(10000)
//
//   test.beforeEach(function() {
//     driver = new webdriver.Builder()
//       .forBrowser('chrome')
//       .build()
//   })
//
//   test.afterEach(function() {
//     driver.quit()
//   })
//
//   // When I visit foods.html, I can enter a name and calorie amount, and create a new food by clicking "Add Food"
//
//   test.it('lets a user fill in name and calories for a new food', function() {
//     driver.findElement({css: "#newFoodName"})
//     .sendKeys("Apple")
//     driver.findElement({css: "#newFoodCalories"})
//     .sendKeys(25)
//     driver.findElement({css: "input[type=submit]"})
//     .click()
//     })
// })
//
// // const Meal = require("../lib/meal")
// //
// // describe('Meal', function() {
// //   it('can turn an api response into HTML', function(done) {
// //     var APIresponse = new Promise(function(resolve, reject){
// //       resp;ve({}
// //         name: "Breakfast",
// //       goal_calories: 400,
// //       foods: [
// //         {
// //           name: "Banana",
// //           calories: 35
// //         }
// //       ]
// //     })
// //       if(false)
// //       reject("nope")
// //     })
// //     Meal.fromAPIToHTML(APIResponse)
// //     .then(function(mealHTML){
// //       assert.include("Banana". mealHTML)
// //     })
// //     done()
// //   })
// // })
