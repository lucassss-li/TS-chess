import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace RequiredByKeys {
    type RequiredByKeys<
        T,
        K = keyof T,
        A = { [C in keyof T as C extends K ? C : never]-?: T[C] },
        B = { [C in keyof T as C extends K ? never : C]: T[C] }
    > = A & B extends infer C ? { [D in keyof C]: C[D] } : never
    type A = RequiredByKeys<User, 'name'>

    interface User {
        name?: string
        age?: number
        address?: string
    }

    interface UserRequiredName {
        name: string
        age?: number
        address?: string
    }

    interface UserRequiredNameAndAge {
        name: string
        age: number
        address?: string
    }

    type cases = [
        Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
        Expect<
            Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>
        >,
        Expect<
            Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>
        >,
        Expect<Equal<RequiredByKeys<User>, Required<User>>>
    ]
}
