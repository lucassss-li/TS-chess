import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace First {
    type First<T extends any[]> = T extends [infer first, ...infer Rest]
        ? first
        : never
    type First2<T extends any[]> = T['length'] extends 0 ? never : T[0]
    type cases = [
        Expect<Equal<First<[3, 2, 1]>, 3>>,
        Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
        Expect<Equal<First<[]>, never>>,
        Expect<Equal<First<[undefined]>, undefined>>
    ]
}
