// Task is to create function that can give us results down below. 

function sum(num1) {
    return function addOne(num2) {
      return num1 + num2
    }
  }
// We see sum(1)(2) so it means that there is function inside the function.
  console.log(sum(1)(2)) 
  const addOne = sum(1)
  console.log(addOne(2)) 
  const addTen = sum(10)
  console.log(addTen(2)) 
  console.log(addOne(4)) 
  console.log(addTen(10)) 
  