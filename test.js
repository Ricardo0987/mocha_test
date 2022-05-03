var assert = require('assert');

const BASE_URL = !process.env.BASE_URL && "http://rickandmortyapi.com";
const character = !process.env.character && 521;

describe("rtest group", function () {
  describe("test 1", function () {
    it("get all characters", function () {
      assert.equal(5, 5);
    });
  });
});

console.log(process.env);
