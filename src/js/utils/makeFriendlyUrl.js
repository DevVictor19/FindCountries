export function makeFriendlyUrl(str) {
  return str.replace(" ", "%20").trim().toLowerCase();
}
