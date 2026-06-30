//1
let name = "mykola";
let word = "vechir";

if (name.length >= 1 && word.length >= 1) {
    console.log("Обидва поля заповнені",)
} else {
    console.log("Не всі поля заповнені")
}
//2
let number = 6;
let age = 5;
let sum = number + age;
if (sum <= 10) {
    console.log("Сума менша або дорівнює 10")
} else {
    console.log("Сума більша за 10")
}
//3 
let fact = "JavaScript very easy language";

if (fact.includes("JavaScript")) {
    console.log(true)
} else {
    console.log(false)
}
//4
let number2 = 16;

if (number2 >= 10 && number2 <= 20) {
    console.log("Число входить в діапазон від 10 до 20")
} else {
    console.log("Число не входить в діапазон від 10 до 20")
}
//5
let user = {
    name: "mykola",
    email: "dobriyvechir@gmail.com",
    password: "1234567"
}

if (user.name.length >= 3 && user.email.includes("@") && user.password.length >= 6) {
    console.log(true)
} else {
    console.log(false)
}
