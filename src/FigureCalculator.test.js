const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A FigureCalculator', () => {
    it('should contains calculateRectangelePermeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea function', () => {
        const figureCalculator = new FigureCalculator();
        expect(figureCalculator).toHaveProperty('calculateRectangelePermeter');
        expect(figureCalculator).toHaveProperty('calculateRectangleArea');
        expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
        expect(figureCalculator).toHaveProperty('calculateTriangleArea');
        expect(figureCalculator.calculateRectangelePermeter).toBeInstanceOf(Function);
        expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
        expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
        expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
    });

    describe('A calculateRectangelePermeter function', () => {
        it('should throw error when not given 2 parameters', () => {
            const figureCalculator = new FigureCalculator();
            expect(() => figureCalculator.calculateRectangelePermeter()).toThrowError();
            expect(() => figureCalculator.calculateRectangelePermeter(1)).toThrowError();
            expect(() => figureCalculator.calculateRectangelePermeter(1, 2, 3)).toThrowError();
            expect(() => figureCalculator.calculateRectangelePermeter(1, 2, 3, 4)).toThrowError();
        });

        it('should throw error when given non-number parameters', () => {
            const figureCalculator = new FigureCalculator();
            expect(() => figureCalculator.calculateRectangelePermeter([], {})).toThrowError();
            expect(() => figureCalculator.calculateRectangelePermeter(true, {})).toThrowError();
            expect(() => figureCalculator.calculateRectangelePermeter(null, '2')).toThrowError();
        });

        it('should return correct value based on rectangle perimeter formula', () => {
            // Arrange
            const length = 20;
            const width = 10;
            const spyAdd = jest.spyOn(MathBasic, 'add');
            const spyMultiply = jest.spyOn(MathBasic, 'multiply');
            const figureCalculator = new FigureCalculator(MathBasic);
            // Action
            const result = figureCalculator.calculateRectangelePermeter(length, width);
            // Assert
            expect(result).toEqual(60); // 2 x (length + width)
            expect(spyAdd).toHaveBeenCalledWith(length, width);
            expect(spyMultiply).toHaveBeenCalledWith(2, 30); // (length + width)
        });
    });
});