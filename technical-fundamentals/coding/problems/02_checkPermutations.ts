// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.

export default function checkPermutations(s1: string, s2: string): boolean {
  if (s2.length != s1.length) return false;
  const firstOcurrencies: Array<{ char: string; times: number }> = [];

  s1.split("").forEach((char) => {
    const index = firstOcurrencies.findIndex((occ) => occ.char == char);

    if (index !== -1) {
      firstOcurrencies[index].times++;
    } else {
      firstOcurrencies.push({ char, times: 1 });
    }
  });

  for (let i = 0; i < s2.split("").length; i++) {
    const char = s2[i];
    const index = firstOcurrencies.findIndex((occ) => occ.char == char);

    if (index === -1) {
      return false;
    } else if (firstOcurrencies[index].times == 0) {
      return false;
    } else {
      firstOcurrencies[index].times--;
    }
  }

  return true;
}
