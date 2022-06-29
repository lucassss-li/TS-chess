import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace StringToUnion {
    type StringToUnion<
        T extends string,
        R = never
    > = T extends `${infer First}${infer Rest}`
        ? StringToUnion<Rest, R | First>
        : R

    type cases = [
        Expect<Equal<StringToUnion<''>, never>>,
        Expect<Equal<StringToUnion<'t'>, 't'>>,
        Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
        Expect<
            Equal<
                StringToUnion<'coronavirus'>,
                'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'
            >
        >
    ]
}
