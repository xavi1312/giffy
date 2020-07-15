export function setAligment({ aligment }) {
  switch (aligment) {
    case 'center':
      return 'margin: 0 auto;';
    case 'right':
      return 'margin-left: auto;';
    default:
      return;
  }
}
