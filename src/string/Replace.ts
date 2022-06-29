import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace Replace {
    type Replace<
        S extends string,
        From extends string,
        To extends string
    > = From extends ''
        ? S
        : S extends `${infer L}${From}${infer R}`
        ? `${L}${To}${R}`
        : S

    type cases = [
        Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
        Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
        Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
        Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
        Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
        Expect<Equal<Replace<'', '', ''>, ''>>
    ]
}
