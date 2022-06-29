import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace Diff {
    type Diff<O, O1> = {
        [K in keyof O | keyof O1 as K extends keyof O & keyof O1
            ? never
            : K]: K extends keyof O ? O[K] : K extends keyof O1 ? O1[K] : never
    }

    type Foo = {
        name: string
        age: string
    }
    type Bar = {
        name: string
        age: string
        gender: number
    }
    type Coo = {
        name: string
        gender: number
    }

    type cases = [
        Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
        Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
        Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
        Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>
    ]
}
