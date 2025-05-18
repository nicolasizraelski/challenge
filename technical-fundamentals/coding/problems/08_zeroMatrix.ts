// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][];

export default function zeroMatrix(matrix: Matrix) {
  let coordenates: Array<{ x: number; y: number }> = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        coordenates.push({ x: j, y: i });
      }
    }
  }

  coordenates.forEach((coor) => removeRowAndColumn(coor.y, coor.x, matrix));

  return matrix;
}

const removeRowAndColumn = (i, j, matrix) => {
  matrix[i] = matrix[i].map(() => 0);

  for (let row = 0; row < matrix.length; row++) {
    matrix[row][j] = 0;
  }
};
