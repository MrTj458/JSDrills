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

function vowelCount(input) {
  var totalVowels = 0
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var letters = input.toLowerCase().split('')

  for (var letter = 0; letter < letters.length; letter++) {
    for (var vowel = 0; vowel < vowels.length; vowel++) {
      if (letters[letter] === vowels[vowel]) {
        totalVowels++
      }
    }
  }

  return totalVowels
}

function roll2Dice() {
  var result = []
  result.push(Math.floor(Math.random() * 6) + 1)
  result.push(Math.floor(Math.random() * 6) + 1)
  return result
}

function avgArray(array) {
  var average = 0
  for (var i = 0; i < array.length; i++) {
    average += array[i]
  }
  return (average / array.length)
}

function fizzBuzz() {
  for (var i = 1; i < 101; i++) {
    var result = ''
    if (i % 3 == 0) {
      result += 'fizz'
    }
    if (i % 5 == 0) {
      result += 'buzz'
    }
    if (result === ''){
      result = i
    }
    console.log(result)
  }
}

function factorial(num) {
  if (num === 1 || num === 0) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}

function fibbonacci(num) {
  if (num < 2) {
    return num
  } else {
    return fibbonacci(num - 1) + fibbonacci(num - 2)
  }
}