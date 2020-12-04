const expect = require('chai').expect
const { ArgsSchema, Args } = require('../args')

// Kata: https://codingdojo.org/kata/Args/


describe('args kata', () => {


    it('should handle flag type arguments', () => {
        let schema = new ArgsSchema()
        schema.addFlag('l')
        schema.addFlag('k')
        let args = new Args()
        args.parse(schema, ['-l'])
        expect(args.getValue('l')).to.be.true
        expect(args.getValue('k')).to.be.false
    })

})
