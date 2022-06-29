import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace TupleToNestedObject {
    type TupleToNestedObject<T, U> = T extends [...infer Rest, infer Last]
        ? TupleToNestedObject<
              Rest,
              { [K in Last extends string ? Last : never]: U }
          >
        : U

    type cases = [
        Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
        Expect<
            Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>
        >,
        Expect<
            Equal<
                TupleToNestedObject<['a', 'b', 'c'], boolean>,
                { a: { b: { c: boolean } } }
            >
        >,
        Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>
    ]
}
