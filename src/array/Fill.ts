import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace Fill {
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
        ? true
        : TN['length'] extends 0
        ? false
        : GreaterThan<T, U, Pop<TN>, Pop<UN>>

    type Fill<
        T extends unknown[],
        N,
        Start extends number = 0,
        End extends number = T['length'],
        I extends any[] = [],
        R extends any[] = []
    > = I['length'] extends End
        ? [...R, ...T]
        : T extends [infer First, ...infer Rest]
        ? GreaterThan<I['length'], Start> extends true
            ? Fill<Rest, N, Start, End, [...I, 1], [...R, N]>
            : Fill<Rest, N, Start, End, [...I, 1], [...R, First]>
        : R
    type cases = [
        Expect<Equal<Fill<[], 0>, []>>,
        Expect<Equal<Fill<[], 0, 0, 3>, []>>,
        Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
        Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
        Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
        Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
        Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
        Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
        Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
        Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>
    ]
}
