import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'

namespace Push {
    type Push<T extends unknown[], U> = [...T, U]

    type cases = [
        Expect<Equal<Push<[], 1>, [1]>>,
        Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
        Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>
    ]
}
