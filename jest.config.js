module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
    },
    // "transform": {
    //     "^.+\\.(ts|tsx)$": "ts-jest"
    // },
};