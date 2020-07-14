export const BLACk_COLOR = { cssVar: 'var(--black-color)', color: '#282c34' };
export const PRIMARY_COLOR = {
  cssVar: 'var(--primary-color)',
  color: '#fff1bc',
};

// Darken and Lighten a color
export function Lighten(color, amt = 0) {
  return LightenDarkenColor(color, amt);
}
export function Darken(color, amt = 0) {
  amt *= -1;
  return LightenDarkenColor(color, amt);
}
function removePound(color) {
  let usePound = false;
  let newColor = color;

  if (color[0] === '#') {
    newColor = color.slice(1);
    usePound = true;
  }

  return [usePound, newColor];
}
function LightenDarkenColor(col, amt) {
  const [usePound, color] = removePound(col);

  const num = parseInt(color, 16);

  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
}
