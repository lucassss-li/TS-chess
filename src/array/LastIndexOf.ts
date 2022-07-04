import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace LastIndexOf {
    type Subtract<T> = T extends [infer L, ...infer R] ? R : []

    type LastIndexOf<T extends any[], U, I extends any[] = T> = T extends [
        ...infer Rest,
        infer Last
    ]
        ? Equal<Last, U> extends true
            ? Subtract<I>['length']
            : LastIndexOf<Rest, U, Subtract<I>>
        : -1

    type cases = [
        Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
        Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
        Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
        Expect<
            Equal<LastIndexOf<[string, 2, number, 'a', number, 1], number>, 4>
        >,
        Expect<
            Equal<LastIndexOf<[string, any, 1, number, 'a', any, 1], any>, 5>
        >
    ]
}
