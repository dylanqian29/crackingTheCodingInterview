const permutationWithoutDups = (string) =>{
  let end = []
  const getPermutation= (result,index) => {
    if (string.length ===index){
      end.push(result)
      return;
    }

    if (index ===0 ){
      getPermutation(string[0],index+1)
    } else {
      for (let i = 0; i <= result.length; i++){
        getPermutation(result.slice(0,i) + string[index] + result.slice(i,result.length), index+1)
      }
    }
  }

  getPermutation('',0)
  return end

}

permutationWithoutDups('abcd')