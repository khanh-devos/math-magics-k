import operate from '../logic/operate';

describe('test operate', () => {
    const [a, b] = [10, 0];
    const arr = ['+', '-', 'x', '÷', '%'];
    arr.forEach(e => {
        it(`use snaphsop ${a} ${e} ${b} = ?`, () => {
            expect(operate(a, b, e)).toMatchSnapshot();
        })  
    })

    it(`use snaphsop ${a} ${'#'} ${b} = ?`, () => {
        expect(() => operate(a, b, '#')).toThrow("Unknown operation '#'");
    })
})
