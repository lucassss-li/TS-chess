import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace Shift {
    type Shift<T> = T extends [infer First, ...infer Rest] ? Rest : []

    type cases = [
        Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
        Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>
    ]
}
