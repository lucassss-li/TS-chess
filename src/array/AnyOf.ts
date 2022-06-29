import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace AnyOf {
    type isTrue<T> = T extends '' | 0 | [] | false
        ? false
        : keyof T extends [never]
        ? false
        : true
    type AnyOf<T extends readonly any[]> = T extends [
        infer First,
        ...infer Rest
    ]
        ? isTrue<First> extends true
            ? true
            : AnyOf<Rest>
        : false

    type cases = [
        Expect<
            Equal<
                AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>,
                true
            >
        >,
        Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
        Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
        Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
        Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
        Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
        Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
        Expect<
            Equal<
                AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>,
                true
            >
        >,
        Expect<Equal<AnyOf<[0, '', false, [], {}]>, false>>,
        Expect<Equal<AnyOf<[]>, false>>
    ]
}
