let {assert} = require('chai');
let {lookupChar} = require('./charLookUp.js')

describe('lookupChar', ()=> {
    it('should return undefined with non-string first param', () => {
        assert.equal(undefined, lookupChar(0,4))
    })
    it('should return undefined with non-number second param', () => {
        assert.equal(undefined, lookupChar('gosho', 'Pesho'))
    })

    it('should return Incorrect index with an incorrect index value', ()=> {
        assert.equal('Incorrect index', lookupChar('Gosho', 12))
    })
    it('should return Incorrect index with a negative index value', ()=> {
        assert.equal('Incorrect index', lookupChar('Gosho', -12))
    })
    it('should return correct value with a correct parameters', ()=> {
        assert.equal('s', lookupChar('Gosho', 2))
    })

    

})
