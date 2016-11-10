export default function camelize (str, uppercaseFirstLetter = true) {
  return str.replace(/^(\w)|_(\w)/g, (match, p1, p2, offset) => {
    if (offset === 0 && uppercaseFirstLetter) { return match.toUpperCase() }
    if (p2) { return p2.toUpperCase() }
    return p1.toLowerCase()
  })
};
