const favGames = ['Minecraft', 'CS:GO', 'PUBG']

console.log(favGames[0])
console.log(favGames[1])
console.log(favGames[2])

const drinks = []

drinks.push('water')
drinks.push('juice')
drinks.push('tea')

console.log(drinks[0])
console.log(drinks[1])
console.log(drinks[2])

const food = []

food.unshift('rice')
food.unshift('soup')
food.unshift('pizza')

console.log(food[0])
console.log(food[1])
console.log(food[2])

const numbers = [1, 63, 2, 5, 276, 76, 776, 4, 56, 443, 607, 32, 503, 5089, 16, 441, 964, 9, 555]

// console.log(Math.max(...numbers))

// console.log(Math.min(...numbers))

function findMax(numbers) {
   return numbers.reduce(
      (acc, number) => (number > acc ? number : acc),
      numbers[0]
   )
}

console.log(findMax(numbers))

function findMin(numbers) {
   return numbers.reduce(
      (acc, number) => (number < acc ? number : acc),
      numbers[0]
   )
}

console.log(findMin(numbers))

for (let key in numbers) {
   let number = key
   if (key > number) {
      key = number
   }
   console.log(number)
}

let sum = 0

for (let i = 0; i < numbers.length; i++){
   sum+=numbers[i]
}

let result = sum / numbers.length;

console.log(result)

const names = ['Bohdan', 'Andriy', 'Sergiy', 'Oksana', 'Nastya']

console.log(names)

delete names[2]

console.log(names)

const foodAndDrinks = food.concat(drinks)

console.log(foodAndDrinks)

numbers.splice(1, 0, 6)

console.log(numbers)

numbers.splice(0, 1)

console.log(numbers)

numbers.slice(1)

console.log(numbers)