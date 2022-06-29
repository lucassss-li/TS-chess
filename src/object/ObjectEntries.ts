import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace ObjectEntries {
    type ObjectEntries<
        A,
        K = keyof A,
        T = { [B in keyof A]-?: A[B] }
    > = K extends K
        ? [
              K,
              K extends keyof T
                  ? [T[K]] extends [never]
                      ? undefined
                      : T[K]
                  : undefined
          ]
        : never

    interface Model {
        name: string
        age: number
        locations: string[] | null
    }

    type ModelEntries =
        | ['name', string]
        | ['age', number]
        | ['locations', string[] | null]

    type cases = [
        Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
        Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
        Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
        Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>
    ]
}
