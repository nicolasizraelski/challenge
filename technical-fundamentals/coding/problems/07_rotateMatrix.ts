// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

type Matrix = number[][];

export default function rotateMatrix(matrix: Matrix) {
  const coordenates: Array<{ x: number; y: number }> = [];

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix.length; x++) {
      if (!coordenates.find((coor) => coor.x == y && coor.y == x)) {
        coordenates.push({ x, y });
        const pivot = matrix[y][x];
        matrix[y][x] = matrix[x][y];
        matrix[x][y] = pivot;
      }
    }
  }

  return matrix.map((row) => row.reverse());
}

// [1   2    3    x]
// [4   5    6    d]
// [7   8    9    v]
// [q   w    e    r]

// [1   4    7     q]
// [2   5    8     w]
// [3   6    9    e]
// [x   d    v    r]
