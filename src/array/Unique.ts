import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'

namespace Unique {
    type Has<T extends any[], F> = T extends [infer First, ...infer Rest]
        ? Equal<First, F> extends true
            ? true
            : Has<Rest, F>
        : false
    type Unique<T, R extends any[] = []> = T extends [
        infer First,
        ...infer Rest
    ]
        ? Has<R, First> extends true
            ? Unique<Rest, R>
            : Unique<Rest, [...R, First]>
        : R
    type cases = [
        Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
        Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
        Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
        Expect<
            Equal<
                Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>,
                [string, number, 1, 'a', 2, 'b']
            >
        >,
        Expect<
            Equal<
                Unique<[unknown, unknown, any, any, never, never]>,
                [unknown, any, never]
            >
        >
    ]
}
