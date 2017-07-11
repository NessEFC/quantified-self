var assert = require('chai').assert
var webdriver = require('selenium-webdriver')
var until = webdriver.until
var test = requre('selenium-webdriver/testing')
var frontEndLocation = "http://localhost:8080"

test.describe('Filling in food fields', function() {
  var driver
  this.timeout(10000)

  test.beforeEach(function() {
    driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build()
  })

  test.afterEach(function() {
    driver.quit()
  })

  test.it('lets a user fill in name and calories for a new food', function() {
    driver.findElement({css: "#newFoodName"})
    .sendKeys("Apple")
    driver.findElement({css: "#newFoodCalories"})
    .sendKeys(25)
    driver.findElement({css: "input[type=submit]"})
    .click()

    driver.wait(until.elementLocated({css: }))

  })
})
//
// When I visit foods.html, I can enter a name and calorie amount, and create a new food by clicking "Add Food"
