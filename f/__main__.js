const buzzphrase = require('buzzphrase')
/**
* generate and return a buzzphrase
* @param {string} name Who you're saying hello to
* @returns {string}
*/
module.exports = async (count = 1, context) => {
  return buzzphrase.getPhrase(count)
}