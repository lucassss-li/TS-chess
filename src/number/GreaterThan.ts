import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace GreaterThan {
    type NumToTuple<
        N extends number,
        R extends any[] = []
    > = R['length'] extends N ? R : NumToTuple<N, [...R, 1]>

    type Pop<T extends any[]> = T extends [infer First, ...infer Rest]
        ? Rest
        : []

    type GreaterThan<
        T extends number,
        U extends number,
        TN extends any[] = NumToTuple<T>,
        UN extends any[] = NumToTuple<U>
    > = UN['length'] extends 0
        ? TN['length'] extends 0
            ? false
            : true
        : GreaterThan<T, U, Pop<TN>, Pop<UN>>

    type cases = [
        Expect<Equal<GreaterThan<1, 0>, true>>,
        Expect<Equal<GreaterThan<5, 4>, true>>,
        Expect<Equal<GreaterThan<4, 5>, false>>,
        Expect<Equal<GreaterThan<0, 0>, false>>,
        Expect<Equal<GreaterThan<20, 20>, false>>,
        Expect<Equal<GreaterThan<10, 100>, false>>,
        Expect<Equal<GreaterThan<111, 11>, true>>
    ]
}
