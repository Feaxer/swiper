import { wrap } from './App'

export function calcx(offset: number, i: number) {
  return wrap(-1, 2, -1 * offset + i - 1)
}

export function calcValue(offset: number, i: number) {
  const x = 2 - i
  return Math.floor((x + offset) / 3) * 3 - (x - 1)
}
/*
0 0 0
1 0 1
2 2 2
3 2 0
4 2 1
5 5 2
6 5 0
*/
