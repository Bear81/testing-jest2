/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

/** Mocking a single Dom Element
beforeEach(() => {
  document.body.innerHTML = "<p id='par'></p>";
});
*/

// Mocking the entire DOM from the index.html
beforeEach(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("index.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();
});

describe("DOM test", () => {
  test("expects p content to change", () => {
    buttonClick();
    expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
  });
  test("h1 should exists", () => {
    expect(document.getElementsByTagName("h1").length).toBe(1);
  });
});
