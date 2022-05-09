import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'

namespace MyOmit {
    type MyOmit<T, K> = { [Y in keyof T as Y extends K ? never : Y]: T[Y] }

    type cases = [
        Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
        Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>
    ]

    type error = MyOmit<Todo, 'description' | 'invalid'>

    interface Todo {
        title: string
        description: string
        completed: boolean
    }

    interface Expected1 {
        title: string
        completed: boolean
    }

    interface Expected2 {
        title: string
    }
}
