const IsogramFinder = function (word) {
    this.word = word.split('');
}

IsogramFinder.prototype.isIsogram = function () {
    let uniqueLetters = [];
    const result = this.word.every((letter) => {
        if (uniqueLetters.includes(letter)){
            return false
        } else {
            uniqueLetters.push(letter);
            return true;
        }
    })
    return result;
}

module.exports = IsogramFinder;
