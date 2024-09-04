// jest.config.cjs
module.exports = {
    testEnvironment: 'jest-environment-jsdom', // Use the installed jsdom environment
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest', // Use babel-jest to transpile JS and JSX files
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Correct path to setup file
};
