import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace MyExclude {
    type MyExclude<T, U> = T extends U ? never : T
    type cases = [
        Expect<
            Equal<
                MyExclude<'a' | 'b' | 'c', 'a'>,
                Exclude<'a' | 'b' | 'c', 'a'>
            >
        >,
        Expect<
            Equal<
                MyExclude<'a' | 'b' | 'c', 'a' | 'b'>,
                Exclude<'a' | 'b' | 'c', 'a' | 'b'>
            >
        >,
        Expect<
            Equal<
                MyExclude<string | number | (() => void), Function>,
                Exclude<string | number | (() => void), Function>
            >
        >
    ]
}
