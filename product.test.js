const product = require("./product.js");


describe("set of product tests", () => {
    test("3 * 3 must be equal to 9", () => {
        expect(product(3,3)).toBe(9);
    })
    xtest("4 * 4 must be equal to 16", () => {
        expect(product(4,4)).toBe(16);
    })
})