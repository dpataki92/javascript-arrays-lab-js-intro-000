var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here


// Add your functions and code here
function destructivelyAppendKitten (name) {
  kittens.push(kitten);
}

function destructivelyPrependKitten (name) {
  kittens.unshift(kitten),
}

function destructivelyRemoveLastKitten () {
  kittens.pop();
}

function destructivelyRemoveFirstKitten () {
  kittens.shift();
}

function appendKitten (name) {
  return [...kittens, kitten];
}

function prependKitten (name) {
  return [name, ...kittens];
}

function removeLastKitten () {
  return kittens.slice(0, kittens.length-1);
}

function removeFirstKitten () {
  return kittens.slice(1);
}
