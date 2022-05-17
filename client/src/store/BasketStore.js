
export default class BasketStore{
    constructor() {
        this._books =[]
        this._selectedId=""
        this._userBooks =[]
        this._users=[]
    }
    setBooks(books){
        this._books=books
    }
    setUsers(user){
        this._users=user
    }
    setSelectedId(selectedId){
        this._selectedId=selectedId
    }
    setUserBooks(userBooks){
        this._userBooks=userBooks
    }
    get users(){
        return this._users
    }
    get books(){
        return this._books
    }
    get ids(){
        return this._selectedId
    }
    get userBooks(){
        return this._userBooks
    }
}