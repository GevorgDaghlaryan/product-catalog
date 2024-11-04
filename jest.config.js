// jest.config.js
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', // Map @/ to src/ directory
        '\\.module\\.css$': 'identity-obj-proxy', // Mock CSS modules
        '\\.css$': '<rootDir>/__mocks__/styleMock.js' // Mock regular CSS files
    }
};

