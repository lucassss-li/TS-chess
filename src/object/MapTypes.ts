import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'

namespace MapTypes {
    type Helper<T, R extends { mapFrom: any; mapTo: any }, F = R> = R extends F
        ? T extends R['mapFrom']
            ? R['mapTo']
            : never
        : never
    type MapTypes<T, R extends { mapFrom: any; mapTo: any }, F = R> = {
        [K in keyof T]: [Helper<T[K], R>] extends [never]
            ? T[K]
            : Helper<T[K], R>
    }

    type cases = [
        Expect<
            Equal<
                MapTypes<
                    { stringToArray: string },
                    { mapFrom: string; mapTo: [] }
                >,
                { stringToArray: [] }
            >
        >,
        Expect<
            Equal<
                MapTypes<
                    { stringToNumber: string },
                    { mapFrom: string; mapTo: number }
                >,
                { stringToNumber: number }
            >
        >,
        Expect<
            Equal<
                MapTypes<
                    { stringToNumber: string; skipParsingMe: boolean },
                    { mapFrom: string; mapTo: number }
                >,
                { stringToNumber: number; skipParsingMe: boolean }
            >
        >,
        Expect<
            Equal<
                MapTypes<
                    { date: string },
                    | { mapFrom: string; mapTo: Date }
                    | { mapFrom: string; mapTo: null }
                >,
                { date: null | Date }
            >
        >,
        Expect<
            Equal<
                MapTypes<
                    { date: string },
                    { mapFrom: string; mapTo: Date | null }
                >,
                { date: null | Date }
            >
        >,
        Expect<
            Equal<
                MapTypes<
                    { fields: Record<string, boolean> },
                    { mapFrom: Record<string, boolean>; mapTo: string[] }
                >,
                { fields: string[] }
            >
        >,
        Expect<
            Equal<
                MapTypes<{ name: string }, { mapFrom: boolean; mapTo: never }>,
                { name: string }
            >
        >,
        Expect<
            Equal<
                MapTypes<
                    { name: string; date: Date },
                    | { mapFrom: string; mapTo: boolean }
                    | { mapFrom: Date; mapTo: string }
                >,
                { name: boolean; date: string }
            >
        >
    ]
}
