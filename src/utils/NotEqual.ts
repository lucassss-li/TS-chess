export type NotEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <
    T
>() => T extends B ? 1 : 2
    ? false
    : true
