import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'

namespace MyAwaited {
    type MyAwaited<T> = T extends Promise<infer Y> ? MyAwaited<Y> : T

    type X = Promise<string>
    type Y = Promise<{ field: number }>
    type Z = Promise<Promise<string | number>>

    type cases = [
        Expect<Equal<MyAwaited<X>, string>>,
        Expect<Equal<MyAwaited<Y>, { field: number }>>,
        Expect<Equal<MyAwaited<Z>, string | number>>
    ]
}
