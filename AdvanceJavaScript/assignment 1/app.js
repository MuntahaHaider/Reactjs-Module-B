
// Q:01

let name  = "Muntaha Haider"
let city = "Karachi"
let email = "muntahaabcdefgh@gmail.com"
let age = 20
let occupation = "Web Developer"
let phone = "03123456783"
let institute = "Jawan Pakistan"
let education = "Intermediate"
document.write(`<h1>Output</h1><h3> Name: ${name} </br> Age: ${age} </br> Occupation: ${occupation}</br> Email: <a href="">${email}</a> </br> Phone: ${phone} </br> Institute Name: ${institute} </br> Education: ${education}</h3><hr>`)

// Q:02
const students = "Name"
let array = ["Jhon","Don","Phon"]
const marks = 100
let random = Math.random(50)
let obtained = [55,69,78]
// const percentage = (obtained/random)*100
document.write(`<h1>Mark Sheet</h1>`)
document.write(`Name Marks Score Percentage <br>`)

for(let i = 0 ; i<=array.length-1; i++){
    document.write(`<table>
    <tr style="padding: 10px; margin: 10px;">${array[i]} </tr> 
    <tr>${marks} </tr>
    <tr>${obtained[i]} </tr> 
    <tr> ${(obtained[i]/marks)*100}% </tr> 
    </table>`)
}

// Q:03

// Declare a global variable using var
// var a = "Muhammad";
// var abc;
// var a = "Faraz";
// console.log(a)
// // function scope 
// function abc(){
//     var a = "Faraz";
//     console.log(a)
// }
// abc()

// // Declare a global variable using let
// let a = "Muhammad";
// let abc;
// let a = "Faraz";
// console.log(a)
// // function scope 
// function abc(){
//     let a = "Faraz";
//     console.log(a)
// }
// abc()

// // Declare a global variable using const
// const a = "Muhammad";
// // const abc;
// const a = "Faraz";
// console.log(a)
// // function scope 
// function abc(){
//     const a = "Faraz";
//     console.log(a)
// }
// abc()