const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {

  const result = this.alphabet.every((letter) => {
    let phraseToCheck = this.phrase.toLowerCase();
    return phraseToCheck.includes(letter);
  })
  return result;

}

module.exports = PangramFinder;

// console.log('abc'.includes('a'));
