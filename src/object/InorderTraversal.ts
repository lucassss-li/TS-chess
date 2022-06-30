import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace InorderTraversal {
    type Flatten<T extends any[], R extends any[] = []> = T extends [
        infer First,
        ...infer Rest
    ]
        ? First extends any[]
            ? Flatten<Rest, [...R, ...Flatten<First>]>
            : Flatten<Rest, [...R, First]>
        : R

    interface TreeNode {
        val: number
        left: TreeNode | null
        right: TreeNode | null
    }

    type InorderTraversal<T extends TreeNode | null> = T extends TreeNode
        ? Flatten<
              [
                  InorderTraversal<T['left']>,
                  T['val'],
                  InorderTraversal<T['right']>
              ]
          >
        : []

    const tree1 = {
        val: 1,
        left: null,
        right: {
            val: 2,
            left: {
                val: 3,
                left: null,
                right: null
            },
            right: null
        }
    } as const

    const tree2 = {
        val: 1,
        left: null,
        right: null
    } as const

    const tree3 = {
        val: 1,
        left: {
            val: 2,
            left: null,
            right: null
        },
        right: null
    } as const

    const tree4 = {
        val: 1,
        left: null,
        right: {
            val: 2,
            left: null,
            right: null
        }
    } as const

    type cases = [
        Expect<Equal<InorderTraversal<null>, []>>,
        Expect<Equal<InorderTraversal<typeof tree1>, [1, 3, 2]>>,
        Expect<Equal<InorderTraversal<typeof tree2>, [1]>>,
        Expect<Equal<InorderTraversal<typeof tree3>, [2, 1]>>,
        Expect<Equal<InorderTraversal<typeof tree4>, [1, 2]>>
    ]
}
