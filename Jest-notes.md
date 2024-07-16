# Software Testing: Key Concepts and Best Practices

## Testing Paradigms

- **Behavior-Driven Development (BDD):**
  - Manual testing based on expected outcomes.
  - Extends user stories with "Given, When, Then" scenarios.
  - Focus on observable consequences of actions.
- **Test-Driven Development (TDD):**
  - Write tests before code, then develop code to pass tests.
  - Red-Green-Refactor cycle:
    - Write failing tests (red)
    - Write code to pass (green)
    - Improve code (refactor)
  - Incremental development with continuous testing.

## TDD Benefits

- Early error detection
- More robust code
- Increased confidence in code changes

## RITE Principles for Writing Tests

- **Readable:** Clear descriptions and failure messages.
- **Isolated:** Tests should run independently in any order.
- **Thorough:** Test edge cases and unexpected inputs.
- **Explicit:** Make it easy to replicate test results.

## Test Early and Often

- Ideally write tests before code.
- Test regularly during development.

## Unit vs. Integration Tests

- **Unit Tests:** Test individual modules in isolation.
- **Integration Tests:** Test how multiple modules work together.

## Jestjs.io

- [Jest Homepage](https://jestjs.io/)

## Anatomy of a test

![](/assets/images/english-jest-compare.png)

## Mocking

## Testing Interactive HTML with Jest: Advanced Techniques

- **Loading an entire HTML page:**

  - Use Node's `fs` module to read the HTML file's content.
  - Attach the content to the mock DOM using `document.open()`, `document.write()`, and `document.close()`.

- **Benefits:**
  - Avoids duplicating HTML code in your tests.
  - Makes tests more maintainable as changes in the HTML file are automatically reflected in the tests.

```javascript
const fs = require("fs"); // Import Node's fs module

beforeEach(() => {
  const fileContents = fs.readFileSync("./index.html", "utf-8"); // Read HTML file
  document.open();
  document.write(fileContents); // Attach HTML content to mock DOM
  document.close();
});

// ...rest of your tests...
```

## Testing Multiple DOM Components:

- Extend your tests by adding more test cases (using describe() and test() blocks).
- Target specific elements in the loaded HTML using selectors (e.g., document.getElementsByTagName('h1')).
- Use assertions to check if the elements exist and have the expected content or attributes.
