var app = require("../Add.js");

describe("Addition", function () {

    it("The function should add 2 numbers", function () {
    
        var value = app.addNumber(5, 6);
    
        expect(value).toBe(11);
   });
});