import { generateMnemonicVariations } from '../generate-mnemonic-variations';

test('test utils/generate-mnemonic-variations.generateMnemonicVariations', () => {
  let variations = generateMnemonicVariations('foo');

  expect(variations.length).toBe(5);

  variations = generateMnemonicVariations('foo', { variations: 3 });

  expect(variations.length).toBe(3);
});
