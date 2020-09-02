module.exports = {
  rootDir: './',
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageReporters: [
    'json',
    'lcov',
    'text-summary',
    'clover'
  ],
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 95,
      lines: 95,
      functions: 95
    }
  },
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  setupFilesAfterEnv: [
    '<rootDir>/tests/setupTests.ts'
  ],
  testMatch: [
    '<rootDir>/tests/**/*.spec.(tsx|ts)'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/public/*',
    '<rootDir>/src/theme/*',
    '<rootDir>/src/assets/*',
    '<rootDir>/tests/setupTests.ts'
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/tests/*',
    '<rootDir>/node_modules/',
    '<rootDir>/public/*',
    '<rootDir>/src/theme/*',
    '<rootDir>/src/assets/*'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/tests/__mocks__/styleMock.js'
  },
  globals: {
    onbeforeunload: true,
    'ts-jest': {
      babelConfig: './.babelrc',
      tsConfig: './tsconfig.spec.json'
    }
  }
};
