import { default as EA } from '../EasyAccessor.mjs'
import {
    throwError,
    did,
    does,
    have,
    has,
    is,
    matches,
    getCounter,
    valueMatch,
    objectsMatch,
    throwsError,
    constructorThrowsError,
    nullCheck
} from './ChaiTests/Chai.mjs'



class Color extends EA {
    constructor(r,g,b){
        super()
        this.r = r
        this.g = g
        this.b = b
    }
}

describe('EasyAccessor', () => {
    const red = new Color(255,0,0)
    const purple = new Color(255,0,0)
    purple.set('b', 128)

    valueMatch(red.get('r'), 255)
    valueMatch(red.get('g'), 0)
    valueMatch(red.get('b'), 0)
    valueMatch(purple.get('r'), 255)
    valueMatch(purple.get('g'), 0)
    valueMatch(purple.get('b'), 128)
})