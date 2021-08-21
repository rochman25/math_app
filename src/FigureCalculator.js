class FigureCalculator {
    constructor(mathBasic) {
        this._mathBasic = mathBasic;
    }
    
    _validateArgs(args, expectedArgsCount) {
        if(args.length !== expectedArgsCount){
            throw new Error(`fungsi hanya menerima ${expectedArgsCount} parameter`);
        }

        const [a, b] = args;

        args.forEach((arg) => {
            if (typeof arg !== 'number') {
              throw new Error('fungsi hanya menerima parameter number');
            }
        });

        return args;
    }

    calculateRectangelePermeter(...args) {
        const [length, width] = this._validateArgs(args, 2);
        // formula: (2 * (length + width))
        return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
    }
    
    calculateRectangleArea(...args) {
        const [length, width] = this._validateArgs(args, 2);
        // formula: (length * width)
        return this._mathBasic.multiply(length, width);
    }

    calculateTrianglePerimeter(...args) {
        const [a, b, c] = this._validateArgs(args, 3);
        // formula: (a + b) + c
        return this._mathBasic.add(this._mathBasic.add(a,b),c);
    }

    calculateTriangleArea(...args) {
        const [base, height] = this._validateArgs(args, 2);
        // formula: (base * height) / 2
        return this._mathBasic.divide(this._mathBasic.multiply(base, height),2);
    }

}

module.exports = FigureCalculator;
