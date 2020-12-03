class Triangle {

    constructor(a, b, c) {
        this.a = a
        this.b = b
        this.c = c
    }

    getType() {
        if (this.allSidesEqual())
            return 1;
        else if (this.atLeastTwoSidesEqual())
            return 2;
        else
            return 3;
    }

    atLeastTwoSidesEqual() {
        return (this.a === this.b) || (this.a === this.c) || (this.b === this.c);
    }

    allSidesEqual() {
        return (this.a === this.b) && (this.a === this.c);
    }
}

module.exports = Triangle
