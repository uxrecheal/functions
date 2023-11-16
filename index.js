// function addNumbers(a,b){
// return a+b
// }
// console.log(addNumbers(2,3))
 
// let person = {
//     name:"Rashid",
//     age: 24,
//     gender:"male",
// }
// console.log(person)

// function printPerson(personObj){
//    console.log("Name: " + personObj.name);
//     console.log("Age: " + personObj.age);
//     console.log("Gender: " + personObj.gender) 
// }
// printPerson(person)

// function ageIncrement(personObj){
//  return personObj.age++   
// }
// ageIncrement(person)
// console.log(ageIncrement(person))

function cloneObject(person){
   return{...person} 
}

let originalPerson={
    name:"Rashid",
    age: 24,
    gender:"male"
}
 




// let calculator={
//     add: function(a,b){
//         return a+b
//     },
//     subtract: function (a,b){
//         return a-b
//     },
// }
//  const resultAdd= calculator.add(2,6)
//  const resultSubtract=calculator.subtract(7,4)

//  console.log(resultAdd)
//  console.log(resultSubtract)


 function printobject(personObj){
for (let key in personObj){
    if (personObj.property(key)){
        console.log(`${key}:$(personObj[key]}`)
    }
}

 }

console,log(personObj)




 function deleteproperty(){
   name:"Rashid" 
 }
de