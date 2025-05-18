// 6. *String Compression*:

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2blc5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

export default function stringCompression(str: string): string {
  let char = str[0];
  let times = 1;
  let compressed = "";

  for (let i = 1; i < str.length; i++) {
    const curr = str[i];

    if (curr !== char) {
      compressed += char + times;
      char = curr;
      times = 1;
    } else {
      times++;
    }
  }

  compressed += char + times;

  return compressed.length < str.length ? compressed : str;
}
