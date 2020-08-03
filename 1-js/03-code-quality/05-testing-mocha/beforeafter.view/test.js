<<<<<<< HEAD
describe("Тест", function () {
  // Mocha обикновенно изчаква тестовете 2 секунди преди да ги счита като грешни
  this.timeout(200000); // С този код увеличаваме това - в този случая на 200 000 милисекунди
  // Това е заради "alert" функцията, тъй като ако се забавите да натиснете "OK" бутона тестовете няма да минат!

  before(() => alert("Тестването стартира – преди всички тестове"));
  after(() => alert("Тестването завърши – след всички тестове"));
=======
describe("test", function() {
  
   // Mocha usually waits for the tests for 2 seconds before considering them wrong
  
  this.timeout(200000); // With this code we increase this - in this case to 200,000 milliseconds

  // This is because of the "alert" function, because if you delay pressing the "OK" button the tests will not pass!
  
  before(() => alert("Testing started – before all tests"));
  after(() => alert("Testing finished – after all tests"));
>>>>>>> cdf382de4cf3ed39ca70cb7df60c4c4886f2d22e

  beforeEach(() => alert("Преди теста – влизаме в теста"));
  afterEach(() => alert("След теста – излизаме от теста"));

  it("Тест 1", () => alert("Това е: Тест 1"));
  it("Тест 2", () => alert("Това е: Тест 2"));
});
