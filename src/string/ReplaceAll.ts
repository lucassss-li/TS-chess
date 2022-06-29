import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace ReplaceAll {
    type ReplaceAll<
        S extends string,
        From extends string,
        To extends string,
        A extends string = ''
    > = From extends ''
        ? S
        : S extends `${infer L}${From}${infer R}`
        ? ReplaceAll<R, From, To, `${A}${L}${To}`>
        : `${A}${S}`

    type cases = [
        Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
        Expect<Equal<ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
        Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
        Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
        Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
        Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
        Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
        Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
        Expect<Equal<ReplaceAll<'', '', ''>, ''>>
    ]
}
