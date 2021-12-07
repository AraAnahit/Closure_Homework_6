function QuadraticEvenSum(arr) {
    let sum = 0;
      let i = 0;
  
    while (i < arr.length) {
      if (arr[i] % 2 === 0) {
        sum += arr[i] ** 2
      } 
      i++;
    }
  
    return sum
  }

  console.log(QuadraticEvenSum([5, 2, 6]))