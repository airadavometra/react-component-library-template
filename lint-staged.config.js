module.exports = {
  "src/**/*.{ts,tsx}": ["prettier", "eslint", "bash -c tsc"],
  "src/**/*.{js,jsx}": ["prettier", "eslint"],
  "src/**/*.{scss,css}": ["prettier", "stylelint"],
};
