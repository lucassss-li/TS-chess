import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'

namespace ConstructTuple {
    type helper1<T extends unknown[]> = [
        ...T,
        ...T,
        ...T,
        ...T,
        ...T,
        ...T,
        ...T,
        ...T,
        ...T,
        ...T
    ]
    type helper2<
        T extends string,
        A extends unknown[],
        R extends unknown[] = [],
        I extends unknown[] = []
    > = Equal<T, `${I['length']}`> extends true
        ? R
        : helper2<T, A, [...A, ...R], [...I, unknown]>
    type helper3<
        T extends number,
        S = `${T}`,
        R extends any[] = []
    > = S extends `${infer A}${infer B}` ? helper3<T, B, [...R, A]> : R
    type ConstructTuple<
        L extends number,
        S = helper3<L>,
        R extends unknown[] = [],
        F extends unknown[] = [unknown]
    > = S extends [...infer Rest, infer Last]
        ? Last extends string
            ? ConstructTuple<L, Rest, [...R, ...helper2<Last, F>], helper1<F>>
            : never
        : R
    type cases = [
        Expect<Equal<ConstructTuple<0>, []>>,
        Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
        Expect<Equal<ConstructTuple<999>['length'], 999>>,
        // @ts-expect-error
        Expect<Equal<ConstructTuple<1000>['length'], 1000>>
    ]
}
