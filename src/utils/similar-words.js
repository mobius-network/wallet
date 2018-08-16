import bip39 from 'react-native-bip39';

export default function similarWords(
  mnemonic,
  {
    language = 'EN',
    variations = 5, // How many strings to generate
    wordVariations = 6, // How many words to change in each string
  } = {}
) {
  const wordlist = bip39.wordlists[language];
  const result = [];

  for (let i = 0; i < variations; i++) {
    const variation = mnemonic.split(' ');

    for (let n = 0; n < wordVariations; n++) {
      const replacementWordIndex = Math.floor(Math.random() * wordlist.length);
      const replacementWord = wordlist[replacementWordIndex];

      // Word could be replaced twice, not a problem
      const replacedWordIndex = Math.floor(Math.random() * variation.length);

      variation[replacedWordIndex] = replacementWord;
    }

    result.push(variation.join(' '));
  }

  return result;
}
