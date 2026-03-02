module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.tests.js', '**/?(*.)+(spec|test).js'],
  collectCoverageFrom: ['src/**/*.js', '!src/tests/**']
};
