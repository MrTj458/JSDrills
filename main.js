function sum(num1, num2) {
  return num1 + num2
}

function sumArray(array) {
  var total = 0
  for (var i in array) {
    total += array[i]
  }
  return total
}

function fToC(degreesF) {
  return (degreesF - 32) * (5 / 9)
}