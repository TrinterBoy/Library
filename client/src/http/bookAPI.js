import {$authHost, $host} from "./index";

export const createGenre =async (genre) => {
    const {data} = await $authHost.post('api/genre',genre)
    return data
}
export const fetchGenre =async () => {
    const {data} = await $host.get('api/genre')
    return data
}

export const createBook = async (book) => {
    const {data} = await $authHost.post('api/book',book)
    return data
}
export const fetchBook =async (name,author,genreId, page, limit = 5) => {
    const {data} = await $host.get('api/book', {params:{
            name,author,genreId,page,limit
        }
    })
    return data
}
export const fetchOneBook =async (id) => {
    const {data} = await $host.get('api/book/'+id)
    return data
}