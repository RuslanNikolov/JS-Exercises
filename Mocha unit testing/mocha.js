describe("createList", function (){
    let list;
    beforeEach(function() {
        list = createList();
    });
    it("should have add", function (){
        expect(list.hasOwnProperty('add')).to.equal(true, "Function add() was not found.");
    })
    it("should have shiftLeft", function (){
        expect(list.hasOwnProperty('shiftLeft')).to.equal(true, "shiftLeft was not found.");
    })
    it("should have shiftRight", function (){
        expect(list.hasOwnProperty('shiftRight')).to.equal(true, "shiftRight) was not found.");
    })
    it("should have swap", function (){
        expect(list.hasOwnProperty('swap')).to.equal(true, "swap was not found.");
    })
    it("should have toString", function (){
        expect(list.hasOwnProperty('toString')).to.equal(true, "toString was not found.");
    })
    it("should add number", function (){
        list.add(5);
        expect(list.toString()).to.equal('5', "Function add() was not found.");
    })
    it("should add string", function (){
        list.add('gosho');
        expect(list.toString()).to.equal('gosho', "string not added");
    })
    it("should add object", function (){
        list.add({a:5});
        expect(list.toString()).to.equal('[object Object]', "obj not added");
    })
    it("should add function", function (){
        list.add(function s(){});
        expect(list.toString()).to.equal('function s(){}', "func not added");
    })
    it("should add arr", function (){
        list.add([1,2]);
        expect(list.toString()).to.equal('1,2', "arr not added");
    })
    it("shouldnt shiftLeft", function (){
        list.add(5);
        list.add(6);
        list.add(7);
        list.shiftLeft();
        expect(list.toString()).to.equal('6, 7, 5', "arr not added");
    })
    it("shouldnt shiftRight", function (){
        list.add(5);
        list.add(6);
        list.add(7);
        list.shiftRight()
        expect(list.toString()).to.equal('7, 5, 6', "arr not added");
    })
    it("false if index1 not number", function (){
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.swap('gosho',2)).to.equal(false, 'index1 is a number')
    })
    it("false if index2 not number", function (){
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.swap(2,'gosho')).to.equal(false, 'index1 is a number')
    })
    it("false if index1 below zero", function (){
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.swap(-1,1)).to.equal(false, 'index1 is a number')
    })
    it("false if index2 below zero", function (){
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.swap(1,-1)).to.equal(false, 'index1 is a number')
    })
    it("false if index1 above length", function (){
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.swap(3,1)).to.equal(false, 'index1 is a number')
    })
    it("false if index2 above length", function (){
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.swap(1,3)).to.equal(false, 'index1 is a number')
    })
    it("false if index1 = index2", function (){
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.swap(2,2)).to.equal(false, 'index1 is a number')
    })
    it("swap and return true", function (){
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.swap(0,2)).to.equal(true, 'index1 is a number')
        expect(list.toString()).to.equal('3, 2, 1', 'index1 is a number')

    })
    it("correct toString", function (){
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.toString()).to.equal('1, 2, 3', 'index1 is a number')

    })

});