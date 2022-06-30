import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
import { NotEqual } from '../utils/NotEqual'
namespace Flip {
    type Flip<T> = {
        [K in keyof T as T[K] extends string | symbol | number
            ? T[K]
            : T[K] extends boolean
            ? `${T[K]}`
            : never]: K
    }
    type A = Flip<{ pi: 3.14; bool: true }>
    type cases = [
        Expect<Equal<{ a: 'pi' }, Flip<{ pi: 'a' }>>>,
        Expect<NotEqual<{ b: 'pi' }, Flip<{ pi: 'a' }>>>,
        Expect<
            Equal<{ 3.14: 'pi'; true: 'bool' }, Flip<{ pi: 3.14; bool: true }>>
        >,
        Expect<
            Equal<
                { val2: 'prop2'; val: 'prop' },
                Flip<{ prop: 'val'; prop2: 'val2' }>
            >
        >
    ]
}
