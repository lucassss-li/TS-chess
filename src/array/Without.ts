import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace Without {
    type Without<
        T extends any[],
        B,
        U extends any[] = B extends any[] ? B : [B],
        R extends any[] = []
    > = T extends [infer First, ...infer Rest]
        ? First extends U[number]
            ? Without<Rest, U, U, R>
            : Without<Rest, U, U, [...R, First]>
        : R
    type A = Without<[1, 2], 1>
    type cases = [
        Expect<Equal<Without<[1, 2], 1>, [2]>>,
        Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
        Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
    ]
}
