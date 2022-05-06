import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace Length {
    type Length<T> = T extends any[]
        ? T['length']
        : T extends readonly any[]
        ? T['length']
        : never

    const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
    const spaceX = [
        'FALCON 9',
        'FALCON HEAVY',
        'DRAGON',
        'STARSHIP',
        'HUMAN SPACEFLIGHT'
    ] as const
    type cases = [
        Expect<Equal<Length<typeof tesla>, 4>>,
        Expect<Equal<Length<typeof spaceX>, 5>>,
        Length<5>,
        Length<'hello world'>
    ]
}
