import {$authHost} from "./index";

export const createUsersBook = async (userId,bookId) => {
    const {data} = await $authHost.post('api/usersBook',{userId,bookId})
    return data
}
export const giveUsersBookById = async (userId) => {
    const {data} = await $authHost.get('api/usersBook',{params:{userId}})
    return data
}
export const delUsersBook = async (userId,bookId) => {
    const {data} = await $authHost.post('api/usersBook/del',{userId,bookId})
    return data
}
