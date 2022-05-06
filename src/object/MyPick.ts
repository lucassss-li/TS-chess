namespace MyPick {
    type MyPick<T, K> = { [Y in keyof T as Y extends K ? Y : never]: T[Y] }

    // type MyPick<T, K extends keyof T> = {
    //     [P in K]: T[P]
    //   }

    interface Todo {
        title: string
        description: string
        completed: boolean
    }

    type a = MyPick<Todo, 'title'>
    type b = MyPick<Todo, 'title' | 'completed'>
    type c = MyPick<Todo, 'title' | 'completed' | 'invalid'>
}
