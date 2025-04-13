export default function removeLineBreaks(originalString: string) {
  return originalString ? originalString.replace(/(\r\n|\n|\r|\f)/gm, ' ') : '';
}
