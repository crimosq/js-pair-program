

function createMult(arg) {
    return function (arg2){
      let product =  arg * arg2 
      return product
    }

}


 const multiplyByFive = createMult(5); 
 
 console.log(multiplyByFive(10)); // 50 
console.log(multiplyByFive(7)); // 35
