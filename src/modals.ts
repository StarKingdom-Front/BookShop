export interface IBook {
    id: number
    title: string
    desc1: string
    category: number
    img: string
    all: number
    author: string
    price: number
}

export interface IBookData extends Omit<IBook, 'id'> {}