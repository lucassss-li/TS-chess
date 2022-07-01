import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace Zip {
    type Zip<
        T extends any[],
        U extends any[],
        R extends any[] = []
    > = T extends [infer T_First, ...infer T_Rest]
        ? U extends [infer U_First, ...infer U_Rest]
            ? Zip<T_Rest, U_Rest, [...R, [T_First, U_First]]>
            : R
        : R

    type cases = [
        Expect<Equal<Zip<[], []>, []>>,
        Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
        Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
        Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
        Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>
    ]
}
