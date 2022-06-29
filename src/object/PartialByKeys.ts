import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace PartialByKeys {
    type PartialByKeys<
        T,
        K = keyof T,
        A = { [A in keyof T as A extends K ? A : never]?: T[A] },
        B = { [A in keyof T as A extends K ? never : A]: T[A] }
    > = A & B extends infer O ? { [P in keyof O]: O[P] } : never

    interface User {
        name: string
        age: number
        address: string
    }

    interface UserPartialName {
        name?: string
        age: number
        address: string
    }

    interface UserPartialNameAndAge {
        name?: string
        age?: number
        address: string
    }

    type cases = [
        Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
        Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
        Expect<
            Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>
        >,
        Expect<Equal<PartialByKeys<User>, Partial<User>>>
    ]
}
