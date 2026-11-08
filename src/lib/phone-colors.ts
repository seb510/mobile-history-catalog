// Illustrative UI swatches, not manufacturer colour measurements or Pantone values.
// Keep the original name visible; unrecognised names get no invented swatch.
const SPECIAL: [RegExp, string][] = [
  [/xpress-on/i, 'linear-gradient(135deg,#708ca6 0 25%,#d9c8a2 25% 50%,#9a5147 50% 75%,#6c8064 75%)'],
  [/brown with gold|коричнев.*золот|коричнев.*золотист/i, 'linear-gradient(135deg,#664c3c 0 75%,#c3a464 75%)'],
  [/sierra blue/i, '#a4b9ca'], [/really blue/i, '#2852b4'],
  [/blue tinted silver/i, '#b2c3ce'], [/pebble blue/i, '#536c87'],
  [/petrol black/i, '#293e40'], [/space navy|abyss blue/i, '#243447'],
  [/carbon blue/i, '#34485b'], [/indigo|індиго|индиго/i, '#444d79'],
  [/wintergreen/i, '#c3d5ba'], [/luminous green|lime|лайм/i, '#a6bc58'],
  [/olive/i, '#7e8362'], [/green shadow/i, '#778d80'],
  [/peony/i, '#e5a0b4'], [/violet shadow/i, '#82798c'],
  [/iris purple/i, '#8d85ae'], [/champagne/i, '#cbbd9d'],
  [/warm titanium|теплий титан|тёплый титан/i, '#b5a38c'],
  [/canyon/i, '#ae7560'], [/cocoa|amber brown/i, '#795c4b'],
  [/burgundy|beaujolais|garnet|гранат|бордов/i, '#813d4a'],
  [/glacier|fog|aluminium haze/i, '#c8d1d3'], [/porcelain|cream/i, '#e6dfd0'],
  [/aqua|cyan|бірюз|бирюз/i, '#70b6bd'],
  [/light blue|світло-син|светло-син|блакит|голуб|arctic blue/i, '#8cb9d1'],
  [/graphite|графіт|графит/i, '#515659'],
  [/titan|титан/i, '#818589'],
  [/silver|сріб|сереб/i, 'linear-gradient(135deg,#a7adb2,#e2e5e7 48%,#a1a8ae)'],
  [/gold|золот/i, '#c4a66b'],
  [/black|чорн|чёрн|черн|obsidian/i, '#272a2d'],
  [/white|білий|белый/i, '#f1f0eb'],
  [/dark blue|сапфір|сапфир|sapphire blue|orient blue/i, '#2d4d76'],
  [/blue|синій|синий/i, '#527ca5'],
  [/green|зелений|зелёный/i, '#71977b'],
  [/purple|violet|фіолет|фиолет|пурпур/i, '#927aa7'],
  [/magenta/i, '#b6548a'], [/pink|рожев|розов/i, '#d7a0b2'],
  [/orange|оранж|помаранч/i, '#dc8a43'],
  [/red|червон|красн|ruby|рубін|рубин/i, '#b24b46'],
  [/yellow|жовт|жёлт/i, '#dbbe54'],
  [/grey|gray|сірий|серый/i, '#93999c'],
];

export function phoneColorSwatch(name: string): string | undefined {
  return SPECIAL.find(([pattern]) => pattern.test(name))?.[1];
}
