
const should = require('chai').should()
const { Given, When, Then } = require('cucumber')
const {FizzBuzz} = require('../../fizzBuzz')

When('{int} is given to convert', function (int) {
    let fb = new FizzBuzz()
    this.result =  fb.convert(int)
})

Then('the should return {string}', function (string) {
    string.should.equal(this.result)
})
