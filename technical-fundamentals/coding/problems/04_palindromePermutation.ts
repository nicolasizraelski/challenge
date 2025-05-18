// 4. *Palindrome Permutation*:

// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```

export default function palindromePermutation(str: string): boolean {
  const firstOcurrencies: Array<{ char: string; times: number }> = [];

  str
    .toLocaleLowerCase()
    .replaceAll(" ", "")
    .split("")
    .forEach((char) => {
      const index = firstOcurrencies.findIndex((occ) => occ.char == char);

      if (index !== -1) {
        firstOcurrencies[index].times++;
      } else {
        firstOcurrencies.push({ char, times: 1 });
      }
    });

  let oddCount = 0;

  for (let i = 0; i < firstOcurrencies.length; i++) {
    const current = firstOcurrencies[i];
    if (current.times % 2 != 0) {
      oddCount++;
    }

    if (oddCount > 1) {
      return false;
    }
  }

  return true;
}
