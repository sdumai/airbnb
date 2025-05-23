const path = require("path");
const CracoLessPlugin = require("craco-less");
module.exports = {
  // less
  plugins: [{ plugin: CracoLessPlugin }],
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
