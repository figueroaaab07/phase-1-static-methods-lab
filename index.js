class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    const lowerWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return string.split(' ').map((word, index) => {
      if (index !== 0 && lowerWords.includes(word)) {
        return word.toLowerCase();
      } else {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
    }).join(' ');  
  }
}