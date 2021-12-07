function add_suffix(suffix) {
    return function change (given_word) {
      return given_word+suffix
    }
  }
  //Need to do the same with redundant but add suffix ly or less  but do it with anonymous function.
  add_ly = add_suffix('ly')
  console.log(add_ly('hopeless')) 
  console.log(add_ly('total')) 
  add_less = add_suffix('less')
  console.log(add_less('fear')) 
  console.log(add_less('ruth')) 