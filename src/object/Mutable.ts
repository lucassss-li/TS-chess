import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace Mutable {
    type Mutable<T> = { -readonly [K in keyof T]: T[K] }

    interface Todo1 {
        title: string
        description: string
        completed: boolean
        meta: {
            author: string
        }
    }

    type List = [1, 2, 3]

    type cases = [
        Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
        Expect<Equal<Mutable<Readonly<List>>, List>>
    ]
}
