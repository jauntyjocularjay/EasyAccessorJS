class EasyAccessor {
    constructor(){
        get = (property) =>{
            return this[property]
        }
        set = (property, value) => {
            this[property] = value
        }
    }
}