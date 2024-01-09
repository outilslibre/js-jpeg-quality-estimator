module.exports = {
    bail: true,
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js'],
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 100,
            lines: 80,
            statements: 80,
        },
    },
};