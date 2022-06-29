import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace Flatten {
    type Flatten<T extends any[], R extends any[] = []> = T extends [
        infer First,
        ...infer Rest
    ]
        ? First extends any[]
            ? Flatten<Rest, [...R, ...Flatten<First>]>
            : Flatten<Rest, [...R, First]>
        : R

    type cases = [
        Expect<Equal<Flatten<[]>, []>>,
        Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
        Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
        Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
        Expect<
            Equal<
                Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>,
                [{ foo: 'bar'; 2: 10 }, 'foobar']
            >
        >
    ]
}
