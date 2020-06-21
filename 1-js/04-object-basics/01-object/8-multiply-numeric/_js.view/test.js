describe("multiplyNumeric", function() {
  it("умножава всички числови свойства по 2", function() {
    let menu = {
      width: 200,
      height: 300,
      title: "My menu"
    };
    let result = multiplyNumeric(menu);
    assert.equal(menu.width, 400);
    assert.equal(menu.height, 600);
    assert.equal(menu.title, "My menu");
  });

  it("не връща нищо", function() {
    assert.isUndefined( multiplyNumeric({}) );
  });

});
