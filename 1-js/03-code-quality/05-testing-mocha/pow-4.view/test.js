describe("Степен", function() {

  describe("Х повдигнато на 3-та степен", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} на 3-та степен е ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  // ... повече тестове ще се изредят тук, и  describe, и it може да се добавят
});
