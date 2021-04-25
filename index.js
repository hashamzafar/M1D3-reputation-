/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/

/* WRITE YOUR CODE HERE */
let arr = [1,2,3,4,5]
/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */
let obj = {
    name:'hasham',
    surname : 'Zafar',
    email : 'hasham307@gmail.com',
    age: 32

}
/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR CODE HERE */
obj['licence'] = true 
/* EXERCISE 4
Remove from the previously created object the age property.
*/

/* WRITE YOUR CODE HERE */
delete obj.age
/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR CODE HERE */
let obj1 = {
    name: 'hasham',
    surname: 'zafar',
    email:'hasham@gmail.com'
}
console.log(obj.email === obj1.email)
/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR CODE HERE */
let totalShoppingCart = 50
let grandTotal 
let shipingCost = 10
let blackFriday = 50
if (totalShoppingCart <= 50 ){
    grandTotal = totalShoppingCart
}else{
    grandTotal = totalShoppingCart + shipingCost 
}
console.log(grandTotal)
/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR CODE HERE */
if (totalShoppingCart <= 50 && blackFriday <= 50){
    grandTotal = totalShoppingCart* 0.8

}else{
    grandTotal = totalShoppingCart + shipingCost
}
console.log(grandTotal)
/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR CODE HERE */
let car = {
    brand: 'ferrari',
    model: '595',
    licencePlate:'ge563tr'

}
let car2 = {
    brand: 'ferrari',
    model: '595',
    licencePlate:'ge564rd'

}
let car3 = {
    brand: 'ferrari',
    model: '595',
    licencePlate:'ge568uh'

}
let car4 = {
    brand: 'ferrari',
    model: '595',
    licencePlate:'ge567yh'

}
let car5 = {
    brand: 'ferrari',
    model: '595',
    licencePlate:'ge563gf'

}
let car6 = {
    brand: 'ferrari',
    model: '595',
    licencePlate:'ge560lw'

}

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

/* WRITE YOUR CODE HERE */
let carsForRent = [
    car, car2,car3,car4,car5,car6
]
console.log(carsForRent)
/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */
carsForRent.pop()
carsForRent.shift()
console.log(carsForRent)
/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

/* WRITE YOUR CODE HERE */

console.log(car.brand, car.licencePlate)
/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/
let carsForSale= [
    'merserati',
    'merserati2',
    'merserati3'
]
/* WRITE YOUR CODE HERE */
let totalCars = carsForRent.length + carsForSale.length
console.log(totalCars)
/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

/* WRITE YOUR CODE HERE */
console.log(carsForSale)
// or
console.log(carsForSale[0])
console.log(carsForSale[1])
console.log(carsForSale[2])
// or
console.log(carsForSale[0], carsForSale[1], carsForSale[2])
/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/