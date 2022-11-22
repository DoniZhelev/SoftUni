let assert = require('chai').assert;
let {isOddOrEven} = require('./isOddOrEven.js');

describe('isOddOrEven', () => {
    it('should return undefined with parameter different from String', () => {
        assert.equal(undefined, isOddOrEven(21));
    })
    it('should return even if length of param is even number', () => {
        assert.equal('even', isOddOrEven('wwww'))
    })
})