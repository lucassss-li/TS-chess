import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace LengthOfString {
    type LengthOfString<
        S extends string,
        A extends any[] = []
    > = S extends `${infer First}${infer Rest}`
        ? LengthOfString<Rest, [...A, 1]>
        : A['length']

    type cases = [
        Expect<Equal<LengthOfString<''>, 0>>,
        Expect<Equal<LengthOfString<'kumiko'>, 6>>,
        Expect<Equal<LengthOfString<'reina'>, 5>>,
        Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>
    ]
}
