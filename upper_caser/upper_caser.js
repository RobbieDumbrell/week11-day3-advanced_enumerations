const UpperCaser = function (words) {
    this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
    const results = this.words.map(function (word) {
        return word.toUpperCase();
    })
    return results;
}

module.exports = UpperCaser;
