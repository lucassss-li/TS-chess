type Num<N extends number, R extends any[] = []> = R['length'] extends N
    ? R
    : Num<N, [...R, 1]>

type BaseToTuple<
    N extends number,
    L extends any[] = [],
    R extends any[] = [1]
> = L['length'] extends N
    ? R
    : BaseToTuple<
          N,
          [...L, 1],
          [...R, ...R, ...R, ...R, ...R, ...R, ...R, ...R, ...R, ...R]
      >

type SplitNum<
    N extends number,
    S = `${N}`,
    R extends any[] = []
> = S extends `${infer First}${infer Rest}`
    ? SplitNum<N, Rest, [...R, First]>
    : R

type StrNumToTuple<
    T extends string,
    Y extends number = 0,
    R extends any[] = [],
    N extends any[] = []
> = `${N['length']}` extends T
    ? R
    : // @ts-ignore
      StrNumToTuple<T, Y, [...R, ...BaseToTuple<Y>], [...N, 1]>

type ForEach<
    T extends any[],
    I extends any[] = [],
    R extends any[] = []
> = T extends [...infer Rest, infer Last]
    ? ForEach<
          Rest,
          [...I, 1],
          // @ts-ignore
          [
              ...R,
              ...(Last extends string
                  ? StrNumToTuple<Last, I['length']>
                  : never)
          ]
      >
    : R
export type BigNumToTuple<N extends number> = ForEach<SplitNum<N>>
