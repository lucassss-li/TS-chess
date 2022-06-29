import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace PickByType {
    type PickByType<T, U> = {
        [K in keyof T as T[K] extends U ? K : never]: T[K]
    }

    interface Model {
        name: string
        count: number
        isReadonly: boolean
        isEnable: boolean
    }

    type cases = [
        Expect<
            Equal<
                PickByType<Model, boolean>,
                { isReadonly: boolean; isEnable: boolean }
            >
        >,
        Expect<Equal<PickByType<Model, string>, { name: string }>>,
        Expect<Equal<PickByType<Model, number>, { count: number }>>
    ]
}
