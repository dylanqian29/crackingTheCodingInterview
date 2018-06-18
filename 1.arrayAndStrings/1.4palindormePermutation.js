// time: O(n)
// additional space: O(n)

function palindromePermutation(str) {
  if (str.length === 0 || !str) {
    return false
  }
  let set = new Set()
  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i].toLowerCase())) {
      set.delete(str[i].toLowerCase())
    } else {
      if (str[i] !== " ") {
        set.add(str[i].toLowerCase())
      }
    }
  }
  console.log(set)
  return set.size <= 1
}
