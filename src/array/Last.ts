import { Equal } from '../utils/Equal'
import { Expect } from '../utils/Expect'

namespace Last {
    type Last<T extends any[]> = T extends [...infer Rest, infer Last]
        ? Last
        : never

    type cases = [
        Expect<Equal<Last<[3, 2, 1]>, 1>>,
        Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
    ]
}
