const brandSpellings: Record<string, string> = {
  нокіа: 'nokia', нокиа: 'nokia',
  соні: 'sony', сони: 'sony',
  ерікссон: 'ericsson', эрикссон: 'ericsson',
  самсунг: 'samsung',
  сіменс: 'siemens', сименс: 'siemens',
  моторола: 'motorola',
  айфон: 'iphone',
};

const modelLetters: Record<string, string> = {
  а: 'a', в: 'b', е: 'e', к: 'k', м: 'm', н: 'n',
  о: 'o', р: 'p', с: 'c', т: 't', х: 'x', і: 'i',
};

export function normalizePhoneSearch(value: string): string {
  return value.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()
    .replace(/(^| )(\p{L}) +(?=\d)/gu, '$1$2')
    .split(' ')
    .map(word => /\d/.test(word)
      ? word.replace(/\p{Script=Cyrillic}/gu, letter => modelLetters[letter] ?? letter)
      : Object.hasOwn(brandSpellings, word) ? brandSpellings[word] : word)
    .join(' ');
}

export function matchesPhoneSearch(terms: string[], normalizedText: string): boolean {
  return terms.every(term => normalizedText.includes(term)
    || (/\p{L}/u.test(term) && /\d/.test(term) && normalizedText.replaceAll(' ', '').includes(term)));
}
