/// <reference path="kata.ts"/>
describe("Kata", function () {
    var kata;
    beforeEach(function () {
        kata = new Kata();
    });
    it('return 0 when no arguments given', function () {
        var number = kata.add();
        expect(number).toEqual(0);
    });
    it('return 0 when empty string given', function () {
        var number = kata.add("");
        expect(number).toEqual(0);
    });
    it('return the value of the number when one number given', function () {
        var number = kata.add("1");
        expect(number).toEqual(1);
    });
    it('return the sum given a string with two numbers', function () {
        var number = kata.add("1,2");
        expect(number).toEqual(3);
    });
    it('return the sum of all numbers', function () {
        var number = kata.add("1,2,3");
        expect(number).toEqual(6);
    });
    it('Should identify separtor \\n and perform the sum', function () {
        var number = kata.add("1\n2,3");
        expect(number).toEqual(6);
    });
    it('Should identify separtor \\n and perform the sum BIS', function () {
        var number = kata.add("1\n2\n3");
        expect(number).toEqual(6);
    });
});
