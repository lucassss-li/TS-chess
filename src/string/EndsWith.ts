import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace EndsWith {
    type EndsWith<
        T extends string,
        U extends string
    > = T extends `${infer Rest}${U}` ? true : false

    type cases = [
        Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
        Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
        Expect<Equal<EndsWith<'abc', 'd'>, false>>
    ]
}
