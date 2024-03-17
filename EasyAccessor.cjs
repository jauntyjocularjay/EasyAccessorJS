/***
 * @Warning
 *      CommonJS is a pain to test and I don't want to deal with it.
 *      Use at own risk.
 */

module.exports = class EasyAccessor {
    constructor(){
        this.get = (property) =>{
            return this[property]
        }
        
        this.set = (property, value) => {
            this[property] = value
        }
    }
}