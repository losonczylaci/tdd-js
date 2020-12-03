const Triangle = require("../triangle")
const expect = require("chai").expect


describe('Triangle', () => {
    it('should return 2 if triangle is equilateral', () => {
        expect(new Triangle(1, 1, 1).getType()).to.equal(1);
    })

    it('should return 2 if triangle is isosceles', () => {
        expect(new Triangle(2, 2, 3).getType()).to.equal(2);
    })

    it('should return 3 if triangle is scalene', () => {
        expect(new Triangle(1, 2, 3).getType()).to.equal(3);
    })
})
