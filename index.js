// 1- create a function takes a parameters name , age , address and returns an object with these properties 
function userInfo(name,age,address){
    return {name,age,address}
}
console.log(userInfo("sama",22,{country:"Egypt",city:"cairo"}))

// problem 2:
var person=[
    {name:'Mohamed',age:20},
    {name:'Ahmed',age:20},
    {name:'Aly',age:20}
    ];
var box=''
for(var i=0; i<person.length;i++){
    box+=`<h2>name:${person[i].name}</h2> 
    <p>age:${person[i].age}</p>`
}
document.getElementById("wrapper").innerHTML=box
// problem 3:
var arrNum=[]
for(var i=0;i<5;i++){
    var numbers=+window.prompt("please enter numbers:")
    arrNum.push(numbers)
}
console.log(Math.min(...arrNum))
// 4- Reverse a String
var userName="sama"
var arrayOfString=[]
for(var i=userName.length-1;i>=0;i--){
    arrayOfString.push(userName.charAt(i))
}
console.log(arrayOfString.join(''))
// 5- Counting Characters in a String
var text=window.prompt("please enter text");
var c=0
for(var i=0;i<text.length;i++){
    if(text.charAt(i)=='o'||text.charAt(i)=='a'||text.charAt(i)=='u'||text.charAt(i)=='i'||text.charAt(i)=='e')
    {
        c++
    }
}
console.log(c)
// 6- Reversing an Array
var orignalArray=[1,2,3,4,5,6]
var reversedArray=[]
for(var i=orignalArray.length-1;i>=0;i--){
    reversedArray.push(orignalArray[i])
}
console.log(reversedArray)
// 7- Average of Numbers
var avg=0
for(var i=0;i<5;i++){
    var num=+prompt("please enter number")
    avg+=num

}
console.log(avg/5);
// 8- Array of Objects Filter:
var students = [
    { name: "Ahmed", score: 85 },
    { name: "Sara", score: 68 },
    { name: "Omar", score: 75 },
    { name: "Lina", score: 90 }
  ];

for(var i=0;i<students.length;i++){
    if(students[i].score>70){
        console.log(students[i])
    }
}  