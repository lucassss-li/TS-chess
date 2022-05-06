import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace MyPick {
    type MyPick<T, K> = { [Y in keyof T as Y extends K ? Y : never]: T[Y] }

    // type MyPick<T, K extends keyof T> = {
    //     [P in K]: T[P]
    //   }

    type cases = [
        Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
        Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
        MyPick<Todo, 'title' | 'completed' | 'invalid'>
    ]

    interface Todo {
        title: string
        description: string
        completed: boolean
    }

    interface Expected1 {
        title: string
    }

    interface Expected2 {
        title: string
        completed: boolean
    }
}
