const translate = require("../src/translate");
const vowels = ["a", "e", "i", "o", "u"];

describe("translate function", () => {
  test("words that start with the vowels a", () => {
    let result = translate("apple");
    expect(result).toBe("appleway");
  });
  test("words that start with the vowels e", () => {
    let result = translate("ear");
    expect(result).toBe("earway");
  });
  test("words that start with the vowels i", () => {
    let result = translate("idea");
    expect(result).toBe("ideaway");
  });
  test("words that start with the vowels o", () => {
    let result = translate("oval");
    expect(result).toBe("ovalway");
  });
  test("words that start with the vowels u", () => {
    let result = translate("unicorn");
    expect(result).toBe("unicornway");
  });
});

describe("translate capital letters function", () => {
  test("words that start with capital vowels A", () => {
    let result = translate("Apple");
    expect(result).toBe("apple");
  });
  test("words that start with capital vowels E", () => {
    let result = translate("Ear");
    expect(result).toBe("ear");
  });
  test("words that start with capital vowels I", () => {
    let result = translate("Idea");
    expect(result).toBe("idea");
  });
  test("words that start with capital vowels O", () => {
    let result = translate("Oval");
    expect(result).toBe("oval");
  });
  test("words that start with capital vowels U", () => {
    let result = translate("Unicorn");
    expect(result).toBe("unicorn");
  });
});
