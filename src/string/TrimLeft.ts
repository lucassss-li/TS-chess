import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace TrimLeft {
    type Space = ' ' | '\n' | '\t'
    type TrimLeft<S extends string> = S extends `${Space}${infer Rest}`
        ? TrimLeft<Rest>
        : S

    type cases = [
        Expect<Equal<TrimLeft<'str'>, 'str'>>,
        Expect<Equal<TrimLeft<' str'>, 'str'>>,
        Expect<Equal<TrimLeft<'     str'>, 'str'>>,
        Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
        Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
        Expect<Equal<TrimLeft<''>, ''>>,
        Expect<Equal<TrimLeft<' \n\t'>, ''>>
    ]
}
