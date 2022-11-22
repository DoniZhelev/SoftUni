let {assert, expect} = require('chai');
let PaymentPackage = require('./paymentPackage.js');

describe('PaymentPackage', () => {
    let paymentPackage;
    describe('constructor', () => {
        it('constructor should work properly with 2 params', () => {
            paymentPackage = new PaymentPackage('Pesho', 10);
            // let expected = new PaymentPackage('Pesho',10);
    
            // assert.deepEqual(paymentPackage, expected);
            assert.equal('Pesho', paymentPackage.name);
            assert.equal(10, paymentPackage.value);
        });
        
      
        it('should throw exception with incorrect name', () => {
            assert.throw(() => {
                paymentPackage = new PaymentPackage(10, 10);
            }, 'Name must be a non-empty string')
        })

        it('should throw exception with incorrect name length 0', () => {
            assert.throw(() => {
                paymentPackage = new PaymentPackage('', 10);
            }, 'Name must be a non-empty string')
        })

        it('shold throw exceptiin with incorrect value', () => {
            assert.throw(() => {
                paymentPackage = new PaymentPackage('Pesho', 'Gosho');
            }, 'Value must be a non-negative number')
        })

        it('shold throw exceptiin with incorrect value lower then 0', () => {
            assert.throw(() => {
                paymentPackage = new PaymentPackage('Pesho', -5);
            }, 'Value must be a non-negative number')
        })
    })
})