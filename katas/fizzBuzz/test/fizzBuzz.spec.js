const should = require('chai').should()
const {FizzBuzz} = require('../fizzBuzz')

describe("Testing FizzBuzz", () => {

    before( () => {
        this.fb = new FizzBuzz()
    })

    it('should return 0 in case 0', ()=> {
        this.fb.convert(0).should.equal('0')
    })

    it('should return 1 in case 1', () => {
        this.fb.convert(1).should.equal('1')
    })

    it('should return Fizz if multiple of 3' , () =>{
        this.fb.convert(3).should.equal('Fizz')
        this.fb.convert(33).should.equal('Fizz')
    })

    it('should return Buzz if multiple of 5', () => {
        this.fb.convert(5).should.equal('Buzz')
        this.fb.convert(20).should.equal('Buzz')
    })

    it('should return FizzBuzz if multiple of 3 AND 5', () => {
        this.fb.convert(15).should.equal('FizzBuzz')
        this.fb.convert(30).should.equal('FizzBuzz')
    })
})