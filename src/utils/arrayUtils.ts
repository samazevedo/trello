type Item = {
    id: string
}

export const findItemIndexById = <TIem extends Item>(
    items: TIem[],
    id: string
) => {
    return items.findIndex((item) => item.id === id)
}
