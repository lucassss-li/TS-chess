import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'

namespace Concat {
    type Concat<T, U> = T extends unknown[]
        ? U extends unknown[]
            ? [...T, ...U]
            : [...T, U]
        : [T, U]

    type cases = [
        Expect<Equal<Concat<[], []>, []>>,
        Expect<Equal<Concat<[], [1]>, [1]>>,
        Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
        Expect<
            Equal<
                Concat<['1', 2, '3'], [false, boolean, '4']>,
                ['1', 2, '3', false, boolean, '4']
            >
        >
    ]
}
