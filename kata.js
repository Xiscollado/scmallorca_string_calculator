var Kata = (function () {
    function Kata() {
    }
    Kata.prototype.add = function (value) {
        if (arguments.length == 0 || value == "")
            return 0;
        var inputWithSameDelimiters = value;
        while (inputWithSameDelimiters.indexOf("\n") != -1) {
            inputWithSameDelimiters = inputWithSameDelimiters.replace("\n", ",");
        }
        var numbers = inputWithSameDelimiters.split(",");
        var sum = 0;
        numbers.forEach(function (a) {
            sum += parseInt(a);
        });
        return sum;
    };
    ;
    return Kata;
}());
;
