interface TimelineEntry { name: string; period: string; image?: string; credit?: string }

export async function downloadTimeline(entries: TimelineEntry[], title: string, site: string) {
  const canvas = document.createElement('canvas');
  canvas.width = 960;
  canvas.height = 116 + Math.ceil(entries.length / 3) * 146;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas unavailable');
  ctx.fillStyle = '#f5f0e6';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#873c22';
  ctx.font = '600 16px system-ui';
  ctx.fillText(site, 32, 34);
  ctx.fillStyle = '#251e19';
  ctx.font = 'bold 32px system-ui';
  ctx.fillText(title, 32, 76, 896);

  for (let offset = 0; offset < entries.length; offset += 9) {
    await Promise.all(entries.slice(offset, offset + 9).map(async ({ name, period, image, credit }, index) => {
      const position = offset + index;
      const x = 32 + position % 3 * 304;
      const y = 100 + Math.floor(position / 3) * 146;
      ctx.fillStyle = '#e9e0d1';
      ctx.fillRect(x, y, 288, 132);
      const photo = new Image();
      if (image) {
        photo.crossOrigin = 'anonymous';
        photo.src = image;
        await photo.decode().catch(() => {});
      }
      if (photo.naturalWidth) {
        const scale = Math.min(60 / photo.naturalWidth, 84 / photo.naturalHeight);
        const width = photo.naturalWidth * scale;
        const height = photo.naturalHeight * scale;
        ctx.drawImage(photo, x + 12 + (60 - width) / 2, y + 12 + (84 - height) / 2, width, height);
      }
      const textX = x + (photo.naturalWidth ? 84 : 12);
      const maxWidth = x + 276 - textX;
      ctx.fillStyle = '#873c22';
      ctx.font = '600 14px system-ui';
      ctx.fillText(period, textX, y + 37, maxWidth);
      ctx.fillStyle = '#251e19';
      ctx.font = 'bold 17px system-ui';
      ctx.fillText(name, textX, y + 63, maxWidth);
      if (photo.naturalWidth && credit) {
        ctx.font = '12px system-ui';
        ctx.fillText(credit, x + 12, y + 116, 264);
      }
    }));
  }
  const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, 'image/png'));
  if (!blob) throw new Error('PNG unavailable');
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'mobile-history-timeline.png';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}
