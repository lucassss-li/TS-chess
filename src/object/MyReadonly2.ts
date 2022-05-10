import { Alike } from '../utils/Alike'
import { Expect } from '../utils/Expect'
namespace MyReadonly2 {
    type MyReadonly2<T, K = keyof T> = {
        readonly [Y in keyof T as Y extends K ? Y : never]: T[Y]
    } & { [Y in keyof T as Y extends K ? never : Y]: T[Y] }

    type cases = [
        Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
        Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
        Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>
    ]

    interface Todo1 {
        title: string
        description?: string
        completed: boolean
    }

    interface Todo2 {
        readonly title: string
        description?: string
        completed: boolean
    }

    interface Expected {
        readonly title: string
        readonly description?: string
        completed: boolean
    }
}
