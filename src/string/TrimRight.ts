import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace TrimRight {
    type Space = ' ' | '\n' | '\t'
    type Split<
        S extends string,
        R extends any[] = []
    > = S extends `${infer First}${infer Rest}` ? Split<Rest, [...R, First]> : R
    type Join<A extends any[], R extends string = ''> = A extends [
        infer First,
        ...infer Rest
    ]
        ? First extends string
            ? Join<Rest, `${R}${First}`>
            : never
        : R
    type Delete<A extends any[]> = A extends [...infer Rest, infer Last]
        ? Last extends Space
            ? Delete<Rest>
            : A
        : A
    type TrimRight<S extends string, A extends any[] = Split<S>> = Join<
        Delete<Split<S>>
    >

    type cases = [
        Expect<Equal<TrimRight<'str'>, 'str'>>,
        Expect<Equal<TrimRight<'str '>, 'str'>>,
        Expect<Equal<TrimRight<'str     '>, 'str'>>,
        Expect<Equal<TrimRight<'     str     '>, '     str'>>,
        Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
        Expect<Equal<TrimRight<''>, ''>>,
        Expect<Equal<TrimRight<'\n\t '>, ''>>
    ]
}
