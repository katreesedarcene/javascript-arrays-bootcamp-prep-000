var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"] 

var cities = ["New York", "San Francisco"]

["Philadelphia, ...cities"]

cities


var cities = ["New York", "San Francisco"];

 [...cities, "Philadelphia"]
 
 function addElementToBeginningOfArray(array, element) {
   return [element, ...array]
  
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
  
}

function addElementToEndOfArray(array, element) {
   return [element, array.push]
}









