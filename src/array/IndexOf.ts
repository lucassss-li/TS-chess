import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace IndexOf {
    type IndexOf<T, U, I extends any[] = []> = T extends [
        infer First,
        ...infer Rest
    ]
        ? Equal<First, U> extends true
            ? I['length']
            : IndexOf<Rest, U, [...I, 1]>
        : -1

    type cases = [
        Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
        Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
        Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
        Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
        Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>
    ]
}
