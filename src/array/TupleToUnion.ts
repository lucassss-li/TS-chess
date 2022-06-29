import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'

namespace TupleToUnion {
    type TupleToUnion<T extends any[]> = T[number]

    type cases = [
        Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
        Expect<Equal<TupleToUnion<[123]>, 123>>
    ]
}
