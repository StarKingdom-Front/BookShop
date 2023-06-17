export interface IBook {
    id: number
    title: string
    desc1: string
    category: number
    img: string
    all: number
    author: string
    price: number
    count: number
}

export interface IAddress {
    country: string
    city: string
    street: string
    gouse: number
}

export interface IForm {
    email:string
    name:string
    address: IAddress
}

export interface IOption{
    value: string
    label: string
}

export interface IBookData extends Omit<IBook, 'id'> {}