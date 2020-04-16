describe("Степен", function() {

  describe("Х повдигнато на 3-та степен", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} на степен 3 е ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  it("Ако n е отрицателно, резултатът е NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("Ако n не е integer(цяло число), резултатът е NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });

});
