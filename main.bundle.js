/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var food = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	$(document).ready(function () {

	  $("#newFood").submit(function (event) {
	    event.preventDefault();
	    var $form = $(this),
	        url = $form.attr('action');
	    var posting = $.post(url, { name: $('#newFoodName').val(), calories: $('#newFoodCalories').val() });
	    posting.done(function (data) {
	      alert('success');
	      console.log(data);
	    }).done(function (data) {
	      var newRow = "<tr><td>" + data.name + "</td><td>" + data.calories + "</td></tr>";
	      $(newRow).insertAfter('.table-headers');
	    }).fail(function (error) {
	      console.log(error);
	    });
	  });
	});

/***/ })
/******/ ]);