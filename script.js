
// // // function gradeChecher() {
// // //   const mark = parseInt(document.getElementById("mark").value );
  
// // //   const result = document.getElementById("result")
// // //  let grade =  ''
// // //  let color = ''
// // //   if (mark >= 80) {
// // //     grade = 'exllent'
// // //     color = "green"
// // //   } else if(mark >= 60) {
// // //     grade = 'good'
// // //     color = "yellow"
// // //   }else if(mark >= 50) {
// // //     grade = 'avarage'
// // //     color = "orange"
// // //   } else {
// // //     grade = 'fail'
// // //     color = "red"
// // //   }
  
// // //    result.innerText = grade;
// // //    result.style.color = color;
// // //    result.style.backgroundColor = "black"
// // // }

// // for (let i = 0; i <= 20; i++) {
// //  if (i % 3 !==0) {
// //     console.log(i)
// //  }
// // }


// //  let  numbers =[4,5,6,7,8,9,4,3]
// // function sumEvenNumber (arr){
// //     let sum = 0;
// //   for (let num of numbers) {
// //     if(num % 2 !==0) {
// //         sum += num;
// //     }
// //   }
// //   return sum;
// // }

// // console.log(sumEvenNumber(numbers));

// // document.getElementById("textinput").addEventListener("input", function (){
// //     const currntLength = this.value.length;

// //     document.getElementById("charCount").innerText = currntLength;
// // })

// // document.getElementById("btn").addEventListener("click", function () {
// //   alert("Button clicked");
// // });

// document.getElementById("addBtn").addEventListener('click', function () {
//   const taskText = document.getElementById('taskInput').value ;

//   if(taskText.trim() === "")return;

//   const li = document.createElement("li")
//   li.innerText = taskText;

//   const delBtn = document.createElement("button");
//   delBtn.addEventListener("click", function (){
//     li.remove();
//   });

//   li.appendChild(delBtn);

//   document.getElementById("taskList").appendChild(li)

//   document.getElementById("tasInput").value = "";
// });


document.getElementById("addBtn").addEventListener("click", function () {
  const taskText = document.getElementById("taskInput").value 
  if(taskText.trim() === "")return;
  const li = document.createElement("li")
  li.innerText = taskText;

  const delBtn = document.createElement("button");
  delBtn.addEventListener("click", function() {
    li.remove()
  });
  li.appendChild(delBtn)
  document.getElementById("taskList").appendChild(li);
  document.getElementById("taskInput").value = "";
})


// function add(a,b) {
//   return a + b;
// }
// console.log(add(3,7))

// function multyPly (a,b) {
// return a * b;
// }

// console.log(multyPly(26000,14))

// let name = "ali";
// function greet(){
//   let name = "sara"
//   console.log(name);
// }
// greet();
// console.log(name);

// document.getElementById("btn").addEventListener("click",function (){
//   alert("hello javScript");
// });


// function saveName() {
//   const name = document.getElementById("inputName").value;
//   localStorage.setItem("username", name);
//   showName()
// }

// function showName() {
//   const savedName = localStorage.getItem("username")
//   if (savedName) {
//     document.getElementById("displayName").innerText = "welcome: " + savedName;
//   }
// }

// showName()


// // let square = numbers.map(function(num){
// //   return num * num
// // })

// // console.log(square);

// // let squredd = numbers.map((num) => num * num)
// // console.log(squredd);


// // const fruits = ['apple', 'banana', 'mango']

// // let capitals = fruits.map((fruit) => fruit.toUpperCase())

// // console.log(capitals);

// // const names = ['asad','rahul', 'faiz']

// // let mrNames = names.map(nam => "Mr " + nam);
// // console.log(mrNames)


// // const numbers = [5,12,8,130,44]

// // const bigNum = numbers.filter(num => num > 10);
// // console.log(bigNum);

// const lessName = ['cat', 'dog', 'elephant', 'rat'];

// const numes  =  lessName.filter(num => num.length <= 3);
// console.log(numes);

// const realNum = [10,15,20,25,30]

// const evenNumbers = realNum.filter(evennum => evennum % 2 !==0)
// console.log(evenNumbers);

const numbers = [1,2,3,4,5] 

const totSum = numbers.reduce((acc,num) => acc * num) 

console.log(totSum);