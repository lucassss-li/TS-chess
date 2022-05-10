import { Alike } from '../utils/Alike'
import { Expect } from '../utils/Expect'

namespace Chainable {
    type Chainable<R = {}> = {
        option<T extends string, K extends any>(
            key: T,
            value: K
        ): Chainable<R & { [A in T]: K }>
        get(): R
    }

    declare const a: Chainable

    const result1 = a
        .option('foo', 123)
        .option('bar', { value: 'Hello World' })
        .option('name', 'type-challenges')
        .get()

    const result2 = a
        .option('name', 'another name')
        .option('name', 'last name')
        .get()

    type cases = [
        Expect<Alike<typeof result1, Expected1>>,
        Expect<Alike<typeof result2, Expected2>>
    ]

    type Expected1 = {
        foo: number
        bar: {
            value: string
        }
        name: string
    }

    type Expected2 = {
        name: string
    }
}
