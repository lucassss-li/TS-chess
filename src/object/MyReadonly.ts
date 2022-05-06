import { Equal } from '../utils/Equal'
namespace MyReadonly {
    type MyReadonly<T> = { readonly [K in keyof T]: T[K] }

    interface Todo {
        title: string
        description: string
        completed: boolean
        meta: {
            author: string
        }
    }

    type a = Equal<MyReadonly<Todo>, Readonly<Todo>>
}
