import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace IsTuple {
    type IsTuple<T> = [T] extends [never]
        ? false
        : T extends any[]
        ? number extends T['length']
            ? false
            : true
        : T extends readonly any[]
        ? number extends T['length']
            ? false
            : true
        : false
    type A = IsTuple<[]>

    type cases = [
        Expect<Equal<IsTuple<[]>, true>>,
        Expect<Equal<IsTuple<[number]>, true>>,
        Expect<Equal<IsTuple<readonly [1]>, true>>,
        Expect<Equal<IsTuple<{ length: 1 }>, false>>,
        Expect<Equal<IsTuple<number[]>, false>>,
        Expect<Equal<IsTuple<never>, false>>
    ]
}
