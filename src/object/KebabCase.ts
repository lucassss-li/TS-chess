import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace KebabCase {
    type KebabCase<
        S,
        R extends string = ''
    > = S extends `${infer First}${infer Rest}`
        ? Equal<Lowercase<First>, Uppercase<First>> extends true
            ? KebabCase<Rest, `${R}${First}`>
            : Equal<First, Uppercase<First>> extends true
            ? R extends ''
                ? KebabCase<Rest, `${Lowercase<First>}`>
                : KebabCase<Rest, `${R}-${Lowercase<First>}`>
            : KebabCase<Rest, `${R}${First}`>
        : R

    type A = KebabCase<'foo-bar'>

    type cases = [
        Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
        Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
        Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
        Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
        Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
        Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
        Expect<Equal<KebabCase<'-'>, '-'>>,
        Expect<Equal<KebabCase<''>, ''>>,
        Expect<Equal<KebabCase<'😎'>, '😎'>>
    ]
}
