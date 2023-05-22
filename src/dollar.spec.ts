import { Dollar } from './dollar'

describe('Dollar', () => {
    it('should return 10 when five dollars are multiplied by two', () => {
        const five: Dollar = new Dollar(5)
        let result: Dollar = five.times(2)
        expect(result.amount).toEqual(10)
        result = five.times(3)
        expect(result.amount).toEqual(15)

    });
});