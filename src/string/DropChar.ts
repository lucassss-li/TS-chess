import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace DropChar {
    type DropChar<S, C extends string> = S extends `${infer L}${C}${infer R}`
        ? DropChar<`${L}${R}`, C>
        : S

    type cases = [
        // @ts-expect-error
        Expect<Equal<DropChar<'butter fly!', ''>, 'butterfly!'>>,
        Expect<Equal<DropChar<'butter fly!', ' '>, 'butterfly!'>>,
        Expect<Equal<DropChar<'butter fly!', '!'>, 'butter fly'>>,
        Expect<Equal<DropChar<'    butter fly!        ', ' '>, 'butterfly!'>>,
        Expect<Equal<DropChar<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
        Expect<
            Equal<
                DropChar<' b u t t e r f l y ! ', 'b'>,
                '  u t t e r f l y ! '
            >
        >,
        Expect<
            Equal<DropChar<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>
        >
    ]
}
