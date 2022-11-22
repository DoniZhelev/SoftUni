let {assert} = require('chai');
let StringBuilder = require('./string-builder')

describe('StringBuilder', ()=>{
    let sb;
    beforeEach(()=>{
        sb = new StringBuilder();
    })
    describe('verifyParams', ()=>{
        it('should throw Exception when params are not a strings', ()=>{
           assert.throw(()=>{
               new StringBuilder({});
           }, 'Argument must be string');

            
        })
        })
    describe('constructor', ()=>{
        it('should work properly with arguments', ()=>{
            sb = new StringBuilder('Sharo');

            assert.equal('Sharo', sb.toString())
        })
        it('should work properly withouth arguments', ()=>{
            assert.equal('', sb.toString())
        })
    })
    describe('append', ()=> {
        it('should append text at the end of a string',() =>{
            sb.append('Sharo')
            assert.equal('Sharo', sb.toString())
        })
    })
    describe('prepend', ()=> {
        it('should prepend text at the beginning of a string',() =>{
            sb.append('haro')
            sb.prepend('S')
            assert.equal('Sharo', sb.toString())
        })
    })
    describe('insertAt', ()=> {
        it('should insert text at the index',() =>{
            sb.append('Shro')
            sb.insertAt('a', 2)
            assert.equal('Sharo', sb.toString())
        })
    })
    describe('remove', ()=> {
        it('should remove text from index to length',() =>{
            sb.append('Sharo')
            sb.remove(0,1)
            assert.equal('haro', sb.toString())
        })
    })
    describe('toString', ()=> {
        it('should return correct string',() =>{
            sb.append('Sharo')
            assert.equal('Sharo', sb.toString())
        })
    })
})