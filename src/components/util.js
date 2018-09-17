export const POSITIONS = [
  'top left',
  'top center',
  'top right',
  'bottom left',
  'bottom center',
  'bottom right',
  'left center',
  'right center',
]

/**
 * Set QRCode style to dst from src
 * @param {*} dst map
 * @param {*} src props map
 */
export function SetQrStyle(dst, src) {
  dst['qrsize'] = src.qrsize > 0 ?  src.qrsize : 128;
  dst['qrvoffset'] = src.qrvoffset >= 0 ? src.qrvoffset : 20;
  dst['qrpadding'] = src.qrpadding ? src.qrpadding : '1em';
  dst['qrposition'] = POSITIONS.includes(src.qrposition) ? src.qrposition : 'bottom right';
  dst['qrtext'] = src.qrtext ? src.qrtext : 'SendTransaction';
}

export function MakeSessionID() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 8; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}