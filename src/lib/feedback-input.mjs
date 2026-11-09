// Text is never interpreted as HTML, JavaScript, SQL or a template.
// This check rejects executable markup as an additional input policy, not a sandbox.
export function hasFeedbackMarkup(value) {
  const normalized = value.normalize('NFKC').replace(/[\u200b-\u200d\ufeff]/g, '')
    .replace(/&#(x[\da-f]+|\d+);?/gi, (_, number) => {
      const code = number[0].toLowerCase()==='x' ? parseInt(number.slice(1),16) : parseInt(number,10);
      return code <= 0x10ffff ? String.fromCodePoint(code) : '';
    })
    .replace(/&(lt|gt|colon|tab|newline);/gi, (_, entity) => ({lt:'<',gt:'>',colon:':',tab:'\t',newline:'\n'})[entity.toLowerCase()]);
  return /<\/?[a-z][^>]*>|(?:java|vb)script\s*:|data\s*:\s*(?:text\/html|application\/(?:java|ecma)script)|\bon[a-z]+\s*=/i.test(normalized);
}
