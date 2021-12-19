/* eslint-disable no-plusplus */
export default function diagonalDifference(arr: number[][]): number {
  // Write your code here
  let dia1:number = 0;
  let dia2:number = 0;
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
      if (i === j) {
        dia1 += arr[i][j];
      }
      if (i + j === l - 1) {
        dia2 += arr[i][j];
      }
    }
  }
  return Math.abs(dia1 - dia2);
}
