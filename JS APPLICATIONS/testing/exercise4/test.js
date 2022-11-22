let {addFive, subtractTen, sum} = require('./mathEnforcer');
let {assert} = require('chai')

describe('MathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined with non-number param', () => {
            assert.equal(undefined, addFive('snake'))
        })
        it('should return correct number with a number param', () => {
            assert.equal(20, addFive(15))
        })
    })
    describe('subtractTen', () => {
        it('should return undefined with non-number param', () => {
            assert.equal(undefined, subtractTen('Sharo'))
        })
        it('should return correct number with a number param', () => {
            assert.equal(15, subtractTen(25))
        })
    })
    describe('sum', () => {
        it('should return undefined with non-numbers params', () => {
            assert.equal(undefined, sum('Maro' ,'Sharo'))
        })
        it('should return correct answer with two number params', () => {
            assert.equal(15, sum(7 , 8))
        })
    })
})