function uniq_check(arr) {
    let Uniq = true
  
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
        Uniq = false
      }
    }
  
    if(Uniq==true) {
        return "Unique"
     }else{
         return "Not unique"
        }
     } 
  
  console.log(uniq_check([10, 25, 4, 4, 3]))