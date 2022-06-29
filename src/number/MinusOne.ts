import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
import { BigNumToTuple } from '../utils/BigNumToTuple'
namespace MinusOne {
    type MinusOne<
        TDigit extends number,
        TArray extends unknown[] = BigNumToTuple<TDigit>
    > = TArray extends [infer A, ...infer R] ? R['length'] : 1
    type cases = [
        Expect<Equal<MinusOne<1>, 0>>,
        Expect<Equal<MinusOne<55>, 54>>,
        Expect<Equal<MinusOne<3>, 2>>,
        Expect<Equal<MinusOne<100>, 99>>,
        Expect<Equal<MinusOne<1101>, 1100>>
    ]
}
