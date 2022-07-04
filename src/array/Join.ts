import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace Join {
    type Join<T, U extends string | number, R extends string = ''> = T extends [
        infer First,
        ...infer Rest
    ]
        ? First extends string
            ? R extends ''
                ? Join<Rest, U, First>
                : Join<Rest, U, `${R}${U}${First}`>
            : R
        : R
    type cases = [
        Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
        Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
        Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
        Expect<Equal<Join<['o'], 'u'>, 'o'>>
    ]
}
