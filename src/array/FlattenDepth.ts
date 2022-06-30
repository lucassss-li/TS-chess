import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace FlattenDepth {
    type FlattenDepth<
        T,
        N extends number = 1,
        B extends any[] = [],
        R extends any[] = []
    > = B['length'] extends N
        ? T
        : T extends [infer First, ...infer Rest]
        ? FlattenDepth<
              Rest,
              N,
              B,
              First extends any[]
                  ? [...R, ...FlattenDepth<First, N, [1, ...B]>]
                  : [...R, First]
          >
        : R

    type cases = [
        Expect<Equal<FlattenDepth<[]>, []>>,
        Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
        Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
        Expect<
            Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>
        >,
        Expect<
            Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>
        >,
        Expect<
            Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>
        >,
        Expect<
            Equal<
                FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>,
                [1, 2, 3, 4, 5]
            >
        >
    ]
}
