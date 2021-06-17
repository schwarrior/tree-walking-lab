export interface Element {
    key?: string
    value: any
    parent?: Element

    isArray?: boolean
    leafValue?: string
}