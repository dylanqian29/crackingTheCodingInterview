var Stack = function () {
  this._storage = {};
  this._size = 0;
};


Stack.prototype.push = function (value) {
  this._storage[this._size] = value;
  this._size++;
};

Stack.prototype.pop = function () {
  this._size && this._size--;
  var result = this._storage[this._size];

  delete this._storage[this._size];

  return result;
};

Stack.prototype.size = function () {
  return this._size;
};

const towerOfHanoi = (n) => {
  let tower0 = new Stack()
  for (let i = n; i > 0; i--) {
    tower0.push(i)
  }
  let tower1 = new Stack()
  let tower2 = new Stack()
  const moveDisks = (n, from, to, via) => {
    if (n === 0) return;
    moveDisks(n - 1, from, via, to)
    to.push(from.pop())
    moveDisks(n - 1, via, to, from)
  }
  moveDisks(n, tower0, tower2, tower1)
  return [tower0, tower1, tower2]
}

towerOfHanoi(3)