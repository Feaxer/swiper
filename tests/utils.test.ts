import { range } from 'lodash-es'
import { wrap } from '../src/App'
import { calcValue, calcx } from '../src/utils'

describe('Utils', () => {
  test('wrap', () => {
    expect(wrap(-1, 0, 0)).toBe(-1)
  })

  test('range', () => {
    expect(range(0, 5)).toStrictEqual([0, 1, 2, 3, 4])
    expect(range(5, 0, -1)).toStrictEqual([5, 4, 3, 2, 1])
  })

  test('calcx', () => {
    expect(calcx(0, 0)).toBe(-1)
    expect(calcx(0, 1)).toBe(0)
    expect(calcx(0, 2)).toBe(1)
    expect(calcx(1, 0)).toBe(1)
    expect(calcx(1, 1)).toBe(-1)
    expect(calcx(1, 2)).toBe(0)
  })

  test('calcValue', () => {
    console.log('--------')
    console.log(calcValue(0, 0), calcValue(1, 0), calcValue(2, 0), calcValue(3, 0), calcValue(4, 0))
    console.log(calcValue(0, 1), calcValue(1, 1), calcValue(2, 1), calcValue(3, 1), calcValue(4, 1))
    console.log(calcValue(0, 2), calcValue(1, 2), calcValue(2, 2), calcValue(3, 2), calcValue(4, 2))

    //expect(calcValue(0, 0)).toBe(-1)
    expect(calcValue(0, 1)).toBe(0)
    expect(calcValue(0, 2)).toBe(1)

    expect(calcValue(1, 0)).toBe(2)
    expect(calcValue(1, 1)).toBe(0)
    expect(calcValue(1, 2)).toBe(1)

    expect(calcValue(2, 0)).toBe(2)
    expect(calcValue(2, 1)).toBe(3)
    expect(calcValue(2, 2)).toBe(1)

    expect(calcValue(3, 0)).toBe(2)
    expect(calcValue(3, 1)).toBe(3)
    expect(calcValue(3, 2)).toBe(4)
  })
})
