
describe("Калкулатор", function() {
  let calculator;
  before(function() {
    sinon.stub(window, "prompt")

    prompt.onCall(0).returns("2");
    prompt.onCall(1).returns("3");

    calculator = new Calculator();
    calculator.read();
  });
  
  it("the read method asks for two values using prompt and remembers them in object properties", function() {
    assert.equal(calculator.a, 2);
    assert.equal(calculator.b, 3);
  });

  it("когато са въведени 2 и 3, сбора е 5", function() {
    assert.equal(calculator.sum(), 5);
  });

  it("когато са въведени 2 и 3, произведението е 6", function() {
    assert.equal(calculator.mul(), 6);
  });

  after(function() {
    prompt.restore();
  });
});
