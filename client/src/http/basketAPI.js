import {$authHost} from "./index";

export const createBasket = async (basketId,bookId) => {
    const {data} = await $authHost.post('api/basket',{basketId,bookId})
    return data
}

export const getBasketId = async (userId) => {
    const {data} = await $authHost.get('api/basket/one',{params:{userId}})
    return data
}

export const getBasket = async (basketId) => {
    const {data} = await $authHost.get('api/basket',{params:{basketId}})
    return data
}
export const deleteBasket = async (basketId,bookId) => {
    const {data} = await $authHost.post('api/basket/del', {basketId,bookId})
    return data
}
export const deleteUserBasket = async (userId) => {
    const {data} = await $authHost.post('api/basket/delUser', {userId})
    return data
}
export const getUserFromBook = async (bookId) => {
    const {data} = await $authHost.get('api/basket/getUser',{params:{bookId}})
    return data
}