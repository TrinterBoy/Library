import {$authHost, $host} from "./index";

export const createGenre =async (genre) => {
    const {data} = await $authHost.post('api/genre',genre)
    return data
}
export const fetchGenre =async () => {
    const {data} = await $host.get('api/genre')
    return data
}

export const fetchOneGenre =async (id) => {
    const {data} = await $host.get('api/genre/'+id)
    return data
}

export const createBook = async (book) => {
    const {data} = await $authHost.post('api/book',book)
    return data
}
export const fetchBook =async (name,author,genreId, page, limit = 10) => {
    const {data} = await $host.get('api/book', {params:{
            name,author,genreId,page,limit
        }
    })
    return data
}
export const fetchBookById =async (id) => {
    const {data} = await $host.get('api/book/byId',{params:{id}})
    return data
}
export const fetchOneBook =async (id) => {
    const {data} = await $host.get('api/book/'+id)
    return data
}
export const postBookId = async (id) => {
    const {data} = await $authHost.post('api/book/available',{id})
    return data
}
export const postBookIdTrue = async (id) => {
    const {data} = await $authHost.post('api/book/notAvailable',{id})
    return data
}
export const getUnavailableBook = async () => {
    const {data} = await $authHost.get('api/book/?isA=false')
    return data
}
