import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'

namespace Unshift {
    type Unshift<T extends unknown[], U> = [U, ...T]

    type cases = [
        Expect<Equal<Unshift<[], 1>, [1]>>,
        Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
        Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>
    ]
}
