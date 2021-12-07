function printAfter(print) {
    console.log('Hello, World')
    return print()
  }
  // we have const print which function creating only "Elon Mask", it doesn't depend on parameter of this function. 
  //so we need only to add console.log("Hello, world") in function printAfter. And function print here is as argument. I guess ^-^.

  const print = () => console.log('Elon Musk')
  printAfter(print)
 