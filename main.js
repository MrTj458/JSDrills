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