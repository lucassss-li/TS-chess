import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace MyReadonly {
    type MyReadonly<T> = { readonly [K in keyof T]: T[K] }

    type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>]

    interface Todo1 {
        title: string
        description: string
        completed: boolean
        meta: {
            author: string
        }
    }
}
