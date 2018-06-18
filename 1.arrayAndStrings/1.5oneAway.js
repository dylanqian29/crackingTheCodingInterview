// time: O(n)
// additional space: O(n)

function oneAway(str1, str2) {
  if (!str1 || !str2 || Math.abs(str1.length - str2.length) >= 2) {
    return false
  }

  let map = new Map();
  for (let i = 0; i < str1.length; i++) {
    map.set(str1[i], map.get(str1[i]) + 1 || 1)
  }
  let counter = 0
  for (let i = 0; i < str2.length; i++) {
    if (map.get(str2[i]) === 1) {
      map.delete(str2[i])
    } else if (map.get(str2[i])) {
      map.get(str2[i], map.get(str2[i]) - 1)
    } else {
      counter++
    }
  }
  return counter + map.size <= 2
}