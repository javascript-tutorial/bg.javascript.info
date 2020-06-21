describe("isEmpty", function() {
  it("връща 'true' за празен обект", function() {
    assert.isTrue(isEmpty({}));
  });

  it("връща 'false' ако има свойство", function() {
    assert.isFalse(isEmpty({
      anything: false
    }));
  });
});