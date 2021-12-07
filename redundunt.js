function redundant(str) {
    return function newStr() {
      return str
    }
  }
  
  // we need to create function that change new str into our string(str),
  // as I understood ^-^
  const f1 = redundant("apple")
  const f2 = redundant("pear")
  const f3 = redundant("")
  
  console.log(f1())