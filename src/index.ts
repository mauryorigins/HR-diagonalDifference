/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
import diagonalDifference from './diagonalDifference';

function main() {
  console.log('---------- Cool Programing ----------\n');
  const a = [11, 2, 4];
  const b = [4, 5, 6];
  const c = [10, 8, -12];
  const result = diagonalDifference([a, b, c]);
  console.log('Result: ', result);
}

main();
