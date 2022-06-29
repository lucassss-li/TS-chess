import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace Merge {
    type Merge<F, S> = {
        [K in keyof F | keyof S]: K extends keyof S
            ? S[K]
            : K extends keyof F
            ? F[K]
            : never
    }

    type Foo = {
        a: number
        b: string
    }
    type Bar = {
        b: number
        c: boolean
    }

    type cases = [
        Expect<
            Equal<
                Merge<Foo, Bar>,
                {
                    a: number
                    b: number
                    c: boolean
                }
            >
        >
    ]
}
