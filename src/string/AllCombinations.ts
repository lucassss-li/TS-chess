import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace AllCombinations {
    type Split<
        S extends string,
        R = never
    > = S extends `${infer L}${infer Rest}` ? Split<Rest, R | L> : R
    type Helper<T, R extends string = '', F = T> = [T] extends [never]
        ? R
        : T extends string
        ? Helper<Exclude<F, T>, R | `${R}${T}`>
        : never
    type AllCombinations<S extends string> = Helper<Split<S>>

    type cases = [
        Expect<Equal<AllCombinations<''>, ''>>,
        Expect<Equal<AllCombinations<'A'>, '' | 'A'>>,
        Expect<Equal<AllCombinations<'AB'>, '' | 'A' | 'B' | 'AB' | 'BA'>>,
        Expect<
            Equal<
                AllCombinations<'ABC'>,
                | ''
                | 'A'
                | 'B'
                | 'C'
                | 'AB'
                | 'AC'
                | 'BA'
                | 'BC'
                | 'CA'
                | 'CB'
                | 'ABC'
                | 'ACB'
                | 'BAC'
                | 'BCA'
                | 'CAB'
                | 'CBA'
            >
        >,
        Expect<
            Equal<
                AllCombinations<'ABCD'>,
                | ''
                | 'A'
                | 'B'
                | 'C'
                | 'D'
                | 'AB'
                | 'AC'
                | 'AD'
                | 'BA'
                | 'BC'
                | 'BD'
                | 'CA'
                | 'CB'
                | 'CD'
                | 'DA'
                | 'DB'
                | 'DC'
                | 'ABC'
                | 'ABD'
                | 'ACB'
                | 'ACD'
                | 'ADB'
                | 'ADC'
                | 'BAC'
                | 'BAD'
                | 'BCA'
                | 'BCD'
                | 'BDA'
                | 'BDC'
                | 'CAB'
                | 'CAD'
                | 'CBA'
                | 'CBD'
                | 'CDA'
                | 'CDB'
                | 'DAB'
                | 'DAC'
                | 'DBA'
                | 'DBC'
                | 'DCA'
                | 'DCB'
                | 'ABCD'
                | 'ABDC'
                | 'ACBD'
                | 'ACDB'
                | 'ADBC'
                | 'ADCB'
                | 'BACD'
                | 'BADC'
                | 'BCAD'
                | 'BCDA'
                | 'BDAC'
                | 'BDCA'
                | 'CABD'
                | 'CADB'
                | 'CBAD'
                | 'CBDA'
                | 'CDAB'
                | 'CDBA'
                | 'DABC'
                | 'DACB'
                | 'DBAC'
                | 'DBCA'
                | 'DCAB'
                | 'DCBA'
            >
        >
    ]
}
