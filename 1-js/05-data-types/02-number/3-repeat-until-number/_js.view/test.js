beforeEach(function() {
  sinon.stub(window, "prompt");
});

afterEach(function() {
  prompt.restore();
});

describe("Тестване на функцията 'readNumber'", function() {

  it("Ако е число го връща", function() {
    prompt.returns("123");
    assert.strictEqual(readNumber(), 123);
  });

  it("Ако е 0 го връща", function() {
    prompt.returns("0");
    assert.strictEqual(readNumber(), 0);
  });

  it("продължава цикъла, докато срещне число", function() {
    prompt.onCall(0).returns("не е число");
    prompt.onCall(1).returns("не е число, отново");
    prompt.onCall(2).returns("1");
    assert.strictEqual(readNumber(), 1);
  });

  it("Ако са празни линии връща null", function() {
    prompt.returns("");
    assert.isNull(readNumber());
  });

  it("Ако потребителят е отказал, връща null", function() {
    prompt.returns(null);
    assert.isNull(readNumber());
  });

});
