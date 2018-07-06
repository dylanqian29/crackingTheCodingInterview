function tripleStep(k){
  let counts = 0


  let recursion = function(k){
    if (k===0){
      counts++
      return;
    }
    
    recursion(k-1)
    recursion(k-2)
    recursion(k-3)

  }

  return counts


}


//for different steps 
// function tripleStep(k, steps) {
//   let counts = 0


//   let recursion = function (k) {
//     if (k === 0) {
//       counts++
//       return;
//     }
//     if (k < 0) {
//       return
//     }
//     steps.forEach(step => {
//       recursion(k - step)
//     })

//   }
//   recursion(k, steps)
//   return counts
// }

// tripleStep(4, [1, 2])