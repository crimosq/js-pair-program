// before delcare a function, declare an integer array, we declare a function that transform ex multiply each integer 
// declare a new array called constnewarray 
// .foreach each value in eadch array, 

let arrayOfNum = [1,2,3,4,5]  
    function multiplyByTwo(array) {
        let newArray = []
        array.forEach((item)=> {
            newArray.push(item * 2)
        })

        return newArray

    } 

    console.log(multiplyByTwo(arrayOfNum))
    