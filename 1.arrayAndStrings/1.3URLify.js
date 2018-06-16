// time: O(n)
// additional space: O(n)

function urlify(str) {
  if (!str || str.length === 0) {
    return false
  }

  return str.split(' ').join('%20')
}