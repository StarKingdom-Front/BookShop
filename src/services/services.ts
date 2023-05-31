import axios from 'axios'
import { IBook } from '../modals'

export const services = {
    async getAll(categoryId: number) {
        const response = await axios.get<IBook[]>(`http://localhost:4200/books?${categoryId > 0 ? `category=${categoryId}` : ''}`)

        return response.data
    },

    async getById(id: string) {
        const response = await axios.get<IBook[]>(`http://localhost:4200/books?id=${id}`)

        return response.data[0]
    },
}
