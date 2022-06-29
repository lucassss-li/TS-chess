import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace RemoveIndexSignature {
    type RemoveIndexSignature<T> = {
        [K in keyof T as Equal<K, string> extends true
            ? never
            : Equal<K, number> extends true
            ? never
            : Equal<K, symbol> extends true
            ? never
            : K]: T[K]
    }

    type Foo = {
        [key: string]: any
        foo(): void
    }

    type Bar = {
        [key: number]: any
        bar(): void
    }

    type FooBar = {
        [key: symbol]: any
        foobar(): void
    }

    type Baz = {
        bar(): void
        baz: string
    }

    type cases = [
        Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
        Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void }>>,
        Expect<Equal<RemoveIndexSignature<FooBar>, { foobar(): void }>>,
        Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>
    ]
}
