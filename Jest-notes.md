# Software Testing: Key Concepts and Best Practices

## Testing Paradigms

* **Behavior-Driven Development (BDD):**
    * Manual testing based on expected outcomes.
    * Extends user stories with "Given, When, Then" scenarios.
    * Focus on observable consequences of actions.
* **Test-Driven Development (TDD):**
    * Write tests before code, then develop code to pass tests.
    * Red-Green-Refactor cycle:
        * Write failing tests (red)
        * Write code to pass (green)
        * Improve code (refactor)
    * Incremental development with continuous testing.

## TDD Benefits

* Early error detection
* More robust code
* Increased confidence in code changes

## RITE Principles for Writing Tests

* **Readable:** Clear descriptions and failure messages.
* **Isolated:** Tests should run independently in any order.
* **Thorough:** Test edge cases and unexpected inputs.
* **Explicit:** Make it easy to replicate test results.

## Test Early and Often

* Ideally write tests before code.
* Test regularly during development.

## Unit vs. Integration Tests

* **Unit Tests:** Test individual modules in isolation.
* **Integration Tests:** Test how multiple modules work together.


## Jestjs.io 
* [Jest Homepage](https://jestjs.io/)

## Anatomy of a test

![](/assets/images/english-jest-compare.png)
