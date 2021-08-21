class FigureCalculator {
    constructor(mathBasic) {
        this._mathBasic = mathBasic;
    }
    
    _validateArgs(args) {
        if(args.length !== 2){
            throw new Error('fungsi hanya menerima dua parameter');
        }

        const [a, b] = args;

        if(typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('fungsi hanya menerima parameter number');
        }
        return args;
    }

    calculateRectangelePermeter(...args) {
        const [length, width] = this._validateArgs(args);
        // formula: (2 * (length + width))
        return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
    }
    
    calculateRectangleArea(...args) {
        const [length, width] = this._validateArgs(args);
        // formula: (length * width)
        return this._mathBasic.multiply(length, width);
    }

    calculateTrianglePerimeter(...args) {
        if(args.length !== 3){
            throw new Error('fungsi hanya menerima tiga parameter');
        }

        const [a, b, c] = args;

        if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
            throw new Error('fungsi hanya menerima parameter number');
        }

        return this._mathBasic.add(this._mathBasic.add(a,b),c);
    }

    calculateTriangleArea(...args) {
        const [base, height] = this._validateArgs(args);
        return this._mathBasic.divide(this._mathBasic.multiply(base, height),2);
    }

}

module.exports = FigureCalculator;
