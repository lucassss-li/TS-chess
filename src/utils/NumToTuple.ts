export type NumToTuple<
    N extends number,
    R extends any[] = []
> = R['length'] extends N ? R : NumToTuple<N, [...R, 1]>
