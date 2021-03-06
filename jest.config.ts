/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testPathIgnorePatterns: ['/node_modules/', '/coverage/'],
	coverageReporters: ['json-summary'],
	testMatch: ['**/__tests__/**/*.spec.ts'],
}
