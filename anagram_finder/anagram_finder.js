const AnagramFinder = function (word) {
    this.word = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const lowerCaseWord = this.word.toLowerCase()
    const splitWord = lowerCaseWord.split('').sort().toString();
    const results = otherWords.filter((otherWord) => {
        let otherWordAsArray = otherWord.toLowerCase().split('');
        let sortedOtherWord = otherWordAsArray.sort();
        let sortedOtherWordAsString = sortedOtherWord.toString();

        if (lowerCaseWord === otherWord.toLowerCase()){
            return false
        } else {
            return (sortedOtherWordAsString === splitWord);
        }
    })
    return results;
}

module.exports = AnagramFinder;

anagramFinder = new AnagramFinder('AcT');
console.log(anagramFinder.findAnagrams(['caT', 'cAt', 'CAT']));