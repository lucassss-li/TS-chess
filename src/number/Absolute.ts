import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace Absolute {
    type Absolute<
        T extends number | string | bigint,
        S = `${T}`
    > = S extends `-${infer Rest}` ? Rest : S

    type cases = [
        Expect<Equal<Absolute<0>, '0'>>,
        Expect<Equal<Absolute<-0>, '0'>>,
        Expect<Equal<Absolute<10>, '10'>>,
        Expect<Equal<Absolute<-5>, '5'>>,
        Expect<Equal<Absolute<'0'>, '0'>>,
        Expect<Equal<Absolute<'-0'>, '0'>>,
        Expect<Equal<Absolute<'10'>, '10'>>,
        Expect<Equal<Absolute<'-5'>, '5'>>,
        Expect<Equal<Absolute<-1_000_000n>, '1000000'>>,
        Expect<Equal<Absolute<9_999n>, '9999'>>
    ]
}
