function analyzeHTML(htmlString, keyword) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const anchors = Array.from(doc.querySelectorAll("a"));

  let exactMatch = 0;
  let contains = 0;
  const textCounts = {};

  anchors.forEach(a => {
    const text = a.textContent.trim();
    if (text === keyword) exactMatch++;
    if (text.includes(keyword)) contains++;
    textCounts[text] = (textCounts[text] || 0) + 1;
  });

  const topLinks = Object.entries(textCounts)
    .map(([text, count]) => ({ text, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  const containerCounts = {};
  anchors.forEach(a => {
    const parentTag = a.parentElement?.tagName?.toLowerCase();
    if (parentTag) {
      containerCounts[parentTag] = (containerCounts[parentTag] || 0) + 1;
    }
  });

  return { exactMatch, contains, topLinks, containerCounts };
}

// Export for Jest if running in Node
if (typeof module !== "undefined" && module.exports) {
  module.exports = { analyzeHTML };
}

// Also attach to window so your HTML page can use it
if (typeof window !== "undefined") {
  window.analyzeHTML = analyzeHTML;
}
