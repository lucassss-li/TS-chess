import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace StartsWith {
    type StartsWith<
        T extends string,
        U extends string
    > = T extends `${U}${infer Rest}` ? true : false

    type cases = [
        Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
        Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
        Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
        Expect<Equal<StartsWith<'abc', ''>, true>>,
        Expect<Equal<StartsWith<'abc', ' '>, false>>
    ]
}
