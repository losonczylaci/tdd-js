const expect = require('chai').expect
const { ArgsSchema, Args } = require('../args')

// Kata: https://codingdojo.org/kata/Args/

describe('args kata', () => {

    before(() => {
        this.args = new Args()
        this.schema = new ArgsSchema()
    })

    it('should handle flag type arguments', () => {
        this.schema.addFlag('l')
        this.schema.addFlag('k')
        this.args.parse(this.schema, ['-l'])
        expect(this.args.getValue('l')).to.be.true
        expect(this.args.getValue('k')).to.be.false
    })

    it('should handle int type arguments', () => {
        this.schema.addInt('p')
        this.schema.addInt('q')
        this.args.parse(this.schema, ['-p', '8080'])
        expect(this.args.getValue('p')).to.equal(8080)
        expect(this.args.getValue('q')).to.equal(0)
    })

    it('should handle string type arguments', () => {
        this.schema.addString('n')
        this.schema.addString('m')
        this.args.parse(this.schema, ['-n', 'Mark'])
        expect(this.args.getValue('n')).to.equal('Mark')
        expect(this.args.getValue('m')).to.equal('')
    })

    it('should handle schema with mixed types', () => {
        this.schema.addString('d')
        this.schema.addFlag('l')
        this.schema.addInt('p')
        this.args.parse(this.schema, ['-l', '-p', '8080', '-d', '/usr/logs'])
        expect(this.args.getValue('l')).to.equal(true)
        expect(this.args.getValue('p')).to.equal(8080)
        expect(this.args.getValue('d')).to.equal('/usr/logs')
    })
})
