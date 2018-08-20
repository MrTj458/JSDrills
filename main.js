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
 // It kindof works. It does add up, but not 100% correctly written.
function toRoman(num) {
  var result = ''
  while (num - 1000 >= 0) {
    result += 'M'
    num -= 1000
  }
  while (num - 500 >= 0) {
    result += 'D'
    num -= 500
  }
  while (num - 100 >= 0) {
    result += "C"
    num -= 100
  }
  while (num - 50 >= 0) {
    result += 'L'
    num -= 50
  }
  while (num - 10 >= 0) {
    result += 'X'
    num -= 10
  }
  while (num - 5 >= 0) {
    result += 'V'
    num -= 5
  }
  if (num < 5 && num > 0) {
    for (var i = 0; i < num + 2; i++) {
      result += 'l'
      num -= 1
    }
  }
  return result
}

// Found this on google that is way better.
function romanize(num) {
  var lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }, roman = '', i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}