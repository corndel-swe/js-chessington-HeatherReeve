import {Maths} from '../exercises/maths.js'
import { describe, it} from 'mocha'
import assert from 'assert'

describe('Maths class', function() {
    it('should have PI equal to 3.14', function (){
        const PI = new Maths () 
            assert.strictEqual (Maths.PI, 3.14)
        
    })
})



describe('Maths class', function() {
    it('returns largets of two numbers', function (){
        const max = Maths.max(9,15) 
            assert.strictEqual (max, 15)
        
    })
})

describe('Math class', function (){
it ('returns the same number when given a whole number', function () { 
const round = Maths.round(4)
assert.strictEqual (round, 4)


}) 
 })
 
describe('Math class', function (){
    it ('rounds down', function () { 
    const round = Maths.round(4.2)
    assert.strictEqual (round, 4)
    
    
    }) 
})
    
    describe('Math class', function (){
        it ('rounds up', function () { 
        const round = Maths.round(4.8)
        assert.strictEqual (round, 5)
        
        
        }) 
    })
    describe('Math class', function (){
        it ('rounds down', function () { 
            
        const floorDown = Maths.floor(4.8)
        assert.strictEqual (floorDown, 4)
        
        
        }) 
    })
        