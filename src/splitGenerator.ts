import { RandomNumberGenerator } from './RandomNumberGenerator'
import { curry2 } from '167'
import { next } from './next'

export const splitGenerator: SplitGenerator = curry2(
  function splitGenerator(
    quantity: number,
    seed: RandomNumberGenerator): ReadonlyArray<RandomNumberGenerator>
  {
    const generators: Array<RandomNumberGenerator> = Array(quantity)
    let generator = seed

    for (let i = 0; i < Math.max(Math.round(quantity), 1); ++i) {
      const { nextGenerator } = next(generator)

      generators[i] = nextGenerator
      generator = nextGenerator
    }

    return generators
  },
)

export interface SplitGenerator {
  (quantity: number, seed: RandomNumberGenerator): ReadonlyArray<RandomNumberGenerator>
  (quantity: number): (seed: RandomNumberGenerator) => ReadonlyArray<RandomNumberGenerator>
}