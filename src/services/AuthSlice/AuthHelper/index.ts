import Cookies from 'js-cookie'

export const getAccessToken = () => {
    const accessToken = Cookies.get('accessToken')
    return accessToken
}

export const saveAccessToken = (data: string) => {
    Cookies.set('accessToken', data)
}

export const removeTokensFromStorage = () => {
    Cookies.remove('accessToken')
}