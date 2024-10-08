// Declare the cats variable in the global scope
let cats = ["Milo", "Otis", "Garfield"];

// Function to append a cat to the end of the cats array (destructive)
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Function to prepend a cat to the beginning of the cats array (destructive)
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Function to remove the last cat from the cats array (destructive)
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Function to remove the first cat from the cats array (destructive)
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Function to append a cat and return a new array (non-destructive)
function appendCat(name) {
    return [...cats, name]; // Return a new array with the new cat
}

// Function to prepend a cat and return a new array (non-destructive)
function prependCat(name) {
    return [name, ...cats]; // Return a new array with the new cat at the beginning
}

// Function to remove the last cat and return a new array (non-destructive)
function removeLastCat() {
    return cats.slice(0, -1); // Return a new array without the last cat
}

// Function to remove the first cat and return a new array (non-destructive)
function removeFirstCat() {
    return cats.slice(1); // Return a new array without the first cat
}
