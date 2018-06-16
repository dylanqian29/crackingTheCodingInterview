// Time: O(n)
// space: O(n)

function isUnique(str){
  if (str.length ===0 || !str){
    return false;
  }
  let set = new Set();

  for (let i = 0; i<str.length;i++){
    if (set.has(str[i])) {
      return false;
    } else {
      set.add(str[i])
    }
  }

  return true
}
