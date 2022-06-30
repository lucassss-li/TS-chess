import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace Reverse {
    type Reverse<T extends any[], R extends any[] = []> = T extends [
        infer First,
        ...infer Rest
    ]
        ? Reverse<Rest, [First, ...R]>
        : R

    type cases = [
        Expect<Equal<Reverse<[]>, []>>,
        Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
        Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>
    ]
}
