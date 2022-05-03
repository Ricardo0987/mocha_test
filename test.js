// var assert = require("assert");
const pactum = require("pactum");
const CFonts = require("cfonts");

const BASE_URL = !process.env.BASE_URL && "http://rickandmortyapi.com";
const character = !process.env.character && 521;

describe("rickandmortyapi API test", function () {
  describe("characters test", function () {
    it("get all characters", async () => {
      await pactum
        .spec()
        .get(`${BASE_URL}/api/character/`)
        .expectStatus(200)
        .expectJsonLike({
          info: { count: 826, pages: 42 },
        });
    });
    it("get specific character", async () => {
      await pactum
        .spec()
        .get(`${BASE_URL}/api/character/${character}`)
        .expectStatus(200)
        .expectJsonLike({
          id: 521,
          name: "Wasp Beth",
          status: "Alive",
          species: "Animal",
          type: "Wasp",
          gender: "Female",
        });
    });
  });
});

CFonts.say("process.env|--------------", {
  font: "tiny",
});
console.log(process.env);
CFonts.say("--------------", {
  font: "tiny",
});
