import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace Fibonacci {
    export type NumToTuple<
        N extends number,
        R extends any[] = []
    > = R['length'] extends N ? R : NumToTuple<N, [...R, 1]>

    type Add<A extends number, B extends number> = [
        ...NumToTuple<A>,
        ...NumToTuple<B>
    ]['length']
    type Subtract1<A extends number> = NumToTuple<A> extends [
        infer L,
        ...infer R
    ]
        ? R['length']
        : 0
    type Subtract2<A extends number> = NumToTuple<A> extends [
        infer L1,
        infer L2,
        ...infer R
    ]
        ? R['length']
        : 0
    type Fibonacci<T extends number> = T extends 0
        ? 0
        : T extends 1 | 2
        ? 1
        : Add<Fibonacci<Subtract1<T>>, Fibonacci<Subtract2<T>>>

    type A = Fibonacci<1>

    type cases = [
        Expect<Equal<Fibonacci<3>, 2>>,
        Expect<Equal<Fibonacci<8>, 21>>
    ]
}
