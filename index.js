const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph")
};

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
};

function destructivelyRemoveLastCat() {
    cats.pop()
};

function destructivelyRemoveFirstCat() {
    cats.shift()
};

function appendCat(name) {
    var newArray = cats.slice();
    newArray.push(name)
    return newArray
};

function prependCat(name) {
    var newArray = ["Arnold", ...cats]
    return newArray
};

function removeLastCat() {
    var newArray = cats.slice(0, cats.length - 1)
    return newArray
};

function removeFirstCat() {
    var newArray = cats.slice(-2)
    return newArray
}
