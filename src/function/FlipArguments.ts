import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace FlipArguments {
    type Reverse<T extends any[], R extends any[] = []> = T extends [
        infer First,
        ...infer Rest
    ]
        ? Reverse<Rest, [First, ...R]>
        : R
    type FlipArguments<T> = T extends (...args: infer A) => infer B
        ? (...args: Reverse<A>) => B
        : never

    type cases = [
        Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
        Expect<
            Equal<
                FlipArguments<(foo: string) => number>,
                (foo: string) => number
            >
        >,
        Expect<
            Equal<
                FlipArguments<
                    (arg0: string, arg1: number, arg2: boolean) => void
                >,
                (arg0: boolean, arg1: number, arg2: string) => void
            >
        >
    ]
}
