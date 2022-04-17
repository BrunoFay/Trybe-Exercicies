var Dogs = /** @class */ (function () {
    function Dogs(breed, color, dangerous) {
        this.breed = breed;
        this.color = color;
        this.dangerous = dangerous;
    }
    Dogs.prototype.dogDescription = function () {
        return "this dog belogs to breed ".concat(this.breed, "\n    ,").concat(this.color ? "has color ".concat(this.color, ",") : ",", " it's dangerous?").concat(this.dangerous, " ");
    };
    return Dogs;
}());
var poodle = new Dogs('poodle', 'white', false);
console.log(poodle.dogDescription());
