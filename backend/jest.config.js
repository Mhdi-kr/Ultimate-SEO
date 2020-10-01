module.exports = {
    "roots": [
      "<rootDir>/tests"
    ],
  "preset": 'ts-jest',
  "testEnvironment": 'node',
  "moduleDirectories": ["src", 'node_modules'],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};

