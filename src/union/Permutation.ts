import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace Permutation {
    type Permutation<T, R = T> = [T] extends [never]
        ? []
        : T extends R
        ? [T, ...Permutation<Exclude<R, T>>]
        : []
    type cases = [
        Expect<Equal<Permutation<'A'>, ['A']>>,
        Expect<
            Equal<
                Permutation<'A' | 'B' | 'C'>,
                | ['A', 'B', 'C']
                | ['A', 'C', 'B']
                | ['B', 'A', 'C']
                | ['B', 'C', 'A']
                | ['C', 'A', 'B']
                | ['C', 'B', 'A']
            >
        >,
        Expect<
            Equal<
                Permutation<'B' | 'A' | 'C'>,
                | ['A', 'B', 'C']
                | ['A', 'C', 'B']
                | ['B', 'A', 'C']
                | ['B', 'C', 'A']
                | ['C', 'A', 'B']
                | ['C', 'B', 'A']
            >
        >,
        Expect<Equal<Permutation<boolean>, [false, true] | [true, false]>>,
        Expect<Equal<Permutation<never>, []>>
    ]
}
