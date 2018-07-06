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