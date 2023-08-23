export type LoginPasswordType = {
    login: string,
    password: string
}
export type NewsData = {
    "id": string
    "title": string
    "imageUrl": string
    "text": string
    "createdAt": number
}
export type AppState = {
    isAuth: boolean,
    loginError: boolean
    isLoading: boolean
    loadingError: string
    newsData: Array<NewsData>
}
