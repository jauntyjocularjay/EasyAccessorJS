class EasyAccessor {
    constructor(){
        this.get = (property) =>{
            return this[property]
        }
        
        this.set = (property, value) => {
            this[property] = value
        }
    }
}

export { EasyAccessor }
