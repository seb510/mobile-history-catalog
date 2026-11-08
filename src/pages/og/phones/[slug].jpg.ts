import type { APIRoute } from 'astro';
import path from 'node:path';
import sharp from 'sharp';
import { getPhonesForLocale, slugOf } from '../../../lib/phones';

// Shared by all locales: these are static JPEG derivatives, never runtime image requests.
export async function getStaticPaths() {
  const phones = await getPhonesForLocale('uk');
  return phones.filter(phone => phone.data.image?.startsWith('/images/')).map(phone => ({
    params: { slug: slugOf(phone) },
    props: { image: phone.data.image!, credit: phone.data.imageCredit || '' },
  }));
}
export const GET: APIRoute = async ({ props }) => {
  const { image, credit } = props as { image: string; credit: string };
  const publicRoot = path.resolve('public');
  const source = path.resolve(publicRoot, image.slice(1));
  if (!source.startsWith(publicRoot + path.sep)) throw new Error('Invalid social image path');
  const jpeg = await sharp(source).rotate().resize(1200, 630, {
    fit: 'contain', background: '#f7f2e8',
  }).flatten({ background: '#f7f2e8' }).jpeg({ quality: 88, mozjpeg: true })
    .withExif({ IFD0: { Copyright: credit } }).toBuffer();
  return new Response(new Uint8Array(jpeg), { headers: { 'Content-Type': 'image/jpeg' } });
};
