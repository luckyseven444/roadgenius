const { analyzeHTML } = require("../src/analyzer");

describe("analyzeHTML", () => {
  const sampleHTML = `
    <div>
      <a href="#">hello</a>
      <a href="#">hello</a>
      <a href="#">world</a>
      <section>
        <a href="#">inside section</a>
      </section>
    </div>
  `;

  test("link counting is correct", () => {
    const result = analyzeHTML(sampleHTML, "hello");
    expect(result.exactMatch).toBe(2);
    expect(result.contains).toBe(2); // "hello" + "hello"
  });

  test("section detection works", () => {
    const result = analyzeHTML(sampleHTML, "x");
    expect(result.containerCounts["section"]).toBe(1);
    expect(result.containerCounts["div"]).toBe(3); // 3 anchors under div
  });
});
