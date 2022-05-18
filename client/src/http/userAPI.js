import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const registration =async (name,surname, email, password,phone) => {
    const {data} = await $host.post('api/user/registration',{name,surname,email,password,phone,subscription:false,role:'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
export const login =async (email, password) => {
    const {data} = await $host.post('api/user/login',{email,password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
export const check =async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
export const getOneUser =async (id) => {
    const {data} = await $authHost.get('api/user/one',{params:{id}})
    return data
}
export const getAllUsers =async () => {
    const {data} = await $authHost.get('api/user/all')
    return data
}
export const deleteUser =async (id) => {
    const {data} = await $authHost.post('api/user/del',{id})
    return data
}
export const updateToAdmin =async (id) => {
    const {data} = await $authHost.post('api/user/toAdmin',{id})
    return data
}
export const updateToUser =async (id) => {
    const {data} = await $authHost.post('api/user/toUser',{id})
    return data
}
export const updateSubscriptionToTrue =async (id) => {
    const {data} = await $authHost.post('api/user/toTrue',{id})
    return data
}
export const updateSubscriptionToFalse=async (id) => {
    const {data} = await $authHost.post('api/user/toFalse',{id})
    return data
}