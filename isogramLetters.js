function isIsogram(string) {
  const isos = [];
  for (let i = 0; i < string.length; i++) {
    const newIso = string[i].toLowerCase();
    if (isos.find((iso) => iso === newIso)) {
      return false;
    }
    isos.push(newIso);
  }
  return true;
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));
