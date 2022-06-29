import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace Trim {
    type Space = ' ' | '\n' | '\t'
    type Trim<S extends string> = S extends `${Space}${infer Rest}${Space}`
        ? Trim<Rest>
        : S extends `${Space}${infer Rest}`
        ? Trim<Rest>
        : S extends `${infer Rest}${Space}`
        ? Trim<Rest>
        : S

    type cases = [
        Expect<Equal<Trim<'str'>, 'str'>>,
        Expect<Equal<Trim<' str'>, 'str'>>,
        Expect<Equal<Trim<'     str'>, 'str'>>,
        Expect<Equal<Trim<'str   '>, 'str'>>,
        Expect<Equal<Trim<'     str     '>, 'str'>>,
        Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
        Expect<Equal<Trim<''>, ''>>,
        Expect<Equal<Trim<' \n\t '>, ''>>
    ]
}
