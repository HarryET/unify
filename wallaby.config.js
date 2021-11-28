module.exports = () => ({
    files: ['tsconfig.json', 'src/**/*.*'],
    tests: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    env: {
        type: 'node',
    },
    testFramework: 'jest',
    debug: true,
});
