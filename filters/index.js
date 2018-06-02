export function text(text, length = text.length) {
  const sub = text && text.length > length
  return sub ? text.substr(0, length) : text
}