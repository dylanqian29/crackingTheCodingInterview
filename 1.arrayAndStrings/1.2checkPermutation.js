// time: O(n+m)
// space: O(n)

function checkPermutation(str1, str2) {

  if (str1.length === 0 || str1.length !== str2.length) {
    return false
  }

  let storage = new Map()
  for (let i = 0; i < str1.length; i++) {
    storage.set(str1[i], storage.get(str1[i]) + 1 || 1)
  }
  for (let j = 0; j < str2.length; j++) {
    if (!storage.get(str2[j])) {
      return false
    }
    if (storage.get(str2[j]) === 1) {
      storage.delete(str2[j])
    } else {
      storage.set(str2[j], storage.get(str2[j]) - 1)
    }
  }
  return storage.size === 0
}
