import { Test, describe, given, it } from '@typed/test'

import { createWithSeed } from './createWithSeed'
import { eq } from '@briancavalier/assert'
import { randomNumbers } from './randomNumbers'

export const test: Test = describe(`generate`,
  given(`an amount of 5 and a Random`,
    it(`returns an array containing 5 psuedo-random numbers`, () => {
      const random = createWithSeed(1000)

      const { values } = randomNumbers(5, random)

      const expected = [
        0.7805178083945066,
        0.5305106327868998,
        0.5493107170332223,
        0.6980533902533352,
        0.7255421064328402,
      ]

      eq(expected, values)
    }),
  ),
)
