/// <reference path="kata.ts"/>
describe("Kata", function () {
    var kata;
    beforeEach(function () {
        kata = new Kata();
    });
    it('should value be equal to result', function () {
        expect((1).toString()).toEqual('1');
    });
});
