import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace Chunk {
    export type NumToTuple<
        N extends number,
        R extends any[] = []
    > = R['length'] extends N ? R : NumToTuple<N, [...R, 1]>

    type Chunk<
        T,
        N extends number,
        R extends any[] = [],
        C extends any[] = []
    > = C['length'] extends N
        ? Chunk<T, N, [...R, C]>
        : T extends [infer First, ...infer Rest]
        ? Chunk<Rest, N, R, [...C, First]>
        : C['length'] extends 0
        ? R
        : [...R, C]

    type cases = [
        Expect<Equal<Chunk<[], 1>, []>>,
        Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
        Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
        Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
        Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
        Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>
    ]
}
