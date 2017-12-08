const chai = require("chai");
const expect = require("chai").expect;
const HelloWorld = require("../helloWorld");

describe("The famous Hello World test", function() {
  it("Should return Hello World", function() {
    const helloWorld = new HelloWorld();
    expect(helloWorld.coucou).to.equal("Hello World;");
  });
});
