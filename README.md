# Exercises in software testing

> A simple collection of small JavaScript exercises to practice software testing.

## What is this?

This is the side material for my workshop on software testing for the Microsoft Reactor Stockholm sessions for beginners. It's a collection of small JavaScript exercises to practice software testing. The activities are designed to be simple and easy to understand so you can focus on the testing part.

You can check my small slide presentation [here](https://slides.lsantos.dev/software-testing-with-javascript) (in English). There are not many slides because the session was a hands-on workshop, so I recommend you try the exercises yourself because the slides will only provide some context on concepts and initial understanding.

## Environment

You'll have to install [Node.js](https://nodejs.org) version 18 or later since we'll be using the experimental test runner. I won't show how this is installed here because there's plenty of content about it on the Internet.

Some exercises will not need any external dependencies, and some will be run with test runners aside from Node's native one (like Jest), so you'll need to run `npm install` inside those folders so the test runner can be executed.

## How to use the repository

The repository is divided into exercise folders; each folder has a number in front to show which order they should be done. They go from the most basic to more advanced examples as you progress.

> Be aware that, in some folders, there's also a `package.json`, if this is the case, run `npm install` inside the directory to install the packages

0. **Assertions**: Exercises in this folder will show how to assert different types of expressions; it's meant to be executed with the default node `assert` library
1. **Test suites**: Exercises here will show how to use test grouping to make tests easier to read, for now, you'll use only Node.js native test runner; the tests can be executed with `node --test <file-name>`
2. **Test runners**: Here you'll need to run `npm install jest` inside de folder to install the Jest test runner. All subsequent testing can be done with the `npm test` command
3. **Test doubles**: From now on, we'll be using Jest as the test runner. This directory has some more advanced testing cases to teach the use of test doubles
4. **TDD**: This directory doesn't contain any code, only descriptions of functions and features you should create using the TDD approach.

Besides that, each individual directory also has its own README file explaining more about its contents.

The solved exercises can be seen in the `resolved` branch.

### Challenges

Challenges are sets of questions that will defy your knowledge, they don't have an answer in the `resolved` branch which means you'll have to do it by yourself! Good luck.

## Got more exercises?

If you want to contribute with more exercises and add more tests, feel free to do so opening a PR with your new test files, just make sure that they're following the same code conventions as the other files.
