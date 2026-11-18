export interface TimelineEntry {
  name: string;
  period: string;
  year: string;
  highlight: string;
  image?: string;
}

type TimelineDesign = 'magazine' | 'modern';

const PALETTES = {
  magazine: { canvas:'#f5f0e6', card:'#e9e0d1', ink:'#251e19', muted:'#74695a', accent:'#873c22', line:'#d5c8b4', photo:'#fffaf1' },
  modern: { canvas:'#edf2f8', card:'#ffffff', ink:'#1b2b40', muted:'#566a83', accent:'#157c78', line:'#c8d5e4', photo:'#e4ebf4' },
} as const;

function fitText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string {
  if (ctx.measureText(text).width <= maxWidth) return text;
  let truncated = text;
  while (truncated.length > 1 && ctx.measureText(`${truncated}…`).width > maxWidth) truncated = truncated.slice(0, -1);
  return `${truncated}…`;
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number, maxLines: number): string[] {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = '';
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (ctx.measureText(next).width <= maxWidth || !line) line = next;
    else { lines.push(line); line = word; }
    if (lines.length === maxLines) break;
  }
  if (line && lines.length < maxLines) lines.push(line);
  const consumed = lines.join(' ').split(/\s+/).filter(Boolean).length;
  if (consumed < words.length && lines.length) lines[lines.length - 1] = fitText(ctx, `${lines.at(-1)}…`, maxWidth);
  return lines;
}

async function loadImage(url?: string): Promise<HTMLImageElement | null> {
  if (!url) return null;
  const image = new Image();
  image.crossOrigin = 'anonymous';
  image.src = url;
  try { await image.decode(); return image.naturalWidth ? image : null; }
  catch { return null; }
}

export async function renderTimeline(entries: TimelineEntry[], title: string, site: string, design: TimelineDesign, releaseLabel: string): Promise<Blob> {
  const palette = PALETTES[design];
  const columns = 3;
  const margin = 34;
  const gap = 14;
  const cardWidth = (1200 - margin * 2 - gap * (columns - 1)) / columns;
  const cardHeight = 160;
  const top = 132;
  const rowGap = 14;
  const rows = Math.ceil(entries.length / columns);
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = top + rows * (cardHeight + rowGap) + 42;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas unavailable');

  ctx.fillStyle = palette.canvas;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = palette.accent;
  ctx.fillRect(margin, 28, 42, 4);
  ctx.font = '600 16px system-ui';
  ctx.fillText(fitText(ctx, site, 1120), margin, 56);
  ctx.fillStyle = palette.ink;
  ctx.font = 'bold 36px system-ui';
  ctx.fillText(fitText(ctx, title, 1120), margin, 104);

  for (let offset = 0; offset < entries.length; offset += 9) {
    await Promise.all(entries.slice(offset, offset + 9).map(async (entry, localIndex) => {
      const index = offset + localIndex;
      const column = index % columns;
      const row = Math.floor(index / columns);
      const x = margin + column * (cardWidth + gap);
      const y = top + row * (cardHeight + rowGap);
      const image = await loadImage(entry.image);

      ctx.fillStyle = palette.card;
      ctx.fillRect(x, y, cardWidth, cardHeight);
      ctx.fillStyle = palette.accent;
      ctx.fillRect(x, y, 4, cardHeight);
      const imageBox = { x:x + 14, y:y + 14, width:78, height:132 };
      if (image) {
        ctx.fillStyle = palette.photo;
        ctx.fillRect(imageBox.x, imageBox.y, imageBox.width, imageBox.height);
        const scale = Math.min((imageBox.width - 8) / image.naturalWidth, (imageBox.height - 8) / image.naturalHeight);
        const width = image.naturalWidth * scale;
        const height = image.naturalHeight * scale;
        ctx.drawImage(image, imageBox.x + (imageBox.width - width) / 2, imageBox.y + (imageBox.height - height) / 2, width, height);
      }

      const textX = x + (image ? 108 : 18);
      const maxWidth = x + cardWidth - 18 - textX;
      ctx.fillStyle = palette.accent;
      ctx.font = '600 14px system-ui';
      ctx.fillText(fitText(ctx, entry.period, maxWidth), textX, y + 34);
      ctx.fillStyle = palette.ink;
      ctx.font = 'bold 19px system-ui';
      ctx.fillText(fitText(ctx, entry.name, maxWidth), textX, y + 64);
      ctx.fillStyle = palette.muted;
      ctx.font = '600 12px system-ui';
      ctx.fillText(fitText(ctx, `${releaseLabel}: ${entry.year}`, maxWidth), textX, y + 88);
      ctx.font = '12px system-ui';
      const featureLines = wrapText(ctx, entry.highlight, maxWidth, 3);
      featureLines.forEach((line, lineIndex) => ctx.fillText(line, textX, y + 110 + lineIndex * 16));
    }));
  }

  ctx.fillStyle = palette.muted;
  ctx.font = '11px system-ui';
  ctx.fillText(location.host, margin, canvas.height - 14);
  const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, 'image/png'));
  if (!blob) throw new Error('PNG unavailable');
  return blob;
}

export async function downloadTimeline(blob: Blob): Promise<void> {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'mobile-history-timeline.png';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}
