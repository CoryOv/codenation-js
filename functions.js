const holidayDestination1 = () => {             // = () => {} is standard function syntax
    console.log("Yay! I'm going on holiday!")
}
holidayDestination1()       //must call the function in order to perform its purpose

const sayHello = (myName, drink) => {        //adding parameters to use specific things in desired places
    console.log(`Hello there. My name is ${myName}. Would you like a ${drink}?`)
}
sayHello("General Kenobi", "Pepsi")     //make sure to include the parameters when calling the function

const holidayDestination2 = (country, month) => {
    console.log(`Yay! I'm going on holiday to ${country} in ${month}. I can't wait!`)
}
holidayDestination2("Paris", "December")

const inventory = (productCode, departmentName, quantity) => {      //can add as many parameters as required
    console.log(`${quantity} of ${productCode} sold from ${departmentName} department, need to update stock by ${quantity}`)
}
inventory(61224, "fruit", 65)

const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(5, 6))